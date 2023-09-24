<script lang="ts">
	import { boxContent } from "../utils/objects";
	import Icon from "../components/Icon.svelte";
</script>

<svelte:head>
	<title>Kevin † Home</title>
</svelte:head>

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
				<h2 class="font-mono text-gray-500 font-bold">—Introduction</h2>
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
						<Icon
							svgData="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
							classAttr="w-4 h-4 text-secondary-100"
						/>
					</button>
				</div>
			</div>
		</div>
	</div>
	<div class="flex justify-center mt-28">
		<div class=" max-w-[1400px]">
			<div class="flex gap-20">
				<div class="w-full">
					<h2 class="font-mono text-gray-500 font-bold">—Contact</h2>
					<h1 class="text-3xl leading-relaxed">
						Any type of query or discussion.
					</h1>
					<p
						class="text-xs text-gray-500 leading-8 font-semibold mt-5 max-w-lg"
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio rem
						mollitia quisquam at illum, corrupti expedita.
					</p>
				</div>
				<div class="w-full max-w-2xl">
					<h1 class="text-3xl leading-relaxed">
						You can't use up creativity, <br />the more you use, the more you
						have in your signifant mind.
					</h1>
					<p
						class="text-xs text-gray-500 leading-8 font-semibold mt-5 max-w-lg"
					>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ex
						vitae repellat architecto deleniti, voluptates impedit quo soluta ut
						sed sapiente magni, consequatur dignissimos exercitationem amet
						quaerat non animi tenetur.
					</p>
				</div>
			</div>
			<div class="flex gap-20 mt-10">
				<div class="w-full">
					<div class="relative w-fit">
						<button
							class="flex cursor-pointer items-center gap-2 after:h-1 after:bg-secondary-100 after:w-14 hover:after:w-full after:transition-all after:duration-400 after:absolute after:bottom-0 pb-2 after:rounded-full after:left-0"
						>
							<span class="text-secondary-100">hi@kevin.com </span>
							<Icon
								svgData="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
								classAttr="w-4 h-4 text-secondary-100"
							/>
						</button>
					</div>
				</div>
				<div class="w-full flex gap-24">
					<div class="flex gap-4 items-end">
						<h1 class="text-7xl text-secondary-100 font-bold">14</h1>
						<p class="text-sm">Years of <br />Experience.</p>
					</div>
					<div class="flex gap-4 items-end">
						<h1 class="text-7xl text-secondary-100 font-bold">187</h1>
						<p class="text-sm">Satisfied<br />Clients.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="flex justify-center">
		<div class="grid grid-cols-4 gap-4 mt-36 w-full max-w-[1200px]">
			{#each boxContent as item}
				<div
					class="group relative bg-primary-dark-200 hover:bg-secondary-100/40 transition cursor-pointer w-full rounded-md h-72 flex flex-col justify-end items-center"
				>
					{#if item.icon}
						<div
							class="h-full flex-1 flex justify-center items-center w-full mt-10"
						>
							<svelte:component
								this={item.icon.component}
								{...item.icon.props}
							/>
						</div>
					{/if}
					<div class="pb-7 text-center">
						<h1 class="text-md">{item.content}</h1>
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
	<div class="flex justify-center mt-24 bg-primary-dark-200 py-20">
		<div class="w-full max-w-[1300px] flex">
			<div class="w-full">
				<h3 class="font-mono text-gray-500 font-bold">—Portfolio</h3>
				<h1 class="text-3xl leading-relaxed">
					All created Works, Selected projects
				</h1>
				<p class="text-xs text-gray-500 leading-8 font-semibold mt-5 max-w-lg">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
					obcaecati sed sint veritatis a perspiciatis placeat consequuntur
					consequatur iusto, doloremque, adipisci porro corrupti dolore nemo
					amet est. Veniam, exercitationem sequi!
				</p>
				<div class="relative w-fit mt-10">
					<button
						class="flex cursor-pointer items-center gap-2 after:h-1 after:bg-secondary-100 after:w-14 hover:after:w-full after:transition-all after:duration-400 after:absolute after:bottom-0 pb-2 after:rounded-full after:left-0"
					>
						<span class="text-secondary-100">Explore more</span>
						<Icon
							svgData="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
							classAttr="w-4 h-4 text-secondary-100"
						/>
					</button>
				</div>
			</div>
			<div class="w-full flex justify-end">
				<img
					src="/project-demo.jpg"
					alt="Project_image"
					class="rounded-xl w-[400px] h-[500px] object-cover shadow-2xl"
				/>
			</div>
		</div>
	</div>
	<div class="flex justify-center mt-24">
		<div class="w-full max-w-[1300px]">
			<div class="w-full">
				<h3 class="font-mono text-gray-500 font-bold">—Portfolio</h3>
				<h1 class="text-3xl leading-relaxed">
					What's new?<br />
					My blog and news
				</h1>
			</div>
			<div class="mt-20 flex">
				<div class="w-full">
					<img
						src="/19631ca3efe9444cb0d08c8fdbdaa48a.jpeg"
						alt="myImage"
						class="w-[400px] rounded-3xl shadow-2xl"
					/>
				</div>
				<div class="w-full relative">
					<h1 class="text-2xl relative leading-relaxed custom-content z-50">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
						natus deserunt qui consectetur. Adipisci quibusdam voluptate
						asperiores!
					</h1>
					<p class="text-xl text-gray-300 mt-10">Sir Albert Einstein</p>
					<p class="text-sm text-gray-400 mt-5">CEO of BeServer</p>
					<div class="flex gap-4 mt-10">
						<div class="w-20 bg-secondary-100 h-2 rounded-full" />
						<div class="w-20 bg-primary-dark-200 h-2 rounded-full" />
						<div class="w-20 bg-primary-dark-200 h-2 rounded-full" />
						<div class="w-20 bg-primary-dark-200 h-2 rounded-full" />
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="bg-primary-dark-200 mt-24 py-20 flex justify-center">
		<div class="w-full max-w-[1300px]">
			<div class="flex gap-10">
				<div class="w-full">
					<h1 class="text-3xl leading-relaxed">
						Got a project?<br />
						Let's talk.
					</h1>
					<p
						class="text-xs text-gray-500 leading-8 font-semibold mt-5 max-w-lg"
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ab
						distinctio accusamus, voluptatem non rerum provident dignissimos
						impedit tempora officiis ipsum dolorem sequi ipsa tempore pariatur
						corporis molestias veniam magni.
					</p>
					<div class="relative w-fit mt-10">
						<button
							class="flex cursor-pointer items-center gap-2 after:h-1 after:bg-secondary-100 after:w-14 hover:after:w-full after:transition-all after:duration-400 after:absolute after:bottom-0 pb-2 after:rounded-full after:left-0"
						>
							<span class="text-secondary-100">hi@kevin.com</span>
							<Icon
								svgData="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
								classAttr="w-4 h-4 text-secondary-100"
							/>
						</button>
					</div>
				</div>
				<div class="w-full">
					<h1 class="text-3xl leading-relaxed">
						Estimate your project?<br />Let me know here.
					</h1>
				</div>
			</div>
			<div class="mt-20 flex flex-col items-center gap-8">
				<img src="/logo.png" alt="logo" class="w-10" />
				<p class="text-sm text-gray-300">
					<span class="font-bold">Thanks for scrolling,</span> that's all folks
				</p>
			</div>
		</div>
	</div>
</section>
