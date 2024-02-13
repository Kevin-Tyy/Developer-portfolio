<script lang="ts">
  import { page } from "$app/stores";
  import { beforeUpdate } from "svelte";

  let navObj = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Works",
      link: "/works",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ];

  let currentPath = $page.route.id;
  beforeUpdate(() => {
    currentPath = $page.route.id;
  });
</script>

<nav class="flex items-center justify-between py-5 px-10 max-w-[1500px] mx-auto absolute left-0 right-0 bg-transparent">
  <img src="/logo.png" alt="logo" class="w-10" />
  <div class="flex justify-between gap-4 mr-10">
    {#each navObj as item}
      <a href={item.link} class="relative p-2 flex flex-col items-start">
        <span class={`${item.link === currentPath ? "text-white" : "text-gray-400"}  `}>
          {item.title}
        </span>
        <div class={`w-10 h-1 bg-secondary-100 rounded-full mt-2 transition-all duration-300 overflow-hidden ${item.link !== currentPath && "!w-0"}`} />
      </a>
    {/each}
  </div>
</nav>
