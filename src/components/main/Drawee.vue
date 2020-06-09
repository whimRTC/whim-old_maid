<template>
  <div>
    <h2 class="subtitle">
      ジョーカーを選ばせろ！
    </h2>
    <div>
      <img :src="leftSrc" class="img" />
      <img :src="rightSrc" class="img" />
    </div>
  </div>
</template>
<script>
export default {
  name: "Drawee",
  computed: {
    leftSrc() {
      let src = !this.$whim.jokerRight
        ? "../../assets/joker.png"
        : "../../assets/card1.png";
      if (!this.$whim.selectedRight)
        src = src.replace(/\/(.*)\.png/g, "/$1_highlight.png");
      return src;
    },
    rightSrc() {
      let src = this.$whim.jokerRight
        ? "../../assets/joker.png"
        : "../../assets/card1.png";
      if (this.$whim.selectedRight)
        src = src.replace(/\/(.*)\.png/g, "/$1_highlight.png");
      return src;
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
