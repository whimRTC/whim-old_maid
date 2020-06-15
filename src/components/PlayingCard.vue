<template>
  <div @click="$emit('click')" @mouseover="$emit('mouseover')">
    <img
      src="@/assets/joker.svg"
      v-if="signature === 'joker' && !cover"
      :width="width"
      :height="height"
    />
    <vue-playing-card
      v-else
      :signature="signature"
      :cover="cover"
      :width="width"
      :height="height"
    />
  </div>
</template>
<script>
const DEFAULT_WIDTH = 100;
const DEFAULT_HEIGHT = 140;

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
    return {
      width: window.innerWidth / 4,
      height: (window.innerWidth / 4) * (DEFAULT_HEIGHT / DEFAULT_WIDTH)
    };
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.width = window.innerWidth / 4;
      this.height = (window.innerWidth / 4) * (DEFAULT_HEIGHT / DEFAULT_WIDTH);
    });
  }
};
</script>
