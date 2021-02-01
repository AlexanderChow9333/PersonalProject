<template>
  <div class="container mt-4">
    <div class="row mb-4" v-for="post in posts" :key="post.id">
      <b-col>
        <b-card-group deck>
          <b-card header-tag="header" footer-tag="footer">
            <template #header style="background-color:white;">
              <nuxt-link
                :to="{
                  name: 'view_post',
                  query: {
                    postID: post._id,
                    title: post.title,
                    likes: post.likes,
                    username: post.username,
                    image: post.image
                  }
                }"
              >
                <h1>{{ post.title }}</h1>
              </nuxt-link>
            </template>
            <center>
              <b-img :src="post.image" style="height: 500px"></b-img>
            </center>
            <template #footer class="footer">
              <b-row>
                <b-col cols="10">
                  <fa
                    :icon="['far', 'heart']"
                    @click="like(post)"
                    v-if="likeStatus(post.id)"
                  />
                  <fa :icon="['fas', 'heart']" @click="like(post)" v-else />
                  <h6 class="mb-0">{{ post.likes }}</h6>
                </b-col>
                <b-col cols="2">
                  <em>
                    Posted by <br />
                    {{ post.username }}
                  </em>
                </b-col>
              </b-row>
            </template>
          </b-card>
        </b-card-group>
      </b-col>
    </div>
  </div>
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
      liked: false
    };
  },
  middleware: "auth",
  methods: {
    like(post) {
      if (this.userData.likedPosts.includes(post.id)) {
        var index = this.userData.likedPosts.indexOf(post.id);
        this.userData.likedPosts.splice(index, 1);
        post.likes -= 1;
        this.liked = false;
        return false;
      } else {
        this.userData.likedPosts.push(post.id);
        post.likes += 1;
        this.liked = true;
        return true;
      }
    },
    likeStatus(postID) {
      if (this.userData.likedPosts.includes(postID)) {
        return false;
      } else {
        return true;
      }
    }
  },
  async fetch() {
    await fetch("http://localhost:8080/api/posts/")
      .then(response => response.json())
      .then(data => (this.posts = data.data));
  }
};
</script>

<style>
.header {
  background-color: white !important;
}
.footer {
  background-color: white !important;
}
</style>
