<template>
  <div>
    <h2 class="subtitle">
      ジョーカーを選ぶな！
    </h2>
    <div>
      <img
        :src="leftSrc"
        class="img"
        @click="select(false)"
        @mouseover="mouseoverLeft"
        @mouseleave="mouseleaveLeft"
      />
      <img
        :src="rightSrc"
        class="img"
        @click="select(true)"
        @mouseover="mouseoverRight"
        @mouseleave="mouseleaveRight"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "Drawer",
  data() {
    return {
      leftSrc: require("@/assets/card.png"),
      rightSrc: require("@/assets/card.png")
    };
  },
  methods: {
    select(sideRight) {
      const jokerRight = this.$whim.state.jokerRight;
      if (sideRight === jokerRight) {
        // if (sideRight) {
        //   this.rightSrc = require(jokerRight
        //     ? "@/assets/joker.png"
        //     : "@/assets/card1.png");
        // } else {
        //   this.leftSrc = require(!jokerRight
        //     ? "@/assets/joker.png"
        //     : "@/assets/card1.png");
        // }
        this.$whim.assignState({
          phase: "done",
          winner: "drawer",
          selectedRight: sideRight
        });
      } else {
        this.$whim.assignState({
          phase: "done",
          winner: "drawee",
          selectedRight: sideRight
        });
      }
    },
    // mouseover時の処理
    mouseoverLeft() {
      this.leftSrc = require("@/assets/card_highlight.png");
      this.$whim.assignState({
        mouseover: "left"
      });
    },
    // mouseleave時の処理
    mouseleaveLeft() {
      this.leftSrc = require("@/assets/card.png");
    },
    // mouseover時の処理
    mouseoverRight() {
      this.rightSrc = require("@/assets/card_highlight.png");
      this.$whim.assignState({
        mouseover: "right"
      });
    },
    // mouseleave時の処理
    mouseleaveRight() {
      this.rightSrc = require("@/assets/card.png");
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
