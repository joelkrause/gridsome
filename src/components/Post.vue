<template>
    <g-link :to="post.path">
        {{post.title}}
        {{post.date}}
    </g-link>
</template>

<script>
export default {
    props:['post']
}
</script>