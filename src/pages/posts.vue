<template>
  <Layout>
    <div class="container">
      <h3>Posts</h3>
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
  posts: allPost {
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