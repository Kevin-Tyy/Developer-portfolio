<script lang="ts">
	let boxContent = [
		{
			backdropImage: "/19631ca3efe9444cb0d08c8fdbdaa48a.jpeg",
			content: "UI/UX Deigner",
			description: "27 Projects completed",
		},

		{
			backdropImage: "/19631ca3efe9444cb0d08c8fdbdaa48a.jpeg",
			content: "Web App Developer",
			description: "Full stack - 34 projects completed",
		},

		{
			backdropImage: "/19631ca3efe9444cb0d08c8fdbdaa48a.jpeg",
			content: "Mobile App Development",
			description: "22 Projects completed",
		},

		{
			backdropImage: "/19631ca3efe9444cb0d08c8fdbdaa48a.jpeg",
			content: "Desktop App Development",
			description: "12 Projects completed",
		},
	];
</script>

<section class="h-full w-full text-white">
	<div class="bg-primary-dark-200 w-full flex justify-center py-10">
		<div class="flex mt-10 max-w-fit">
			<div class="w-full relative">
				<div class="flex absolute z-10">
					<div class="relative max-w-xs flex flex-wrap items-start gap-2">
						<h1 class="text-6xl font-black font-sans">Kevin</h1>
						<h1
							class="text-7xl font-black font-sans after:h-2.5 after:absolute after:w-16 after:bg-secondary-100 after:rounded-full after:bottom-0 after:left-2 pb-8"
						>
							Tuyizere.
						</h1>
					</div>
				</div>
				<img
					src="/19631ca3efe9444cb0d08c8fdbdaa48a.jpeg"
					alt="myImage"
					class="absolute top-11 right-28 max-w-[450px] rounded-full shadow-2xl"
				/>
			</div>
			<div class="text-left flex flex-col gap-6 w-full mt-28">
				<h2 class="font-mono text-gray-500 font-bold">--Introduction</h2>
				<h1 class="text-3xl leading-relaxed">
					Product designer and developer, based in Rwanda.
				</h1>
				<p class="text-xs text-gray-500 leading-8 font-semibold">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
					facere placeat nobis nemo voluptas. Beatae architecto in aspernatur
					fugit quisquam, repellat, minima qui ipsum commodi atque eos,
					laboriosam maiores voluptas?
				</p>
				<div class="relative w-fit">
					<button
						class="flex cursor-pointer items-center gap-2 after:h-1 after:bg-secondary-100 after:w-14 hover:after:w-full after:transition-all after:duration-400 after:absolute after:bottom-0 pb-2 after:rounded-full after:left-0"
					>
						<span class="text-secondary-100"> My story </span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-4 h-4 text-secondary-100"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	</div>
	<div class="flex justify-center">
		<div class="grid grid-cols-4 gap-4 mt-36 w-full max-w-[1200px]">
			{#each boxContent as item}
				<div
					class="group relative bg-primary-dark-200 hover:bg-secondary-100/40 transition cursor-pointer w-full rounded-md h-72 flex flex-col justify-end items-start"
				>
					<div class="pb-7 pl-4">
						<h1 class="text-lg">{item.content}</h1>
						<p class="text-xs text-gray-400">{item.description}</p>
					</div>
					<img
						src={item.backdropImage}
						alt="backdrop_image"
						class="absolute w-full h-full opacity-0 group-hover:opacity-20 transition"
					/>
				</div>
			{/each}
		</div>
	</div>
</section>
