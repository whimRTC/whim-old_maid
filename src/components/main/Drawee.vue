<template>
  <div>
    <h2 class="subtitle stroke">
      ジョーカーを選ばせろ！
    </h2>
    <div class="cards">
      <!-- <img :src="leftSrc" class="img" /> -->
      <!-- <img :src="rightSrc" class="img" /> -->
      <PlayingCard
        :signature="leftSig"
        :class="{ border: !$whim.state.mouseoverRight }"
      />
      <PlayingCard
        :signature="rightSig"
        :class="{ border: $whim.state.mouseoverRight }"
      />
    </div>
  </div>
</template>
<script>
// import VuePlayingCard from "vue-playing-card";
export default {
  name: "Drawee",
  components: {
    PlayingCard: () => import("@/components/PlayingCard")
  },
  computed: {
    leftSig() {
      return !this.$whim.state.jokerRight ? "joker" : "as";
    },
    rightSig() {
      return this.$whim.state.jokerRight ? "joker" : "as";
    },
    phase() {
      return this.$whim.state.phase;
    }
  }
};
</script>
<style lang="scss" scoped></style>
