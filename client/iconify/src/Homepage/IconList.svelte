<script>
    import Icon from '@iconify/svelte';

    async function getIconSet() {
      const res = await fetch('http://localhost:3001/fetch-iconsets');
      const data = await res.json();
      return data;
    }

    const getIconSetPromise = getIconSet();
    const colors = ['red', 'yellow', 'green', 'indigo', 'purple'];
</script>

<div class="w-full px-16 flex flex-col items-center">
    <p class="text-red-500 font-medium text-2xl text-center tracking-wide">Browse</p>
    <h2 class="text-6xl font-semibold tracking-wide text-gray-700 text-center mb-12">All available icons</h2>
    <div class="bg-white shadow-md inline-flex items-center p-4 gap-4 w-3/5 rounded-md overflow-hidden">
        <Icon icon="fe:search" class="text-gray-300" width="32" height="32"/>
        <input type="text" class=" tracking-wide text-xl text-gray-500 w-full" placeholder="Search all icons" />
    </div>
    {#await getIconSetPromise}
        <p>Waiting</p>
    {:then data}
        <div class="flex flex-col gap-6 w-full pt-12">
            {#each Object.entries(data.icon_sets) as [name, iconSets], index}
                <div class="rounded-lg overflow-hidden shadow-md w-full">
                    <div class="bg-{colors[index]}-500 p-12 py-8 text-white text-3xl font-medium tracking-wide">
                        {name}
                    </div>
                    <div class="p-12 grid grid-cols-2 flex-wrap gap-4">
                        {#each iconSets as iconSet}
                            <div class="rounded-lg overflow-hidden shadow-md flex flex-grow">
                                <div class="text-white text-2xl font-medium tracking-wide flex flex-col w-3/12">
                                    <div class="bg-{colors[index]}-400 text-white w-full h-full flex items-center justify-center px-4 py-3 gap-3">
                                        {#each iconSet.sample_icon.split(',') as sampleIcon}
                                            <Icon icon={`${iconSet.prefix}:${sampleIcon}`}  width="24" height="24"/>
                                        {/each}
                                    </div>
                                    <div class="w-full h-full bg-{colors[index]}-500 flex px-4 justify-between items-center text-white" style="font-size: 1.2rem">
                                        <p>{iconSet.icon_count}</p>
                                        {#if iconSet.height}
                                            <div class="flex items-center">
                                                <Icon icon="icon-park-outline:auto-height-one" width="24" height="24"/>
                                                <p class="ml-1">{iconSet.height}</p>
                                            </div>
                                        {/if}
                                    </div>
                                </div>
                                <div class="py-3 px-4 flex flex-col justify-between">
                                    <a href="./icon-set/{iconSet.prefix}" class="text-{colors[index % 7]}-400 tracking-wide text-2xl font-medium">{iconSet.name}</a>
                                    <p class="tracking-wide text-lg text-gray-400 mt-3">By <a target="_blank" href={iconSet.url || '/'} class="text-{colors[index % 7]}-400">{iconSet.author}</a></p>
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>
            {/each}
        </div>
    {/await}
</div>