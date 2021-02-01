<template>
  <b-navbar toggleable="lg" type="dark" variant="danger">
    <b-navbar-brand href="/">SilverConnect</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="add_post">Upload</b-nav-item>
        <b-nav-item href="posts">Posts</b-nav-item>
        <b-nav-item href="ranking">Ranking</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item @click="logout" v-if="$auth.loggedIn">Logout</b-nav-item>
        <b-nav-item @click="login" v-else>
          Signup/Login
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  methods: {
    login() {
      this.$auth.loginWith("google");
    },
    logout() {
      this.$auth.logout();
      location.reload();
    }
  }
};
</script>

<style scoped>
b-navbar {
  background-color: red;
}
</style>
