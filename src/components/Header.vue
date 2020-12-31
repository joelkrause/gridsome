<template>
    <header class="sticky w-full top-0 p-4 xl:p-16 bg-dark">
        <div class="grid grid-cols-12 gap-5">
            <g-link to="/" class="col-span-6 text-left font-bold">
                Joel Krause
            </g-link>
            <nav class="col-span-6 flex flex-row items-center justify-end">
                <g-link to="/" class="text-primary hover:text-accent transition-all ease-in-out duration-150 pr-5">Home</g-link>
                <g-link to="/posts/" class="text-primary hover:text-accent transition-all ease-in-out duration-150 pr-5">Posts</g-link>
            </nav>
        </div>
    </header>
</template>

<script>
import Logo from './Logo'
export default {
	components:{
		Logo
	}
}
</script>