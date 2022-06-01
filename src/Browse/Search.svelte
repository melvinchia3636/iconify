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
  class="flex flex-col w-full sm:h-16 mt-12 sm:flex-row gap-2"
>
  <div
    class="inline-flex items-center w-full p-4 overflow-hidden border-2 border-stone-600 gap-4 "
  >
    <Icon icon="uil:search" class="" width="24" height="24" />
    <input
      autocomplete="off"
      name="q"
      id="q"
      type="text"
      class="w-full tracking-wide  placeholder-stone-600 bg-transparent"
      placeholder="Search {count_value.toLocaleString()} icons"
    />
  </div>
  <button
    type="submit"
    class="flex items-center justify-center h-16 sm:h-full px-12 font-semibold tracking-wide  border-2 border-stone-600  whitespace-nowrap  gap-6"
  >
    Search Icons
  </button>
</form>
<div
  class="flex flex-col md:flex-row items-start justify-between w-full mt-4 gap-4"
>
  <div class="flex flex-wrap gap-2">
    {#each Object.entries(categories) as [color, category], index}
      <button
        on:click={() =>
          setSelectedCategory(selectedCategory == index ? null : index)}
        class="{selectedCategory === index
          ? `bg-stone-600 text-stone-100`
          : ``} border-2 border-stone-600 whitespace-nowrap h-11 flex flex-grow md:flex-grow-0 transition-all items-center justify-center font-medium px-8"
        >{category}</button
      >
    {/each}
  </div>
  <div
    class="inline-flex items-center p-4 overflow-hidden border-2 border-stone-600 gap-3 w-full md:w-96 flex-shrink-0"
  >
    <Icon icon="octicon:filter-16" class="" width="24" height="24" />
    <input
      type="text"
      bind:value
      class="w-full tracking-wide  placeholder-stone-600 bg-transparent"
      placeholder="Filter icon sets"
    />
  </div>
</div>
