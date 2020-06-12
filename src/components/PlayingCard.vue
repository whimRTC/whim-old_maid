<template>
  <td @click="$emit('click')" @mouseover="$emit('mouseover')">
    <img
      src="@/assets/joker.png"
      v-if="signature === 'joker' && !cover"
      :width="computedWidth"
      :height="computedHeight"
    />
    <vue-playing-card v-else :signature="signature" :cover="cover" />
  </td>
</template>
<script>
const DEFAULT_WIDTH = 200;
const DEFAULT_HEIGHT = 280;

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
    width: {
      default: null,
      type: [Number, String]
    },
    height: {
      default: null,
      type: [Number, String]
    }
  },
  computed: {
    computedWidth() {
      let computedValue = parseInt(this.width, 10);
      if (computedValue === 0 || Number.isNaN(computedValue)) {
        if (this.height !== null) {
          computedValue = this.height * (DEFAULT_WIDTH / DEFAULT_HEIGHT);
        } else {
          computedValue = DEFAULT_WIDTH; // no width or height is specified, use default width
        }
      }
      return String(computedValue);
    },
    computedHeight() {
      let computedValue = parseInt(this.height, 10);
      if (computedValue === 0 || Number.isNaN(computedValue)) {
        if (this.width !== null) {
          computedValue = this.width * (DEFAULT_HEIGHT / DEFAULT_WIDTH);
        } else {
          computedValue = DEFAULT_HEIGHT; // no width or height is specified, use default height
        }
      }

      return String(computedValue);
    }
  }
};
</script>
