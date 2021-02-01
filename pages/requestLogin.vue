<template>
  <div>
    <h1>Please login to see that page</h1>
  </div>
</template>

<script>
export default {
  methods: {
    setTimer() {
      window.setTimeout(
        window.location.replace("http://dev.alexanderchow.com:3000"),
        3000
      );
    }
  },
  mounted() {
    console.log(this.$auth.loggedIn);
    this.setTimer();
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
  position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
}
</style>
