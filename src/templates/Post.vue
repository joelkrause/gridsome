<template>
  <Layout>
    <div class="post_hero py-20 mb-10">
      <div class="container">
        <div class="post_meta pb-10 flex flex-wrap items-center">
            <div class="tag capitalize" v-for="(value,index) in $page.post.tags" :key="index">{{value}}<span class="px-2">&bull;</span></div>
            <div>Publised on {{$page.post.date}}</div>
        </div>
        <h1>{{ $page.post.title }}</h1>
        <div class="excerpt pt-10 pb-5 max-w-xl text-grey" v-html="$page.post.description"></div>
      </div>
    </div>
    <div class="container">
      <div class="post__content" v-html="$page.post.content" />
    </div>
    <PostNav />
  </Layout>
</template>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    description
    content
    date (format: "DD MMMM YYYY")
    tags
  }
}
</page-query>

<script>
import PostNav from '~/components/PostNav.vue'
export default {
  components:{
    PostNav
  }
}
</script>