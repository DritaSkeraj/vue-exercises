<template>
  <Layout>
    <div class="jumbotron">
      <h1>Routing examples</h1>
    </div>
    <div class="columns container">
      <div class="column column1">
        <aside class="menu">
          <p class="menu-label">
            Basics
          </p>
          <ul class="menu-list">
            <li>
              <router-link to="/">
                Home page
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'another', params: { timestamp: Date.now() } }">
                Another page
              </router-link>
            </li>
          </ul>
          <p class="menu-label">
            Nested routes
          </p>
          <ul class="menu-list">
            <li>
              <router-link :to="{ name: 'parent', params: { timestamp: Date.now() } }">
                Parent only
                <small><em>(Fade)</em></small>
              </router-link>
            </li>
            <li>
              <router-link :to="`/nested-parent/${Date.now()}/nested-child-1`">
                Child 1
                <small><em>(Fade, Props)</em></small>
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'child-2', params: { timestamp: Date.now() } }">
                Child 2
                <small><em>(Fade)</em></small>
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'grandchild-1', params: { timestamp: Date.now() } }">
                Grandchild 1
                <small><em>(Lazy, Scroll)</em></small>
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'grandchild-2', params: { timestamp: Date.now() } }">
                Grandchild 2
                <small><em>(Scroll)</em></small>
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'grandchild-3', params: { timestamp: Date.now() } }">
                Grandchild 3
              </router-link>
            </li>
          </ul>
          <p class="menu-label">
            Navigation guards
          </p>
          <ul class="menu-list">
            <li>
              <router-link to="/protected">
                Protected page
              </router-link>
            </li>
            <li>
              <router-link to="/partially-protected/sub">
                Nested open page
              </router-link>
            </li>
            <li>
              <router-link to="/partially-protected/sub-protected">
                Nested protected page
              </router-link>
            </li>
          </ul>
        </aside>
      </div>
      <div class="column column2">
        <router-view></router-view>
      </div>
    </div>
  </Layout>
</template>
<style>
body {
  background: rgb(243, 253, 255);
  background: radial-gradient(circle, rgba(243, 253, 255, 1) 0%, rgba(237, 240, 240, 1) 100%);
}
.columns {
  display: flex;
  flex-direction: row;
}
.column1 {
  width: 30vw;
}
.column2 {
  min-width: 40vw;
  margin-left: 4vw !important;
}
.jumbotron {
  height: 45vh;
  background: rgb(1, 103, 117);
  background: linear-gradient(90deg, rgba(1, 103, 117, 1) 0%, rgba(0, 226, 216, 1) 100%);
  color: white;
  text-align: center;
}
</style>
