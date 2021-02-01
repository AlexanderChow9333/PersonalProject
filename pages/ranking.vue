<template>
  <b-container class="my-4">
    <h1 class="mx-auto my-4">Rankings</h1>
    <b-table striped :items="posts" :fields="fields"></b-table>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "cute cat",
          image: "image example",
          likes: 15,
          author: "billy"
        },
        {
          id: 2,
          title: "cool cow",
          image: "image example 2",
          likes: 30,
          author: "joe"
        }
      ],
      userData: {
        likedPosts: []
      },
      fields: [
        { key: "title", sortable: true },
        { key: "username", sortable: true },
        { key: "likes", sortable: true }
      ],
      liked: false
    };
  },
  middleware: "auth",
  async fetch() {
    await fetch("http://localhost:8080/api/posts/")
      .then(response => response.json())
      .then(data => (this.posts = data.data));
  }
};
</script>

<style scoped></style>
