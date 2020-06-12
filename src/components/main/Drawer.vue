<template>
  <div>
    <h2 class="subtitle">
      ジョーカーを選ぶな！
    </h2>
    <div>
      <PlayingCard
        cover
        class="img"
        @click="select(false)"
        @mouseover="mouseoverLeft"
      />
      <PlayingCard
        cover
        class="img"
        @click="select(true)"
        @mouseover="mouseoverRight"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "Drawer",
  components: {
    PlayingCard: () => import("@/components/PlayingCard")
  },
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
      this.$whim.assignState({
        mouseoverRight: false
      });
    },
    // mouseover時の処理
    mouseoverRight() {
      this.$whim.assignState({
        mouseoverRight: true
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.img {
  width: 150px;
  max-width: 30vw;
  &:hover {
    border: solid;
    box-sizing: border-box;
    border-radius: 20px;
    border-width: 10px;
    border-color: yellow;
  }
}
</style>
