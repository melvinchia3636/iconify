<script>
    import Icon from '@iconify/svelte';
    import { count } from './stores';

    const categories = {
      rose: 'General',
      orange: 'Emoji',
      emerald: 'Brand / Social',
      sky: 'Maps',
      purple: 'Thematic',
    };

    export let setSelectedCategory;
    export let selectedCategory;
    export let value = '';

    let count_value;

count.subscribe((value) => {
  count_value = value;
});
</script>

<form action="/search" class="flex flex-col w-full sm:h-16 mt-12 sm:flex-row gap-4">
    <div class="inline-flex items-center w-full p-4 overflow-hidden bg-white shadow-md gap-4 rounded-md">
        <Icon icon="fe:search" class="text-gray-300" width="32" height="32"/>
        <input autocomplete="off" name="q" id="q" type="text" class="w-full text-xl tracking-wide text-gray-500 " placeholder="Search {count_value.toLocaleString()} icons" />
    </div>
    <button type="submit" class="flex items-center justify-center h-16 sm:h-full px-12 text-xl font-semibold tracking-wide text-white bg-blue-500 shadow-md whitespace-nowrap rounded-md gap-6">
        Search Icons
    </button>
</form>
<div class="flex flex-col md:flex-row items-center justify-between w-full mt-4 gap-4">
    <div class="flex flex-wrap gap-2">
        {#each Object.entries(categories) as [color, category], index}
            <button on:click={() => setSelectedCategory(selectedCategory == index ? null : index)} class="{selectedCategory === null || selectedCategory === index ? `bg-${color}-500` : `border-2 border-${color}-500 text-${color}-500`} whitespace-nowrap h-11 flex flex-grow md:flex-grow-0 transition-all items-center justify-center shadow-md text-white font-medium sm:text-lg px-8 pb-0.5 rounded-full ">{category}</button>
        {/each}
    </div>
    <div class="inline-flex items-center p-4 overflow-hidden bg-white shadow-md gap-4 w-full md:w-96 flex-shrink-0 rounded-md">
        <Icon icon="fe:search" class="text-gray-300" width="32" height="32"/>
        <input type="text" bind:value class="w-full text-xl tracking-wide text-gray-500 " placeholder="Filter icon sets" />
    </div>
</div>
