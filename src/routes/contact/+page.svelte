<script lang="ts">
	import Icon from "../../components/Icon.svelte";
	let names: string;
	let email: string;
	let subject: string;
	let message: string;
</script>

<svelte:head>
	<title>Kevin † Contact</title>
</svelte:head>

<section class="mt-24 max-w-[600px] mx-auto">
	<div
		class="ring-1 ring-gray-300 w-fit text-sm text-gray-300 flex items-center gap-2 p-2 rounded-full"
	>
		<Icon
			classAttr="text-white w-4 h-4"
			svgData="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
		/>
		Contact
	</div>
	<h1 class="text-white text-3xl mt-10 mb-5">
		Let's work <span class="text-secondary-100">Together!</span>
	</h1>
	<a href="mailto:tuyizerek27@gmail.com" class="text-sm text-gray-400"
		>tuyizerek27@gmail.com</a
	>

	<p class="text-red-400 text-xs mt-10">* Marked fields are required to continue</p>
	<form class="mt-10" method="post">
		<div class="flex gap-6">
			<div class="w-full">
				<label for="email" class="text-gray-200 text-xs uppercase"
					>Full names<span class="text-red-400 text-xs">*</span></label
				>
				<input
					type="text"
					id="email"
					placeholder="Your names"
					bind:value={names}
					required
					class="bg-transparent w-full block text-white border-b border-gray-500 focus-within:border-white outline-none text-sm placeholder:text-gray-500 mb-8 pt-1 pb-2"
				/>
			</div>
			<div class="w-full">
				<label for="email" class="text-gray-200 text-xs uppercase"
					>Email<span class="text-red-400 text-xs">*</span></label
				>
				<input
					type="email"
					id="email"
					placeholder="Your email address"
					bind:value={email}
					required
					class="bg-transparent w-full block text-white border-b border-gray-500 focus-within:border-white outline-none text-sm placeholder:text-gray-500 mb-8 pt-1 pb-2"
				/>
			</div>
		</div>

		<label for="subject" class="text-gray-200 text-xs uppercase"
			>Subject<span class="text-red-400 text-xs">*</span></label
		>
		<input
			type="text"
			id="subject"
			bind:value={subject}
			required
			placeholder="Select a subject"
			class="bg-transparent w-full block text-white border-b border-gray-500 focus-within:border-white outline-none text-sm placeholder:text-gray-500 mb-8 pt-1 pb-2"
		/>

		<label for="message" class="text-gray-200 text-xs uppercase"
			>Message</label
		>
		<textarea
			id="message"
			bind:value={message}
			required
			placeholder="Write your message here..."
			class="bg-transparent w-full block text-white border-b border-gray-500 focus-within:border-white outline-none h-32 resize-none text-sm placeholder:text-gray-500 mb-8 pt-2 pb-2"
		/>

		<label
			for="attachment"
			class="uppercase text-white text-xs flex items-center gap-2 cursor-pointer"
		>
			<Icon
				classAttr="text-white w-5 h-5"
				svgData="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
			/>
			<span>Add an attachment</span>
		</label>
		<input type="file" id="attachment" class="hidden" />
		<button type="submit" class="bg-secondary-100 py-3 px-4 mt-10 rounded-full text-black text-xs uppercase">Send message</button>
	</form>
</section>
