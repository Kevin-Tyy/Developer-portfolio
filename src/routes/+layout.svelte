<script lang="ts">
	import "../app.css";
	import Navbar from "../components/Navbar.svelte";
	import Sidebar from "../components/Sidebar.svelte";
</script>

<svelte:head>
	<meta name="description" content="Kevin Tuyizere Portolio" />
</svelte:head>

<div class="bg-primary-dark-100 h-full min-h-screen">
	<Navbar />
	<Sidebar />
	<slot />
</div>
