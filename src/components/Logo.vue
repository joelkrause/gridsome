<template>
	<div class="logo text-right font-bold">
        <img src="/memoji-normal.png" class="inline-block w-16" data-not-lazy v-if="time >= 7 && time <= 19"/>
        <img src="/memoji-night.png" class="inline-block w-16" data-not-lazy v-else/>
    </div>
</template>

<script>
export default {
    computed:{
        time(){
            return new Date().getHours();
        }
    }
}
</script>