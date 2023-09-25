<script lang="ts">
	const utilObj = [
		{
			title: "Instagram",
			icon: "/labels/icons8-instagram.svg",
		},
		{
			title: "Twitter",
			icon: "/labels/icons8-twitter.svg",
		},
		{
			title: "Dribbble",
			icon: "/labels/icons8-dribbble.svg",
		},
		{
			title: "Github",
			icon: "/labels/icons8-github.svg",
		},
		{
			title: "Facebook",
			icon: "/labels/icons8-facebook.svg",
		},
		{
			title: "LinkedIn",
			icon: "/labels/icons8-linkedin.svg",
		},
	];
</script>

<nav
	class="p-1.5 fixed top-1/3 flex h-fit items-center bg-primary-dark-300/10 backdrop-blur-lg ring-1 ring-primary-dark-300 ml-1 rounded-2xl"
>
	<ul class="flex flex-col w-fit gap-2">
		{#each utilObj as item}
			<div
				title={item.title}
				class="group hover:bg-primary-dark-300/30 backdrop-blur-3xl p-3 rounded-xl cursor-pointer transition"
			>
				<img src={item.icon} alt="Icon" width="25px" />
			</div>
		{/each}
	</ul>
</nav>
