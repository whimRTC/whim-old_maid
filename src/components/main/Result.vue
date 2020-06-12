<template>
  <div>
    <h2 class="subtitle stroke">
      結果
    </h2>
    <div>
      <PlayingCard :signature="leftSig" class="img" />
      <PlayingCard :signature="rightSig" class="img" />
    </div>
  </div>
</template>
<script>
export default {
  name: "DrawerResult",
  components: {
    PlayingCard: () => import("@/components/PlayingCard")
  },
  computed: {
    leftSig() {
      return !this.$whim.selectedRight
        ? !this.$whim.jokerRight
          ? "joker"
          : "as"
        : null;
    },
    rightSig() {
      return this.$whim.selectedRight
        ? this.$whim.jokerRight
          ? "joker"
          : "as"
        : null;
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
</style>
