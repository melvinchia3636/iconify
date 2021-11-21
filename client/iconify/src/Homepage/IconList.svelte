<script>
    import Icon from "@iconify/svelte";
    import axios from "axios";

    async function getIconSet() {
        const res = await fetch("http://localhost:3001/fetch-iconsets")
        const data = await res.json()
        return data
    }

    let getIconSetPromise = getIconSet()
    const colors = ['red', 'yellow', 'green', 'indigo', 'purple', 'pink'];
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
    {:then icon_sets}
        <di class="flex flex-col gap-6 w-full pt-12">
            {#each Object.entries(icon_sets) as [name, icon_sets], index}
                <div class="rounded-lg overflow-hidden shadow-md w-full">
                    <div class="bg-{colors[index]}-500 p-12 py-8 text-white text-3xl font-medium tracking-wide">
                        {name}
                    </div>
                    <div class="p-12 grid grid-cols-2 flex-wrap gap-4">
                        {#each icon_sets as icon_set}
                            <div class="rounded-lg overflow-hidden shadow-md flex flex-grow">
                                <div class="text-white text-2xl font-medium tracking-wide flex flex-col w-3/12">
                                    <div class="bg-{colors[index]}-400 text-white w-full h-full flex items-center justify-center px-4 py-3 gap-3">
                                        {#each icon_set.sample_icon.split(",") as sample_icon}
                                            <Icon icon={`${icon_set.prefix}:${sample_icon}`}  width="24" height="24"/>
                                        {/each}
                                    </div>
                                    <div class="w-full h-full bg-{colors[index]}-500 flex px-4 justify-between items-center text-white" style="font-size: 1.2rem">
                                        <p>{icon_set.icon_count}</p>
                                        {#if icon_set.height}
                                            <div class="flex items-center">
                                                <Icon icon="icon-park-outline:auto-height-one" width="24" height="24"/>
                                                <p class="ml-1">{icon_set.height}</p>
                                            </div>
                                        {/if}
                                    </div>
                                </div>
                                <div class="py-3 px-4 flex flex-col justify-between">
                                    <a target="_blank" href={icon_set.url || "/"} class="text-{colors[index % 7]}-400 tracking-wide text-2xl font-medium">{icon_set.name}</a>
                                    <p class="tracking-wide text-lg text-gray-400 mt-3">By <a target="_blank" href={icon_set.url || "/"} class="text-{colors[index % 7]}-400">{icon_set.author}</a></p>
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>
            {/each}
        </di>
    {/await}
</div>