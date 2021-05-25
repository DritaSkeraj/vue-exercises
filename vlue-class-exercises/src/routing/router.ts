import Router, { NavigationGuardNext, Route } from 'vue-router'
import { isAuthenticated, logout } from '../helpers/fake-auth'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Another from './views/Another.vue'
import NestedParent from './views/NestedParent.vue'
import NestedChild1 from './views/NestedChild1.vue'
import NestedChild2 from './views/NestedChild2.vue'
import NestedGrandchild2 from './views/NestedGrandchild2.vue'
import NestedGrandchild3 from './views/NestedGrandchild3.vue'
import Protected from './views/Protected.vue'
import PartiallyProtected from './views/PartiallyProtected.vue'
import Sub from './views/Sub.vue'
import SubProtected from './views/SubProtected.vue'
import { Position } from 'vue-router/types/router'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    name: 'another',
    path: '/another/:timestamp',
    component: Another
  },
  {
    name: 'parent',
    path: '/nested-parent/:timestamp',
    component: NestedParent,
    children: [
      {
        path: 'nested-child-1', //parent+child
        component: NestedChild1,
        props: (route: Route) => ({
          timestamp: route.params.timestamp
        })
      },
      {
        name: 'child-2',
        path: 'nested-child-2',
        component: NestedChild2,
        children: [
          {
            ///lazy loading
            name: 'grandchild-1',
            path: 'nested-grandchild-1',
            component: () => import('./views/NestedGrandchild1.vue') //imports only when needed
          },
          {
            name: 'grandchild-2',
            path: 'nested-grandchild-2',
            component: NestedGrandchild2
          },
          {
            name: 'grandchild-3',
            path: 'nested-grandchild-3',
            component: NestedGrandchild3
          }
        ]
      }
    ]
  },
  {
    name: 'login',
    path: '/login',
    component: Login
  },
  {
    name: 'logout',
    path: '/logout',
    beforeEnter: (to: Route, from: Route, next: NavigationGuardNext): void => {
      logout()
      next({ path: 'login' })
    }
  },
  {
    name: 'protected',
    path: '/protected',
    component: Protected,
    meta: {
      protected: true
    }
  },
  {
    name: 'partially-protected',
    path: '/partially-protected',
    component: PartiallyProtected,
    children: [
      {
        path: 'sub',
        component: Sub
      },
      {
        path: 'sub-protected',
        component: SubProtected,
        meta: {
          protected: true
        }
      }
    ]
  }
]

export const router = new Router({
  routes,

  /**
   * to enable html5 history mode
   * uncomment the 2 lines below
   */
  // mode: 'history',
  // base: '/code/04-2/',

  linkActiveClass: 'is-parent',
  linkExactActiveClass: 'is-active',

  scrollBehavior(to: Route, from: Route, savedPosition: void | Position) {
    return {
      x: 0,
      y: 0,
      behavior: 'smooth'
    }
  }
})

router.beforeEach((to: Route, from: Route, next: NavigationGuardNext): void => {
  const isPrivate = to.matched.some(record => record.meta.protected)

  if (!isPrivate) {
    next()
    return
  }

  if (isAuthenticated()) {
    next()
    return
  }

  next({
    path: '/login',
    query: { redirect: to.fullPath }
  })
})
