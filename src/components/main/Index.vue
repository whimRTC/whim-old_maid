<template>
  <div class="container">
    <a v-if="!phase" class="btn" @click="beDrawer">引く方をやる</a>
    <!-- <a v-if="phase === 'beginning'" class="btn" @click="beDrawee">引かれる方をやる</a> -->
    <Drawer v-if="myRole === 'drawer' && phase === 'playing'" class="me" />
    <Drawee v-if="myRole !== 'drawer' && phase === 'playing'" class="me" />
    <Result v-if="phase === 'done'" class="me" />
    <a v-if="phase === 'done'" class="btn2" @click="reset">もう一度</a>
  </div>
</template>
<script>
import { Howl } from "howler";
const SE = new Howl({ src: require("@/assets/jump02.mp3") });
SE.volume(0.03);
export default {
  name: "Main",
  components: {
    Drawer: () => import("@/components/main/Drawer"),
    Result: () => import("@/components/main/Result"),
    Drawee: () => import("@/components/main/Drawee")
  },
  computed: {
    users() {
      return this.$whim.users;
    },
    phase() {
      return this.$whim.state.phase;
    },
    myRole() {
      return this.$whim.state[this.$whim.accessUser.id];
    },
    isAccessUserSelected() {
      return !!this.$whim.state[this.$whim.accessUser.id];
    },
    sound() {
      return this.$whim.state.sound;
    }
  },
  methods: {
    reset() {
      this.$whim.resetState();
    },
    beDrawer() {
      this.$whim.assignState({
        sound: true,
        phase: "playing",
        [this.$whim.accessUser.id]: "drawer",
        jokerRight: Math.random() < 0.5
      });
    }
  },
  watch: {
    sound: function(newSound) {
      if (newSound) {
        SE.play();
        this.$whim.assignState({
          sound: null
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
  display: block;
  background-color: #05b0ff;
  color: #fff;
  padding: 0.8em;
  text-decoration: none;
  border-radius: 4px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.2);
  transition: 0.3s ease-out;
  position: absolute;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  width: 100px;
  text-align: center; /*一応BOX内の文字も中央寄せ*/

  &:hover {
    cursor: pointer;
    text-decoration: none;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.12),
      0 3px 20px 0 rgba(0, 0, 0, 0.12), 0 5px 6px -2px rgba(0, 0, 0, 0.2);
  }
}
.btn2 {
  display: block;
  background-color: #ffc605;
  color: #fff;
  padding: 0.8em;
  text-decoration: none;
  border-radius: 4px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.2);
  transition: 0.3s ease-out;
  position: absolute;
  top: 80vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  width: 100px;
  text-align: center; /*一応BOX内の文字も中央寄せ*/

  &:hover {
    cursor: pointer;
    text-decoration: none;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.12),
      0 3px 20px 0 rgba(0, 0, 0, 0.12), 0 5px 6px -2px rgba(0, 0, 0, 0.2);
  }
}

.me {
  position: absolute;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 500px;
}
</style>
