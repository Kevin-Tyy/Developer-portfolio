<script lang="ts">
	import Icon from "./Icon.svelte";

	export let item : any
</script>


<div class="flex gap-4 items-start mb-2 h-auto">
	<div class="flex flex-col h-full flex-grow flex-shrink items-center justify-start gap-2 mt-1.5">
		<div class={`w-2.5 h-2.5 rounded-full self-start ${item.index === 0 ? 'bg-secondary-100' : 'bg-primary-dark-300 '}`} />
		<div class="w-[2px] min-h-[150px] 2xl:min-h-[120px] bg-primary-dark-300" />
	</div>
	<div class="mb-10">
		<h1 class={`font-semibold ${item.index === 0 && 'text-secondary-100'}`}>{item.title}</h1>
		<div>
			<h2 class="text-blue-600 text-sm">{item.time}</h2>
			<div class="flex items-center">
				<Icon
					classAttr="text-gray-500 w-3 h-3"
					svgData="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
				/>
				<p class="text-[13px] text-gray-500">
					{item.location}
				</p>
			</div>
			<p class="text-sm leading-relaxed text-gray-300">
				{item.description}
			</p>
		</div>
	</div>
</div>
