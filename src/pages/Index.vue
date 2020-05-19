<template>
  <Layout>
    <div class="hero home_hero py-20 mb-10">
      <div class="container grid grid-cols-12 gap-5">
        <div class="col-span-4">
          <g-image src="/joel.png"/>
        </div>
        <div class="col-span-7 col-start-6 flex items-center">
          <div class="content">
            <p>Hey, I'm Joel 👋</p>
            <p>I'm a web developer at Raak Creative where I build lightning ⚡️ fast headless websites with vue.js</p>
            <p>I write about building the modern web on the JAMstack.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <h3>Latest Posts</h3>
      <Post v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" />
    </div>
  </Layout>
</template>

<script>
import Post from '~/components/Post.vue';
export default {
  components:{
    Post
  }
}
</script>

<page-query>
query {
  posts: allPost(perPage:6) {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        timeToRead
        description
        path
      }
    }
  }
}