<template>
    <header class="sticky w-full top-0 p-5 xl:p-10 grid grid-cols-12 gap-5">
        <nav class="col-span-6">
            <ul class="flex flex-row justify-start content-center items-center text-xl">
                <li class="pr-20">
                    <g-link to="/">
                        <Logo />
                    </g-link>
                </li>
                <li class="pr-5">
                    <g-link to="/" class="text-primary hover:text-accent transition-all ease-in-out duration-150">Home</g-link>
                </li>
                <li class="pr-5">
                    <g-link to="/posts/" class="text-primary hover:text-accent transition-all ease-in-out duration-150">Posts</g-link>
                </li>
            </ul>
        </nav>
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