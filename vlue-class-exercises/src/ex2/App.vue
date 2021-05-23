<template>
  <div class="app-container">
    <div class="col1">
      <h1>Execise2:</h1>
      <p>🚀🚀🚀there we goo🚀🚀🚀</p>
    </div>
    <div>
      <div :key="index" v-for="(comment, index) in comments">
        <div v-if="!getLoading">
          <p>Loading...</p>
        </div>
        <Comment :comment="comment" v-if="getLoading" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop, Emit, Watch } from 'vue-property-decorator'
import axios from 'axios'
import { CommentInterface, ErrorInterface } from './CommentInterface'
import Comment from './Comment.vue'

@Component({
  components: {
    Comment
  }
})
export default class App extends Vue {
  @Prop({}) comments?: any
  @Prop({}) loading = true
  @Prop({}) data: CommentInterface = {
    avatar: 'string',
    name: 'string',
    username: 'string',
    message: 'stringstringstringstringstringstringstring'
  }

  mounted() {
    axios
      .post(
        'https://cors-anywhere-ds.herokuapp.com/https://vue-class.ilmente.com/.netlify/functions/comments',
        this.data,
        {
          headers: { 'Access-Control-Allow-Origin': '*' }
        }
      )
      .then(res => {
        this.comments = res.data.comments
      })
      .then(r => (this.loading = false))
  }
  getLoading() {
    return this.loading
  }
}
</script>
<style scoped>
.col1 {
  text-align: center;
}
</style>
