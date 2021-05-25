<template>
  <Layout>
    <div class="columns">
      <div class="column is-one-quarter">
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
      <div class="column">
        <router-view></router-view>
      </div>
    </div>
  </Layout>
</template>
