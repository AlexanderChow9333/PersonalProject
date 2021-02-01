<template>
  <div class="">
    <b-container>
      <b-row>
        <b-col sm="6" offset="3">
          <div class="centered">
            <h1>DAILY CHALLENGE:</h1>
            <br />
            <h1>Knitting</h1>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$auth.loggedIn);
    console.log(this.$auth.user);
  }
};
</script>

<style scoped>
.centered {
  text-align: center;
  position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
}
</style>
