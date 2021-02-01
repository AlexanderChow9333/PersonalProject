<template>
  <div class="container my-4">
    <div class="row mb-4">
      <b-col>
        <b-card-group deck>
          <b-card header-tag="header" footer-tag="footer">
            <template #header>
              <h1>
                {{ post.title }}
              </h1>
            </template>
            <center>
              <b-img :src="post.image" style="height: 500px"></b-img>
            </center>
            <template #footer>
              <b-row>
                <b-col cols="10">
                  <fa
                    :icon="['far', 'heart']"
                    @click="like(post)"
                    v-if="liked == false"
                  />
                  <fa :icon="['fas', 'heart']" @click="like(post)" v-else />
                  <h6 class="mb-0">{{ post.likes }}</h6>
                </b-col>
                <b-col cols="2">
                  <em>Posted by {{ post.username }}</em>
                </b-col>
              </b-row>
            </template>
          </b-card>
        </b-card-group>
      </b-col>
    </div>
    <hr />
    <b-form>
      <b-form-group
        id="input-group-1"
        label="Leave a comment:"
        label-for="input-1"
      >
        <b-form-textarea
          id="input-1"
          type="text"
          v-model="newComment"
          required
          placeholder="Enter comment"
        ></b-form-textarea>
      </b-form-group>
      <b-button @click="submitComment()" variant="danger">Submit</b-button>
    </b-form>
    <hr />
    <div v-for="comment in comments" :key="comment.id" class="mt-4 comment">
      <comment
        :username="comment.username"
        :create_date="comment.create_date"
        :comment="comment.comment"
      ></comment>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        id: 0,
        title: "",
        likes: 0,
        username: "",
        image: ""
      },
      userData: {
        likedPosts: []
      },
      newComment: "",
      comments: [],
      liked: false
    };
  },
  methods: {
    like() {
      if (this.userData.likedPosts.includes(this.post.id)) {
        var index = this.userData.likedPosts.indexOf(this.post.id);
        this.userData.likedPosts.splice(index, 1);
        this.post.likes -= 1;
        this.liked = false;
        return false;
      } else {
        this.userData.likedPosts.push(this.post.id);
        this.post.likes += 1;
        this.liked = true;
        return true;
      }
    },
    submitComment() {
      //add new comment
      fetch("http://localhost:8080/api/comments", {
        method: "POST",
        body: JSON.stringify({
          username: "Alexander Chow",
          comment: this.newComment,
          postID: this.post.id
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(response => response.json())
        .then(data => this.comments.push(data.data));

      //empty input
      this.newComment = "";

      //re-render all comments
      // fetch("http://localhost:8080/api/posts")
      //   .then(response => response.json())
      //   .then(data => (this.comments = data.data));
    }
  },
  middleware: "auth",
  mounted: function() {
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    const postID = urlParams.get("postID");
    this.post.id = postID;
    const title = urlParams.get("title");
    this.post.title = title;
    const likes = urlParams.get("likes");
    this.post.likes = parseInt(likes);
    const username = urlParams.get("username");
    this.post.username = username;
    const image = urlParams.get("image");
    this.post.image = image;
    fetch("http://localhost:8080/api/comments/" + this.post.id)
      .then(response => response.json())
      .then(data => (this.comments = data.data));
  }
};
// https://www.sitepoint.com/get-url-parameters-with-javascript/
</script>

<style scoped>
.comment {
  background-color: white;
  padding: 10px;
}
</style>
