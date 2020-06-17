<template>
  <div>
    <h2 class="subtitle stroke">ジョーカーを選ぶな！</h2>
    <div class="cards">
      <PlayingCard
        cover
        :seeing="seeingLeft"
        @click="preselect(false)"
        @mouseover="mouseoverLeft"
        @mouseleave="mouseleave"
      />
      <PlayingCard
        cover
        :seeing="seeingRight"
        @click="preselect(true)"
        @mouseover="mouseoverRight"
        @mouseleave="mouseleave"
      />
    </div>
    <div class="fulloverlay" v-if="selected !== null">
      <div class="selecting-container">
        <h2>そっちで大丈夫?</h2>
        <div class="answer">
          <p class="answer-yes" @click="select(selected)">これにする</p>
          <p class="answer-no" @click="quitSelect">選び直す</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import isMobile from "ismobilejs";
const mobileOrTablet = isMobile(window.navigator).any;
export default {
  name: "Drawer",
  data: function() {
    return {
      selected: null
    };
  },
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
    preselect(sideRight) {
      if (mobileOrTablet && this.$whim.state.seeingRight !== sideRight) {
        this.$whim.assignState({
          seeingRight: sideRight
        });
        return;
      }
      this.$whim.assignState({
        sound: true,
        seeingRight: sideRight
      });
      this.selected = sideRight;
    },
    select(sideRight) {
      const jokerRight = this.$whim.state.jokerRight;
      if (sideRight === jokerRight) {
        this.$whim.assignState({
          sound: true,
          phase: "done",
          winner: "drawer",
          selectedRight: sideRight
        });
      } else {
        this.$whim.assignState({
          sound: true,
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
      if (!mobileOrTablet && this.selected === null)
        this.$whim.assignState({
          seeingRight: null
        });
    },
    quitSelect() {
      // this.$whim.assignState({
      //   sound: true
      // });
      this.selected = null;
    }
  }
};
</script>
<style lang="scss" scoped>
.selecting-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffffe0;
  border: solid;
  border-color: #ffffffe0;
  border-radius: 10px;
  border-width: 0;
  padding: 20px;
  text-align: center;
}
.answer {
  display: flex;
  justify-content: center;
  cursor: pointer;
  .answer-yes {
    color: white;
    background-color: #05b0ff;
    border-radius: 4px;
    padding: 15px 10px;
    margin-right: 20px;
  }
  .answer-no {
    color: white;
    background-color: rgb(253, 83, 5);
    border-radius: 4px;
    padding: 15px 10px;
  }
}
.fulloverlay {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 2147483647;
}
</style>
