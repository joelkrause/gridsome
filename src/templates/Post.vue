<template>
  <Layout>
    <div class="post_hero bg-subtle py-20 mb-10">
      <div class="container">
        <p>{{$page.post.date}}</p>
        <h1>{{ $page.post.title }}</h1>
        <p>{{ $page.post.description }}</p>
      </div>
    </div>
    <div class="container">
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