<template>
  <div class="app-container">
    <div class="col1">
      <h1>Execise2:</h1>
      <p>🚀🚀🚀there we gooo🚀🚀🚀</p>
    </div>
    <div v-if="loading">
      <p>loading...</p>
    </div>
    <div>
      <div :key="index" v-for="(comment, index) in comments">
        <p class="loading" v-if="loading">loading...</p>
        <Comment :comment="comment" />
      </div>
    </div>
    <div v-if="error">
      {{ log(comments) }}
      <p class="error">Error while fetching data</p>
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
  comments: any = [] ///!?mostly for props
  loading = true
  error?: boolean = false
  data: CommentInterface = {
    avatar: 'string',
    name: 'string',
    username: 'string',
    message: 'string'
  }

  async created() {
    ////maybe mounted()
    try {
      await axios
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
    } catch (err) {
      console.log('Error while fetching data')
      this.error = true
    } finally {
      this.loading = false
    }
  }
  getLoading() {
    return this.loading
  }
  log(msg: string): void {
    console.log('🟢', msg)
  }
}
</script>
<style scoped>
.col1 {
  text-align: center;
}
.error {
  width: 80%;
  margin: 0 auto;
  padding: 0.5em;
  border: 1px solid red;
  border-radius: 4px;
  background-color: rgb(248, 228, 226);
  color: red;
}
.loading {
  color: blue;
  width: 80%;
  margin: 0 auto;
}
</style>
