<template>
    <g-link :to="post.path" class="flex items-center py-6 transition ease-in duration-100 border-b border-grey">
        <div class="post-name">{{post.title}}</div>
        <div class="post-date text-xs flex-grow text-right font-accent">{{post.date}}</div>
    </g-link>
</template>

<script>
export default {
    props:['post']
}
</script>