<template>
<div class="container mt-10">
    <div class="post_nav flex flex-wrap py-5 border-t border-grey justify-between">
        <h5 class="pb-5 w-full">Recommended Articles</h5>
        <g-link to="/">
            &#8592; Post Title
        </g-link>
        <g-link to="/">
            Post Title &#8594;
        </g-link>
    </div>
</div>  
</template>

<script>
export default {
    props:['post_1','post_2']
}
</script>