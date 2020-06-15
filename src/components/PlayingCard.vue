<template>
  <div
    @click="$emit('click')"
    @mouseover="$emit('mouseover')"
    @mouseleave="$emit('mouseleave')"
  >
    <div :class="{ border: seeing }">
      <img
        src="@/assets/joker.svg"
        v-if="signature === 'joker' && !cover"
        :width="width"
        :height="height"
        class="card"
      />
      <vue-playing-card
        v-else
        :signature="signature"
        :cover="cover"
        :width="width"
        :height="height"
        class="card"
      />
    </div>
    <img src="@/assets/hand.svg" class="hand" :class="{ invisible: !seeing }" />
  </div>
</template>
<script>
const DEFAULT_WIDTH = 180;
const DEFAULT_HEIGHT = DEFAULT_WIDTH * 1.4;

export default {
  name: "PlayingCard",
  props: {
    signature: {
      default: null,
      type: String
    },
    cover: {
      default: false,
      type: Boolean
    },
    seeing: {
      default: false,
      type: Boolean
    }
  },
  data() {
    const width = Math.min(window.innerWidth / 4, DEFAULT_WIDTH);
    return {
      width: width,
      height: width * (DEFAULT_HEIGHT / DEFAULT_WIDTH)
    };
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.width = Math.min(window.innerWidth / 4, DEFAULT_WIDTH);
      this.height = this.width * (DEFAULT_HEIGHT / DEFAULT_WIDTH);
    });
  }
};
</script>
<style lang="scss" scoped>
.card {
  opacity: 0.8;
}
.hand {
  width: 20vw;
  max-width: 100px;
  transform: rotate(90deg);
}
.invisible {
  opacity: 0;
}
.border {
  position: relative;
  &::after {
    content: "";
    position: absolute;
    box-sizing: border-box;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    border: solid;
    border-radius: 7px;
    border-width: 10px;
    border-color: #ffff00e0;
  }
}
</style>
