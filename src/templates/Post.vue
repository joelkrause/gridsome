<template>
  <Layout>
    <main class="container-wide py-16 grid grid-cols-12">
      <aside class="col-span-3">
        <div class="sticky top-header post_meta pt-10 flex flex-wrap text-sm text-grey font-accent">
            <div class="w-full text-white">Published</div>
            <div class="w-full">{{$page.post.date}}</div>
            <div class="w-full text-white pt-4">Read Time</div>
            <div class="w-full">{{$page.post.timeToRead}} minute read</div>
            <div class="w-full text-white pt-4">Tags</div>
            <div class="tag capitalize" v-for="(value,index) in $page.post.tags" :key="index">{{value}}<span class="px-2" v-if="index != $page.post.tags.length - 1">&bull;</span></div>
        </div>
      </aside>
      <section class="col-span-9">
          <h1>{{ $page.post.title }}</h1>
          <div class="post__content" v-html="$page.post.content" />
          <PostNav />
      </section>
    </main>
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
    timeToRead
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