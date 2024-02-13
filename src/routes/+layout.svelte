<script lang="ts">
  import "../app.css";
  import Navbar from "../components/Navbar.svelte";
  import Sidebar from "../components/Sidebar.svelte";
  import { page } from "$app/stores";
  import Transition from "../providers/Transition.svelte";
  import NProgress from "nprogress";
  import { navigating } from "$app/stores";

  import "nprogress/nprogress.css";

  NProgress.configure({
    minimum: 0.16,
  });

  $: {
    if ($navigating) {
      NProgress.start();
    }
    if (!$navigating) {
      NProgress.done();
    }
  }
</script>

<svelte:head>
  <meta name="description" content="Kevin Tuyizere Portolio" />
</svelte:head>

<div class="bg-primary-dark-100 h-full min-h-screen relative">
  <Navbar />
  <Sidebar />
  <Transition url={$page.url}>
    <div>
      <slot />
    </div>
  </Transition>
</div>
