<template>
  <b-container class="mt-3">
    <b-form @submit.stop.prevent="onSubmit">
      <b-form-group id="title" label="Title:">
        <b-form-input
          id="title"
          v-model="title"
          type="text"
          required
          placeholder="Enter Title"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="name" label="Name:">
        <b-form-input
          id="name"
          v-model="name"
          type="text"
          required
          placeholder="Enter Name"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Image:">
        <b-form-file
          id="image"
          v-model="image"
          placeholder="Choose an image"
          style="vertical-align: middle; width: 87.8%"
        ></b-form-file>
        <b-button
          v-if="hasImage"
          variant="danger"
          class="ml-3"
          style="vertical-align: middle"
          @click="clearImage"
          >Clear image</b-button
        >
      </b-form-group>
      <b-img
        v-if="hasImage"
        :src="imageSrc"
        class="mb-3"
        style="height: 200px"
        fluid
        block
        rounded
      ></b-img>
      <!-- <p>{{ imageSrc }}</p> -->
      <b-button
        :disabled="!hasImage || !name || !title"
        variant="danger"
        type="submit"
        >Upload image</b-button
      >
    </b-form>
  </b-container>
</template>

<script>
const base64Encode = data =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(data);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

export default {
  data() {
    return {
      name: null,
      title: null,
      image: null,
      imageSrc: null
    };
  },
  computed: {
    hasImage() {
      return !!this.image;
    }
  },
  watch: {
    image(newValue, oldValue) {
      if (newValue !== oldValue) {
        if (newValue) {
          base64Encode(newValue)
            .then(value => {
              this.imageSrc = value;
              console.log("value: " + value);
            })
            .catch(() => {
              this.imageSrc = null;
            });
        } else {
          this.imageSrc = null;
        }
      }
    }
  },
  middleware: "auth",
  methods: {
    clearImage() {
      this.image = null;
    },

    onSubmit() {
      fetch("http://localhost:8080/api/posts", {
        method: "POST",
        body: JSON.stringify({
          username: this.name,
          image: this.imageSrc,
          title: this.title
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(response => response.json())
        .then(data => console.log(data));
      // alert("Form submitted!");
      // window.location.href = "/posts";
    }
  }
};
</script>