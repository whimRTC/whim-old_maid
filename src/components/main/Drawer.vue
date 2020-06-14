<template>
  <div>
    <h2 class="subtitle stroke">
      ジョーカーを選ぶな！
    </h2>
    <div class="cards">
      <PlayingCard
        cover
        :class="{ border: seeingLeft }"
        @click="select(false)"
        @mouseover="mouseoverLeft"
      />
      <PlayingCard
        cover
        :class="{ border: seeingRight }"
        @click="select(true)"
        @mouseover="mouseoverRight"
      />
    </div>
  </div>
</template>
<script>
import isMobile from "ismobilejs";
export default {
  name: "Drawer",
  components: {
    PlayingCard: () => import("@/components/PlayingCard")
  },
  data() {
    return {
      mobileOrTablet: isMobile.any
    };
  },
  computed: {
    seeingLeft() {
      return this.$whim.state.mouseoverRight === false;
    },
    seeingRight() {
      return this.$whim.state.mouseoverRight === true;
    }
  },
  methods: {
    select(sideRight) {
      if (
        this.mobileOrTablet &&
        this.$whim.state.mouseoverRight !== sideRight
      ) {
        this.$whim.assignState({
          mouseoverRight: sideRight
        });
        return;
      }
      const jokerRight = this.$whim.state.jokerRight;
      if (sideRight === jokerRight) {
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
  // width: 150px;
  // max-width: 30vw;
  &:hover {
    border: solid;
    box-sizing: border-box;
    border-radius: 20px;
    border-width: 10px;
    border-color: yellow;
  }
}
</style>
