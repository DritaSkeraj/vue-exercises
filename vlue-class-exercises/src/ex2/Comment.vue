<template>
  <div>
    <div class="comment-container" v-if="comment.avatar">
      <div class="col1">
        <img :src="comment.avatar" />
        <h6>{{ comment.username }}</h6>
      </div>
      <div class="col2">
        <p>{{ comment.message }}</p>
      </div>
    </div>
    <div class="comment-container" v-if="comment.errorMessage">
      <p>Whoops. Something went wrong :/</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop, Emit, Watch } from 'vue-property-decorator'
import { CommentInterface } from './CommentInterface'

@Component
export default class Comment extends Vue {
  @Prop({ type: Object, required: true }) comment!: CommentInterface | any
}
</script>

<style>
.comment-container {
  margin: 1em 4em;
  padding: 0.5em;
  border: 1px solid salmon;
  display: flex;
  flex-direction: row;
}
/* div.col1 */
.comment-container :first-child {
  margin: 0.1em;
}
.comment-container :last-child {
  margin: 0.1em;
}
img {
  width: 120px;
  height: 120px;
}
</style>
