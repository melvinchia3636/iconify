<script>
    import Icon from '@iconify/svelte';
    import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';
    import Usage from './Usage.svelte';
    import { currentIcon, currentIconSet } from "./stores";

    export let iconSet;

    let curIcon = null;

    currentIcon.subscribe(value => {
        curIcon = value
    })

    const colors = {
      General: 'rose',
      Emoji: 'orange',
      'Brands / Social': 'emerald',
      Maps: 'sky',
      Thematic: 'purple',
    };

    let iconlist = null;
    let version = '';
    let name = '';
    let iconCount = 0;
    let tags = [];
    let category = null;
    let currentTag = null;
    let page = 1;
    let searchTerm = null;
    let hasMore = false;
    let isLoading = false;

    async function getIconSet(tag, isNewTag) {
        if (isNewTag) {
            iconlist = null;
            page = 1;
            hasMore = false;
        }
        currentTag = tag || null;
        console.log(currentTag)
        const res = await fetch(`https://api.iconify.thecodeblog.net/fetch-iconlist/${iconSet}/${page}?${tag ? `tag=${tag.replace('&', '%26')}` : ''}${searchTerm ? `&q=${searchTerm.toLowerCase()}` : ''}`);
        const data = await res.json();
        iconlist = data.icons.length ? (!isNewTag ? iconlist.concat(data.icons) : data.icons) : [];
        version = data.version || '1.0.0';
        name = data.name;
        iconCount = data.icon_count;
        tags = data.tags;
        category = data.category;
        hasMore = data.hasMore;
        isLoading = false;
        currentIconSet.set(name);
    }

    getIconSet(null, true);

    document.addEventListener('keypress', (e) => {
      if (e.code === 'Slash') {
        document.querySelector('input').focus();
        e.preventDefault();
      }
    });
</script>

<div class="flex flex-col justify-center w-full px-12 md:px-24">
    <h1 class="mt-12 mb-6 text-5xl font-semibold tracking-wide text-center text-gray-700">{name}<span class="ml-2 text-xl text-blue-500">v{version}</span></h1>
    <div class="inline-flex items-center w-full p-4 mx-auto mb-6 overflow-hidden bg-white shadow-md gap-4 rounded-md">
        <Icon icon="fe:search" class="text-gray-300" width="32" height="32"/>
        <input bind:value={searchTerm} on:input={() => getIconSet(currentTag, true)} type="text" class="w-full text-xl tracking-wide text-gray-500 " placeholder="Search {iconCount} icons (Press '/' to focus)" />
    </div>
    <div class="flex flex-wrap justify-center mb-12 gap-2">
        {#each tags.sort() as tag}
            {#if tag}
                <button on:click={() => getIconSet(currentTag !== tag ? tag : null, true)} class="{currentTag === null || currentTag === tag ? `bg-${colors[category]}-500` : `border-2 border-${colors[category]}-500 text-${colors[category]}-500`} whitespace-nowrap h-11 flex transition-all items-center justify-center shadow-md text-white font-medium text-lg px-8 pb-0.5 rounded-md flex-grow md:flex-grow-0">{tag}</button>
            {/if}
        {/each}
    </div>
    {#if iconlist === null || iconlist.length > 0}
        {#if iconlist}
            <div class="w-full pb-8 grid gap-4" style="grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))">
                {#each iconlist as icon}
                    <div on:click={() => {currentIcon.set(`${iconSet}:${icon.name}`)}} class="flex flex-col items-center justify-between p-12 pb-4 bg-white shadow-md cursor-pointer transition-all hover:bg-gray-50 rounded-md gap-12">
                        <Icon icon={`${iconSet}:${icon.name}`} width="56" height="56" class="text-gray-700" />
                        <p class="font-medium tracking-wide text-center text-gray-700">{icon.name}</p>
                    </div>
                {/each}
            </div>
        {:else}
            <div class="flex justify-center w-full">
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
        <p class="text-3xl font-medium tracking-wide text-center text-gray-500">Nothing found :(</p>
    {/if}
    {#if hasMore}
        <button on:click={() => { page += 1; isLoading = true; getIconSet(currentTag); }} class="flex items-center justify-center h-16 px-12 text-xl font-medium tracking-wide text-white bg-blue-500 shadow-md rounded-md">
            {#if isLoading}
                <div class="-mb-12">
                    <LottiePlayer
                        src="/assets/loading_white.json"
                        autoplay="{true}"
                        loop="{true}"
                        renderer="svg"
                        background="transparent"
                        height="{100}"
                        width="{100}"
                    />
                </div>
            {:else}
                Load More
            {/if}
        </button>
    {/if}
    {#if curIcon}
        <Usage />
    {/if}
</div>
