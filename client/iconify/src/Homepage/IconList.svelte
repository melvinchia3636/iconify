<script>
    import Icon from '@iconify/svelte';

    async function getIconSet() {
      const res = await fetch('http://api.iconify.thecodeblog.net/fetch-iconsets');
      const data = await res.json();
      return data;
    }

    const getIconSetPromise = getIconSet();
    const colors = ['rose', 'orange', 'emerald', 'sky', 'purple'];
</script>

<div class="flex flex-col items-center w-full px-16">
    <p class="text-2xl font-medium tracking-wide text-center text-rose-500">Browse</p>
    <h2 class="mb-12 text-6xl font-semibold tracking-wide text-center text-gray-700">All available icons</h2>
    <div class="inline-flex items-center w-3/5 p-4 overflow-hidden bg-white shadow-md gap-4 rounded-md">
        <Icon icon="fe:search" class="text-gray-300" width="32" height="32"/>
        <input type="text" class="w-full text-xl tracking-wide text-gray-500 " placeholder="Search all icons" />
    </div>
    {#await getIconSetPromise}
        <p>Waiting</p>
    {:then data}
        <div class="flex flex-col w-full pt-12 gap-6">
            {#each Object.entries(data.icon_sets) as [name, iconSets], index}
                <div class="w-full overflow-hidden rounded-lg shadow-md">
                    <div class="bg-{colors[index]}-500 p-12 py-8 text-white text-3xl font-medium tracking-wide">
                        {name}
                    </div>
                    <div class="flex-wrap p-12 grid grid-cols-2 gap-4">
                        {#each iconSets as iconSet}
                            <div class="flex flex-grow overflow-hidden rounded-lg shadow-md">
                                <div class="flex flex-col w-3/12 text-2xl font-medium tracking-wide text-white">
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
                                <div class="flex flex-col justify-between px-4 py-3">
                                    <a href="./icon-set/{iconSet.prefix}" class="text-{colors[index % 7]}-400 tracking-wide text-2xl font-medium">{iconSet.name}</a>
                                    <p class="mt-3 text-lg tracking-wide text-gray-400">By <a target="_blank" href={iconSet.url || '/'} class="text-{colors[index % 7]}-400">{iconSet.author}</a></p>
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>
            {/each}
        </div>
    {/await}
</div>
