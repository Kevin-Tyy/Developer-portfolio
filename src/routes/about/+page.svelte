<script lang="ts">
	import { goto } from "$app/navigation";
	import Icon from "../../components/Icon.svelte";
	import Timeline from "../../components/Timeline.svelte";
	import { educationObj, employementObj, services } from "../../utils/objects";
</script>

<svelte:head>
	<title>Kevin † About</title>
</svelte:head>

<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="currentColor"
	class="w-6 h-6"
>
	<path stroke-linecap="round" stroke-linejoin="round" d="" />
</svg>
<section class="pt-28">
	<div class="max-w-[1200px] pb-20 mx-auto">
		<div class="flex justify-between">
			<div>
				<div
					class="ring-1 ring-gray-300 w-fit text-xs text-gray-300 flex items-center gap-2 p-2 rounded-full px-3 py-2 uppercase"
				>
					<Icon
						classAttr="text-white w-4 h-4"
						svgData="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
					/>
					About
				</div>
				<h1 class="text-3xl text-white mt-10">
					Every great design with<br /> an even
					<span class="text-secondary-100">better story</span>
				</h1>
				<p class="text-xs text-gray-400 mt-6 leading-loose max-w-xl">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
					illo molestiae sapiente possimus ducimus vero non autem necessitatibus
					est incidunt dolore, ipsam voluptate cupiditate illum dolores culpa
					omnis quae iure!
				</p>
			</div>
			<div class="relative group cursor-pointer">
				<div
					class="absolute bottom-3 z-50 group-hover:-translate-x-1 group-hover:translate-y-1 transition-all duration-500"
				>
					<h1 class="font-sans text-6xl font-bold text-white">Kevin</h1>
					<div
						class="h-2 w-14 bg-secondary-100 mt-2 group-hover:w-20 transition-all duration-500 rounded-full"
					/>
				</div>
				<img
					src="/19631ca3efe9444cb0d08c8fdbdaa48a.jpeg"
					alt="myImage"
					class="w-[300px] rounded-full shadow-2xl group-hover:translate-x-2 -translate-y-2 transition-all duration-500"
				/>
			</div>
		</div>
		<div class="mt-10">
			<div
				class="ring-1 ring-gray-300 w-fit text-xs text-gray-300 flex items-center gap-2 p-2 rounded-full px-3 py-2 uppercase"
			>
				<Icon
					classAttr="text-white w-4 h-4"
					svgData="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008zv"
				/>
				Resumé
			</div>
			<h1 class="text-3xl text-white mt-10">Education</h1>
			<div class="text-white mt-10">
				{#each educationObj as item (item.title)}
					<Timeline {item} />
				{/each}
			</div>
			<h1 class="text-3xl text-secondary-100 mt-10">Experience</h1>
			<div class="text-white mt-10">
				{#each employementObj as item (item.title)}
					<Timeline {item} />
				{/each}
			</div>
		</div>
		<div>
			<div
				class="ring-1 ring-gray-300 w-fit text-xs text-gray-300 flex items-center gap-2 p-2 rounded-full px-3 py-2 uppercase"
			>
				<Icon
					classAttr="text-white w-4 h-4"
					svgData="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
				/>
				Services
			</div>
			<div class="grid grid-cols-2 gap-4 mt-10">
				{#each services as item}
					<div
						class="ring-1 cursor-pointer group ring-primary-dark-300 min-h-[150px] relative p-10 hover:ring-secondary-100 transition duration-500 rounded-md"
					>
						<div class="absolute top-3 right-3">
							<img src={item.icon} alt="icon" class="w-7 h-7" />
						</div>
						<div class="max-w-md">
							<h1 class="text-white text-lg">{item.title}</h1>
							<p class="text-sm text-gray-400">{item.decscription}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
		<div class="mt-10">
			<div
				class="ring-1 ring-gray-300 w-fit text-xs text-gray-300 flex items-center gap-2 p-2 rounded-full px-3 py-2 uppercase"
			>
				<Icon
					classAttr="text-white w-4 h-4"
					svgData="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
				/>
				Skill
			</div>
			<div />
		</div>
		<div class="mt-10">
			<div
				class="ring-1 ring-gray-300 w-fit text-xs text-gray-300 flex items-center gap-2 p-2 rounded-full px-3 py-2 uppercase"
			>
				<Icon
					classAttr="text-white w-4 h-4"
					svgData="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
				Pricing
			</div>
			<div class=" mt-8 flex gap-5">
				<div class="ring-1 ring-secondary-100 w-[360px] p-6 rounded-lg">
					<div class="flex justify-between">
						<h1 class="text-sm text-gray-300 uppercase">Basic</h1>
						<p class="text-xs text-gray-500 text-right">
							Lorem ipsum dolor sit <br />amet consectetur
						</p>
					</div>
					<h1 class="text-4xl text-secondary-100 mt-6">
						$30
						<span class="text-gray-500 text-lg">/hours</span>
					</h1>
					<hr class="my-7 border-1 border-gray-500" />
					<div class="text-gray-200 text-xs flex flex-col gap-3">
						<p class="leading-relaxed">Need your wireframe</p>
						<p class="leading-relaxed">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						</p>
						<p class="leading-relaxed">
							Lorem ipsum dolor sit amet consectetur.
						</p>
						<p class="leading-relaxed">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						</p>
						<p class="leading-relaxed">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
							excepturi?
						</p>
					</div>
					<button
						on:click={() => goto("/contact")}
						class="w-full bg-secondary-100 mt-36 rounded-full py-2.5 text-xs font-semibold uppercase"
					>
						Pick this package
					</button>
				</div>
				<div class="ring-1 ring-secondary-100 w-[360px] p-6 rounded-lg">
					<div class="flex justify-between">
						<h1 class="text-sm text-gray-300 uppercase">Premium</h1>
						<p class="text-xs text-gray-500 text-right">
							Lorem ipsum dolor sit <br />amet consectetur
						</p>
					</div>
					<h1 class="text-4xl text-secondary-100 mt-6">
						$50
						<span class="text-gray-500 text-lg">/hours</span>
					</h1>
					<hr class="my-7 border-1 border-gray-500" />
					<div class="text-gray-200 text-xs flex flex-col gap-3">
						<p class="leading-relaxed">Need your wireframe</p>
						<p class="leading-relaxed">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						</p>
						<p class="leading-relaxed">Lorem, ipsum dolor sit amet.</p>
						<p class="leading-relaxed">Lorem ipsum dolor sit.</p>
						<p class="leading-relaxed">
							Lorem ipsum, dolor sit amet consectetur.
						</p>
						<p class="leading-relaxed">
							Lorem, ipsum dolor sit amet consectetur adipisicing.
						</p>
						<p class="leading-relaxed">
							Lorem ipsum, dolor sit amet consectetur.
						</p>
					</div>
					<button
						on:click={() => goto("/contact")}
						class="w-full bg-secondary-100 mt-[100px] rounded-full py-2.5 text-xs font-semibold uppercase"
					>
						Pick this package
					</button>
				</div>
			</div>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<p class="text-xs text-gray-200 mt-14 leading-relaxed">
				Didn't find any package matching your plan?<br />Want to setup a new
				tailor-made package for you
				<span
					on:click={() => goto("/contact")}
					class="text-secondary-100 cursor-pointer hover:underline"
					>Contact us</span
				>
			</p>
		</div>
	</div>
</section>
