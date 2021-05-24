<template>
  <div class="app-container">
    <div class="title">
      <h1>Execise3:</h1>
      <h6>api call with vuex state</h6>
      <p>🚀🚀🚀to the moooooon🚀🚀🚀</p>
    </div>
    <div v-if="this.$store.state.loading">
      <p class="loading">loadinggg...</p>
    </div>
    <div>
      <div :key="index" v-for="(comment, index) in this.$store.state.comments">
        <Comment :comment="comment" />
      </div>
    </div>
    <div v-if="this.$store.state.error">
      <p class="error">Error while fetching data</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop, Emit, Watch } from 'vue-property-decorator'
import { CommentInterface, ErrorInterface } from './CommentInterface'
import Comment from './Comment.vue'

@Component({
  components: {
    Comment
  }
})
export default class App extends Vue {
  async created() {
    await this.$store.dispatch('loadComments')
  }
}
</script>
<style scoped>
.title {
  text-align: center;
  color: black;
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
  color: blue !important;
  width: 80%;
  margin: 0 auto;
  padding: 0.5em;
  border: 1px solid blue;
  border-radius: 4px;
  background-color: rgb(207, 207, 250);
}
</style>
