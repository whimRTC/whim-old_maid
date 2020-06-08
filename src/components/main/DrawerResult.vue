<template>
  <div>
    <h2 class="subtitle">
      結果
    </h2>
    <div>
      <img :src="leftSrc" class="img" />
      <img :src="rightSrc" class="img" />
    </div>
  </div>
</template>
<script>
export default {
  name: "DrawerResult",
  computed: {
    leftSrc() {
      return require(!this.$whim.selectedRight
        ? !this.$whim.jokerRight
          ? "@/assets/joker.png"
          : "@/assets/card1.png"
        : "@/assets/card.png");
    },
    rightSrc() {
      return require(this.$whim.selectedRight
        ? this.$whim.jokerRight
          ? "@/assets/joker.png"
          : "@/assets/card1.png"
        : "@/assets/card.png");
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
