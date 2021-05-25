<template>
  <section class="content">
    <h2>🔒 Protected page</h2>
    <p>
      You can only see this page if you're logged in.
      <br />
      <router-link to="/logout">Logout</router-link>
      <!-- similar to this.$router.push('/logout') remembers history-->
      <!-- <router-link :to='{path:'/test'}' replace> -->
      <!-- 
                <router-link target="_blank" :to="{ name: 'product-detail', params: { id: product._id } }">//its an achor
                <el-button>{{ $t('general.detail') }}</el-button>
              </router-link>


              {
      path: '/products/:id',
      name: 'product-detail',
      meta: requiresAuthMeta,
      component: () => import(/* webpackChunkName: "product-detail" */ '@/modules/product/views/ProductDetail.vue')
    }

    <router-link target="_blank" :to="'/products/' + product.id">
                <el-button>{{ $t('general.detail') }}</el-button>
              </router-link>
             -->
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
  </section>
</template>
