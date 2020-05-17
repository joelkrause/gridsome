export default [
  {
    path: "/posts/:slug/",
    component: () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/joelkrause/Documents/GitHub/gridsome/src/templates/Post.vue")
  },
  {
    path: "/posts/",
    component: () => import(/* webpackChunkName: "page--src--pages--posts-vue" */ "/Users/joelkrause/Documents/GitHub/gridsome/src/pages/posts.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/joelkrause/Documents/GitHub/gridsome/node_modules/gridsome/app/pages/404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/joelkrause/Documents/GitHub/gridsome/src/pages/Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/joelkrause/Documents/GitHub/gridsome/node_modules/gridsome/app/pages/404.vue")
  }
]

