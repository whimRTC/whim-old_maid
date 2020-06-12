<template>
  <div>
    <h2 class="subtitle">
      ジョーカーを選ばせろ！
    </h2>
    <div>
      <!-- <img :src="leftSrc" class="img" /> -->
      <!-- <img :src="rightSrc" class="img" /> -->
      <PlayingCard
        :signature="leftSig"
        class="img"
        :class="{ border: !$whim.state.mouseoverRight }"
      />
      <PlayingCard
        :signature="rightSig"
        class="img"
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
      let sig = !this.$whim.jokerRight ? "joker" : "as";
      return sig;
    },
    rightSig() {
      let sig = this.$whim.jokerRight ? "joker" : "as";
      return sig;
    },
    phase() {
      return this.$whim.state.phase;
    }
  }
};
</script>
<style lang="scss" scoped>
.img {
  width: 150px;

  max-width: 30vw;
}
.border {
  border: solid;
  box-sizing: border-box;
  border-radius: 20px;
  border-width: 10px;
  border-color: yellow;
}
</style>
