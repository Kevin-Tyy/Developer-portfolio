<script lang="ts">
	import { boxContent } from "../utils/objects";
	import Icon from "../components/Icon.svelte";
	import { goto } from "$app/navigation";
	import emailjs from "@emailjs/browser";
	import {
		PUBLIC_KEY,
		PUBLIC_SERVICE_ID,
		PUBLIC_TEMPLATE_ID,
	} from "$env/static/public";
	import Snackbar from "../components/Snackbar.svelte";
	import Image from "../components/Image.svelte";
	let loading = false;
	function sendEmail(e: any) {
		loading = true;
		emailjs
			.sendForm(PUBLIC_SERVICE_ID, PUBLIC_TEMPLATE_ID, e.target, PUBLIC_KEY)
			.then(
				(result) => {
					showSnackbar("Call booked <br> You'll hear from me soon 😉");
				},
				(error) => {
					showSnackbar("Couldn't Reach Me");
					console.log("FAILED...", error.text);
				}
			)
			.finally(() => {
				loading = false;
			});
	}
	function hideSnackbar() {
		isSnackbarVisible = false;
	}

	let snackbarMessage: string;
	let isSnackbarVisible: boolean;
	function showSnackbar(snackMessage: string) {
		snackbarMessage = snackMessage;
		isSnackbarVisible = true;
		setTimeout(hideSnackbar, 2000);
	}
</script>

<svelte:head>
	<title>Kevin † Home</title>
</svelte:head>

