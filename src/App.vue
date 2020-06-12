<template>
  <div id="app">
    <Main class="main" />
  </div>
</template>
<script>
export default {
  name: "App",
  components: {
    Main: () => import("@/components/main/Index"),
  },
  // settings for debug
  // mounted() {
  //   let recaptchaScript = document.createElement("script");
  //   recaptchaScript.setAttribute("src", "http://localhost:8098");
  //   document.head.appendChild(recaptchaScript);
  // },
  computed: {
    users() {
      return this.$whim.users;
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  z-index: 1;
}
</style>
