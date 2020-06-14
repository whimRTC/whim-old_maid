<template>
  <div>
    <h2 class="subtitle stroke">
      結果
    </h2>
    <div align="center">
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
<style lang="scss" scoped></style>