<section class="h-full w-full text-white">
	<div class="flex flex-col">
		<div class="bg-primary-dark-200 w-full flex justify-center pt-28 pb-10">
			<div class="flex mt-10 max-w-[1300px]">
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
					<Image />
				</div>
				<div class="text-left flex flex-col gap-6 w-full mt-28">
					<h2 class="font-mono text-gray-500 font-bold">
						——————————Introduction
					</h2>
					<h1 class="text-3xl leading-relaxed">
						Product designer and developer, based in Rwanda.
					</h1>
					<p class="text-[14px] text-gray-4 00 leading-8">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
						facere placeat nobis nemo voluptas. Beatae architecto in aspernatur
						fugit quisquam, repellat, minima qui ipsum commodi atque eos,
						laboriosam maiores voluptas?
					</p>
					<div class="flex justify-between mr-10">
						<div class="relative w-fit">
							<button
								on:click={() => goto("/about")}
								class="flex cursor-pointer items-center gap-2 after:h-1 after:bg-secondary-100 after:w-14 hover:after:w-full after:transition-all after:duration-400 after:absolute after:bottom-0 pb-2 after:rounded-full after:left-0"
							>
								<span class="text-secondary-100"> My story </span>
								<Icon
									svgData="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
									classAttr="w-4 h-4 text-secondary-100"
								/>
							</button>
						</div>
						<button
							on:click={() => goto("/contact")}
							class="w-28 h-10 bg-secondary-100 hover:bg-yellow-600 rounded-md"
						>
							Hire me
						</button>
					</div>
				</div>
			</div>
		</div>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
			<path fill="#35344a" fill-opacity="1" d="M0,96L1440,32L1440,0L0,0Z" />
		</svg>
	</div>
	<div class="flex flex-col mt-20">
		<div class="max-w-[1400px] mx-auto">
			<div class="flex gap-20">
				<div class="w-full relative">
					<div>
						<img
							src="/cube.svg"
							alt="cube"
							class="w-14 absolute select-none -left-10 top-20 opacity-50"
							draggable="false"
						/>
						<img
							src="/Ellipse1.svg"
							alt="cube"
							class="w-14 absolute select-none left-32 top-60 opacity-50"
							draggable="false"
						/>
						<img
							src="/Traingles.svg"
							alt="cube"
							class="w-14 absolute select-none left-60 top-40 opacity-50"
							draggable="false"
						/>
					</div>
					<h2 class="font-mono text-gray-500 font-bold">——————————Contact</h2>
					<h1 class="text-3xl leading-relaxed">
						Any type of query or discussion.
					</h1>
					<p class="text-[14px] text-gray-500 leading-8 mt-5 max-w-lg">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio rem
						mollitia quisquam at illum, corrupti expedita.
					</p>
				</div>
				<div class="w-full relative max-w-2xl">
					<img
						src="/grid-dots.svg"
						alt="grid-dots"
						class="w-[200px] opacity-10 absolute right-0 -top-10 select-none"
						draggable="false"
					/>
					<h1 class="text-3xl leading-relaxed">
						You can't use up creativity, <br />the more you use, the more you
						have in your signifant mind.
					</h1>
					<p class="text-[14px] text-gray-400 leading-8 mt-5 max-w-lg">
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
			<div class="grid grid-cols-4 gap-4 mt-36">
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
							<p class="text-[14px] text-gray-400">{item.description}</p>
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
	</div>
	<div class="flex flex-col mt-[-200px]">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
			<path
				fill="#35344a"
				fill-opacity="1"
				d="M0,192L1440,320L1440,320L0,320Z"
			/>
		</svg>
		<div class="bg-primary-dark-200 pt-20 pb-40">
			<div class="w-full max-w-[1300px] mx-auto flex">
				<div class="w-full relative">
					<img
						src="/grid-dots.svg"
						alt="grid-dots"
						class="w-[200px] opacity-10 absolute -left-24 -top-10 select-none"
						draggable="false"
					/>
					<h3 class="font-mono text-gray-500 font-bold">——————————Portfolio</h3>
					<h1 class="text-3xl leading-relaxed">
						All created Works, Selected projects
					</h1>
					<p class="text-[14px] text-gray-400 leading-8 mt-5 max-w-lg">
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
					<img
						src="/arrow-curl-right.svg"
						alt="grid-dots"
						class="w-[220px] opacity-10 absolute -right-20 -bottom-14 select-none rotate-[120deg]"
						draggable="false"
					/>
				</div>
				<div class="w-full flex justify-center relative">
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<div
						class="-translate-y-10 -translate-x-10 cursor-pointer group"
						on:click={() => goto("/works")}
					>
						<img
							src="/project-demo.jpg"
							alt="Project_image"
							class="rounded-xl w-[400px] h-[500px] object-cover shadow-2xl transition-all duration-500 group-hover:translate-x-2"
						/>
						<img
							src="/project-demo.jpg"
							alt="Project_image"
							class="rounded-xl w-[400px] h-[500px] absolute top-10 -right-10 object-cover shadow-2xl transition-all duration-500 group-hover:translate-x-10"
						/>
						<img
							src="/project-demo.jpg"
							alt="Project_image"
							class="rounded-xl w-[400px] h-[500px] absolute top-20 -right-20 object-cover shadow-2xl transition-all duration-500 group-hover:translate-x-24"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="mt-24">
		<div class="w-full mx-auto max-w-[1300px]">
			<div class="w-full">
				<h3 class="font-mono text-gray-500 font-bold">——————————Portfolio</h3>
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
					<div>
						<img
							src="/cube.svg"
							alt="cube"
							class="w-14 absolute select-none right-0 -top-14 opacity-50"
							draggable="false"
						/>
						<img
							src="/Ellipse1.svg"
							alt="cube"
							class="w-14 absolute select-none -right-32 -top-60 opacity-50"
							draggable="false"
						/>
						<img
							src="/Traingles.svg"
							alt="cube"
							class="w-14 absolute select-none -right-60 -top-40 opacity-50"
							draggable="false"
						/>
					</div>
					<h1
						class="text-3xl relative leading-relaxed custom-content font-sans font-semibold z-10"
					>
						Any fool can write code that a computer can understand. Good
						programmers write code that humans can understand
					</h1>
					<p class="text-xl text-gray-300 mt-10">Martin Fowler</p>
					<p class="text-sm text-gray-400 mt-5">CEO of Thoughtworks</p>
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
	<div class="relative flex flex-col">
		<div class="block">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180">
				<path
					fill="#35344a"
					fill-opacity="1"
					d="M0,128L120,112C240,96,480,64,720,69.3C960,75,1200,117,1320,138.7L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
				/>
			</svg>
		</div>
		<div class="bg-primary-dark-200 pb-20 relative">
			<div class="w-full max-w-[1300px] mx-auto">
				<div class="flex items-center gap-10">
					<div class="w-full relative">
						<img
							src="/grid-dots.svg"
							alt="grid-dots"
							class="w-[200px] opacity-10 absolute -left-24 -top-10 select-none"
							draggable="false"
						/>
						<h1 class="text-3xl leading-relaxed">
							Got a project?<br />
							Let's talk.
						</h1>
						<p class="text-gray-400 leading-8 text-[14px] mt-5 max-w-lg">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
							ab distinctio accusamus, voluptatem non rerum provident
							dignissimos impedit tempora officiis ipsum dolorem sequi ipsa
							tempore pariatur corporis molestias veniam magni.
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
					<div class="w-full relative">
						<img
							src="/arrow-curl.svg"
							alt="grid-dots"
							class="w-[220px] opacity-10 absolute -right-20 -top-14 select-none"
							draggable="false"
						/>
						<h1 class="text-4xl leading-normal">
							Have an awesome project idea?<br /><span class="text-yellow-300">
								Let me know here.
							</span>
						</h1>
						<form on:submit|preventDefault={sendEmail} class="mt-7">
							<div
								class="ring-1 ring-[#5a5a5a] transition duration-200 rounded-2xl p-1.5 pl-4 flex gap-4 focus-within:ring-[#adadad] group"
							>
								<Icon
									svgData="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z M18.7698 7.7688L13.2228 12.0551C12.5025 12.6116 11.4973 12.6116 10.777 12.0551L5.22998 7.7688"
									classAttr="text-gray-500 w-6 group-focus-within:text-white transition duration-200"
								/>
								<input
									required
									type="email"
									name="email"
									placeholder="Enter your email"
									class="bg-transparent flex-1 outline-none text-sm"
								/>
								<button
									disabled={loading}
									class={`flex text-black text-sm bg-secondary-100 rounded-xl px-4 py-3 gap-2 ${
										loading && "opacity-60"
									}`}
								>
									<span>{loading ? "Booking call" : "Book a call"} </span>
									<Icon
										svgData="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z M18.5 9C18.5 8.4 18.03 7.48 17.33 6.73C16.69 6.04 15.84 5.5 15 5.5 M22 9C22 5.13 18.87 2 15 2"
										classAttr="w-5"
									/>
								</button>
							</div>
						</form>
					</div>
				</div>
				<div class="mt-20 flex flex-col items-center gap-8">
					<img src="/logo.png" alt="logo" class="w-10 animate-bounce" />
					<p class="text-sm text-gray-300">
						<span class="font-bold">Thanks for scrolling,</span> that's all folks
					</p>
				</div>
			</div>
		</div>
	</div>
	<Snackbar {isSnackbarVisible} {snackbarMessage} />
</section>
