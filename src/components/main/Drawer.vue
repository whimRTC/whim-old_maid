<template>
  <div>
    <h2 class="subtitle">
      ジョーカーを選ぶな！
    </h2>
    <div>
      <img src="@/assets/card.png" class="img" @click="select('left')" />
      <img
        src="@/assets/card.png"
        class="img"
        @click="select('right')"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "Drawer",
  methods: {
    select(show) {
      this.$whim.assignState({
        [this.$whim.accessUser.id]: show
      });
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
