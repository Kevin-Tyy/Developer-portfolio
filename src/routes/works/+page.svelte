<script lang="ts">
	import Icon from "../../components/Icon.svelte";
	import { projects } from "../../utils/objects";
</script>

<svelte:head>
	<title>Kevin † Portfolio</title>
</svelte:head>
<section>
	<div class="max-w-[1300px] mx-auto pt-32">
		<div
			class="ring-1 ring-gray-300 w-fit text-xs text-gray-300 flex items-center gap-2 p-2 rounded-full px-3 py-2 uppercase"
		>
			<Icon
				classAttr="text-white w-4r h-4"
				svgData="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
			/>
			Portfolio
		</div>
		<div class="grid gap-4 grid-cols-4 mt-10">
			{#each projects as item}
				<div class="relative  w-full group rounded-2xl overflow-hidden hover:cursor-pointer">
					<div>
						<img
							src={item.image}
							alt="Project Preview"
							class="w-full h-72 object-cover  group-hover:scale-110 transition duration-200 rounded-2xl"
						/>
					</div>
					<div class="flex gap-2 absolute bottom-0 right-0 mb-4 ml-2 z-[2] left-2">
						{#each item.tags as tag}
							<div class="bg-primary-dark-300 rounded-md p-2 cursor-pointer border-1 border-gray-200 text-xs text-white">
								{tag}
							</div>
						{/each}
					</div>
					<div
						class="absolute top-0 right-0 left-0 bottom-0 z-[1] bg-gradient-to-b from-black/30 to-black"
					/>
				</div>
			{/each}
		</div>
	</div>
</section>
