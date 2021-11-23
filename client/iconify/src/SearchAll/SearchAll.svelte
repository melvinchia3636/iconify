<script>
    import Icon from "@iconify/svelte";
    import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';

    const colors = {
        General: 'red',
        Emoji: 'yellow',
        "Brands / Social": 'green', 
        Maps: 'indigo', 
        Thematic: 'purple'
    }

    let iconlist = null;
    let icon_sets = null
    let currentPage = 1
    const urlParams = new URLSearchParams(window.location.search);
    const searchTerm = urlParams.get("q");
    let hasMore = false
    let currentIconSet = null;

    async function getIconSet(icon_set, isNewSets) {
        if (isNewSets) iconlist = null
        currentIconSet = icon_set || null
        const res = await fetch(`http://localhost:3001/search-icons?q=${searchTerm}&page=${currentPage}${icon_set ? "&icon_set=" + icon_set : ""}`)
        const data = await res.json()
        iconlist = data.icons.length ? (!isNewSets ? iconlist.concat(data.icons) : data.icons) : []
        icon_sets = data.icon_sets
        hasMore = data.hasMore
    }

    getIconSet(null, true)

    document.addEventListener("keypress", (e) => {
        if (e.code === "Slash") {
            document.querySelector("input").focus()
            e.preventDefault()
        }
    })
</script>

<div class="w-full px-24 flex flex-col justify-center">
    <h1 class="text-center font-semibold tracking-wide text-5xl text-gray-700 mb-6 mt-12">Search results for "{searchTerm}"</h1>
    {#if icon_sets}
        <div class="flex gap-2 flex-wrap mb-12 justify-center">
            {#each icon_sets as icon_set}
                <button on:click={() => getIconSet(currentIconSet !== icon_set.prefix ? icon_set.prefix : null, true)} class="{currentIconSet === null || currentIconSet === icon_set.prefix ? `bg-${colors[icon_set.category]}-500` : `border-2 border-${colors[icon_set.category]}-500 text-${colors[icon_set.category]}-500`} whitespace-nowrap h-11 flex transition-all items-center justify-center shadow-md text-white font-medium text-lg px-8 pb-0.5 rounded-md ">{icon_set.name}</button>
            {/each}
        </div>
    {/if}
    {#if iconlist === null || iconlist.length > 0}
        {#if iconlist}
            <div class="w-full grid gap-4 pb-8" style="grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))">
                {#each iconlist as icon}
                    <div class="shadow-md rounded-md flex flex-col gap-12 p-12 pb-4 items-center justify-between">
                        <Icon icon={`${icon.icon_set}:${icon.name}`} width="56" height="56" class="text-gray-700" />
                        <p class="font-medium tracking-wide text-gray-700 text-center">{icon.icon_set}:{icon.name}</p>
                    </div>
                {/each}
            </div>
        {:else}
            <div class="w-full flex justify-center">
                <LottiePlayer
                    src="/assets/loading_anim.json"
                    autoplay="{true}"
                    loop="{true}"
                    renderer="svg"
                    background="transparent"
                    height="{160}"
                    width="{160}"
                />
            </div>
        {/if}
    {:else}
        <p class="text-3xl text-center tracking-wide font-medium text-gray-500">Nothing found :(</p>
    {/if}
    {#if hasMore}
    <button on:click={() => {currentPage ++; getIconSet()}} class="bg-blue-500 font-medium text-white text-xl rounded-md shadow-md px-12 py-3 tracking-wide">Load More</button>{/if}
</div>