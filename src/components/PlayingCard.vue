<template>
  <div
    @click="$emit('click')"
    @mouseover="$emit('mouseover')"
    @mouseleave="$emit('mouseleave')"
  >
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
    }
    // width: {
    //   default: null,
    //   type: [Number, String]
    // },
    // height: {
    //   default: null,
    //   type: [Number, String]
    // }
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
</style>
