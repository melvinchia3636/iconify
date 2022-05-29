<script>
  import Icon from "@iconify/svelte";
  import { count } from "./stores";

  const categories = {
    rose: "General",
    orange: "Brands / Social",
    emerald: "Emoji",
    sky: "Maps / Flags",
    purple: "Thematic",
    gray: "Archive / Unmaintained",
    teal: "Other",
  };

  export let setSelectedCategory;
  export let selectedCategory;
  export let value = "";

  let count_value;

  count.subscribe((value) => {
    count_value = value;
  });
</script>

<form
  action="/search"
  class="flex flex-col w-full sm:h-16 mt-12 sm:flex-row gap-4"
>
  <div
    class="inline-flex items-center w-full p-4 overflow-hidden bg-zinc-200 dark:bg-zinc-700 rounded-md dark:bg-opacity-40 shadow-md gap-4 "
  >
    <Icon icon="fe:search" class="text-zinc-300" width="24" height="24" />
    <input
      autocomplete="off"
      name="q"
      id="q"
      type="text"
      class="w-full tracking-wide text-zinc-500 bg-transparent"
      placeholder="Search {count_value.toLocaleString()} icons"
    />
  </div>
  <button
    type="submit"
    class="flex items-center justify-center h-16 sm:h-full px-12 rounded-md font-semibold tracking-wide text-yellow-400 border-2 border-yellow-400 shadow-md whitespace-nowrap  gap-6"
  >
    Search Icons
  </button>
</form>
<div
  class="flex flex-col md:flex-row items-center justify-between w-full mt-4 gap-4"
>
  <div class="flex flex-wrap gap-2">
    {#each Object.entries(categories) as [color, category], index}
      <button
        on:click={() =>
          setSelectedCategory(selectedCategory == index ? null : index)}
        class="{selectedCategory === index
          ? `bg-yellow-400 text-zinc-800`
          : `border-2 border-yellow-400 text-yellow-400`} whitespace-nowrap h-11 flex flex-grow md:flex-grow-0 transition-all items-center justify-center shadow-md font-medium px-8 rounded-md "
        >{category}</button
      >
    {/each}
  </div>
  <div
    class="inline-flex items-center p-4 overflow-hidden bg-zinc-200 dark:bg-zinc-700 dark:bg-opacity-40 rounded-md shadow-md gap-4 w-full md:w-96 flex-shrink-0 "
  >
    <Icon icon="fe:search" class="text-zinc-300" width="24" height="24" />
    <input
      type="text"
      bind:value
      class="w-full tracking-wide text-zinc-500 bg-transparent"
      placeholder="Filter icon sets"
    />
  </div>
</div>
