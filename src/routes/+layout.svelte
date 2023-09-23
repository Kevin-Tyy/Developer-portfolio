<script lang="ts">
	import "../app.css";
	import Sidebar from "../components/Sidebar.svelte";
</script>

<div class="bg-gray-900 h-full min-h-screen ">
	<Sidebar/>
	<slot />
</div>
