<script>
    import Icon from '@iconify/svelte';
    import { count } from './stores';

    const categories = {
      red: 'General',
      yellow: 'Emoji',
      green: 'Brand / Social',
      indigo: 'Maps',
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

<form action="/search" class="w-full h-16 flex gap-4 mt-12">
    <div class="bg-white shadow-md inline-flex items-center p-4 gap-4 w-full rounded-md overflow-hidden">
        <Icon icon="fe:search" class="text-gray-300" width="32" height="32"/>
        <input autocomplete="off" name="q" id="q" type="text" class=" tracking-wide text-xl text-gray-500 w-full" placeholder="Search {count_value.toLocaleString()} icons" />
    </div>
    <button type="submit" class="bg-blue-500 px-12 h-full shadow-md whitespace-nowrap text-white font-semibold text-xl tracking-wide rounded-md flex items-center gap-6">
        Search Icons
    </button>
</form>
<div class="w-full flex gap-8 mt-4 items-center justify-between">
    <div class="flex gap-2 flex-wrap">
        {#each Object.entries(categories) as [color, category], index}
            <button on:click={() => setSelectedCategory(selectedCategory == index ? null : index)} class="{selectedCategory === null || selectedCategory === index ? `bg-${color}-500` : `border-2 border-${color}-500 text-${color}-500`} whitespace-nowrap h-11 flex transition-all items-center justify-center shadow-md text-white font-medium text-lg px-8 pb-0.5 rounded-full ">{category}</button>
        {/each}
    </div>
    <div class="bg-white shadow-md inline-flex items-center p-4 gap-4 w-96 rounded-md overflow-hidden">
        <Icon icon="fe:search" class="text-gray-300" width="32" height="32"/>
        <input type="text" bind:value class=" tracking-wide text-xl text-gray-500 w-full" placeholder="Filter icon sets" />
    </div>
</div>