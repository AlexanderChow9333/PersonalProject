/* eslint-disable prettier/prettier */
<template>
  <div>
    <b-row class="mb-1">
      <b-col>
        <b>{{ username }}</b>
      </b-col>
      <b-col class="text-right">
        <em>{{ create_date }}</em>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        {{ comment }}
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      required: true
    },
    create_date: {
      type: String,
      required: true
    },
    comment: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
