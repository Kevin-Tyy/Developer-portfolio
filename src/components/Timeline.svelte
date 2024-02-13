<script lang="ts">
  import Icon from "./Icon.svelte";

  export let item: any;
</script>

<div class="flex gap-3 items-start h-auto">
  <div class="flex">
    <div class="flex flex-col items-center">
      <div class={`w-2.5 h-2.5 rounded-full ${item.index === 0 ? "bg-secondary-100" : "bg-primary-dark-300"}`} />
      <div class="w-[2px] h-full flex-1 bg-primary-dark-300"></div>
    </div>
    <div class="space-y-2 -mt-[6px] px-8 pb-10">
      <h1 class={`font-bold text-2xl ${item.index === 0 && "text-secondary-100"}`}>{item.title}</h1>
      <h2 class="text-blue-600 text-sm">{item.time}</h2>

      <p class="leading-relaxed">
        {item.description}
      </p>
    </div>
  </div>
</div>
