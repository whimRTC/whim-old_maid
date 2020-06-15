<template>
  <div>
    <h2 class="subtitle stroke">ジョーカーを選ぶな！</h2>
    <div class="cards">
      <PlayingCard
        cover
        :seeing="seeingLeft"
        @click="select(false)"
        @mouseover="mouseoverLeft"
        @mouseleave="mouseleave"
      />
      <PlayingCard
        cover
        :seeing="seeingRight"
        @click="select(true)"
        @mouseover="mouseoverRight"
        @mouseleave="mouseleave"
      />
    </div>
  </div>
</template>
<script>
import isMobile from "ismobilejs";
const mobileOrTablet = isMobile(window.navigator).any;
export default {
  name: "Drawer",
  components: {
    PlayingCard: () => import("@/components/PlayingCard")
  },
  computed: {
    seeingLeft() {
      return this.$whim.state.seeingRight === false;
    },
    seeingRight() {
      return this.$whim.state.seeingRight === true;
    }
  },
  methods: {
    select(sideRight) {
      if (mobileOrTablet && this.$whim.state.seeingRight !== sideRight) {
        this.$whim.assignState({
          smartphone: true,
          seeingRight: sideRight
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
      if (!mobileOrTablet)
        this.$whim.assignState({
          seeingRight: false
        });
    },
    // mouseover時の処理
    mouseoverRight() {
      if (!mobileOrTablet)
        this.$whim.assignState({
          seeingRight: true
        });
    },
    mouseleave() {
      if (!mobileOrTablet)
        this.$whim.assignState({
          seeingRight: null
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
