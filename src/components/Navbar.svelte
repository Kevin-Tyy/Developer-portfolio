<script lang="ts">
	import { page } from "$app/stores";
	import { beforeUpdate } from "svelte";

	let navObj = [
		{
			title: "Home",
			link: "/",
		},
		{
			title: "Works",
			link: "/works",
		},
		{
			title: "About",
			link: "/about",
		},
		{
			title: "Contact",
			link: "/contact",
		},
	];

	let currentPath = $page.route.id;
	beforeUpdate(() => {
		currentPath = $page.route.id;
	});
</script>

<nav class="flex items-center justify-between py-5 px-10 max-w-[1500px] mx-auto absolute left-0 right-0">
	<img src="/logo.png" alt="logo" class="w-10" />
	<div class="flex justify-between gap-4 mr-10">
		{#each navObj as item}
			<a href={item.link} class="relative p-2">
				<span
					class={`${
						item.link === currentPath ? "text-white after:w-2 after:h-2 after:absolute after:bg-secondary-100 after:rounded-full after:right-1/2 after:bottom-0" : "text-gray-400"
					}  `}
				>
					{item.title}
				</span>
			</a>
		{/each}
	</div>
</nav>
