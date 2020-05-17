<template>
    <g-link :to="post.path" class="flex items-center">
        <div class="post-name text-xl">{{post.title}}</div>
        <div class="post-date text-xs pt-2 flex-grow text-right">{{post.date}}</div>
    </g-link>
</template>

<script>
export default {
    props:['post']
}
</script>