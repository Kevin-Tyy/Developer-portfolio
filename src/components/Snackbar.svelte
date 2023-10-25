<!-- Snackbar.svelte -->
<script lang="ts">
	export let snackbarMessage: string;
	export let isSnackbarVisible = false;
	
</script>

<div class="snackbar" class:isSnackbarVisible>
	<p>{@html snackbarMessage}</p>
</div>

<style>
	.snackbar {
		position: fixed;
		top: 20px;
		left: 50%;
		font-size: 13px;
		text-align: center;
		transform: translateX(-50%);
		background-color: #474466;
		color: #fff;
		padding: 12px 24px;
		border-radius: 4px;
		opacity: 0;
		transition: opacity 0.3s;
		z-index: 99999;
	}

	.isSnackbarVisible {
		opacity: 1;
	}
</style>
