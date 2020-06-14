<template>
  <div>
    <h2 class="subtitle stroke">
      結果
    </h2>
    <div class="cards">
      <PlayingCard :signature="leftSig" />
      <PlayingCard :signature="rightSig" />
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
      return !this.$whim.state.selectedRight
        ? !this.$whim.state.jokerRight
          ? "joker"
          : "as"
        : null;
    },
    rightSig() {
      return this.$whim.state.selectedRight
        ? this.$whim.state.jokerRight
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
<style lang="scss" scoped></style>
