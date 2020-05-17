<template>
  <Layout>
    <div class="container">
    <h1>{{ $page.post.title }}</h1>
    <p>{{$page.post.date}}</p>
    <p>{{ $page.post.description }}</p>
    <div class="post__content" v-html="$page.post.content" />
    </div>
  </Layout>
</template>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    description
    content
    date (format: "DD MMMM YYYY")
  }
}
</page-query>