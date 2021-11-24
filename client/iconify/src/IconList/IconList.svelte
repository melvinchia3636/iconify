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
      General: 'red',
      Emoji: 'yellow',
      'Brands / Social': 'green',
      Maps: 'indigo',
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
        const res = await fetch(`http://localhost:3001/fetch-iconlist/${iconSet}/${page}?${tag ? `tag=${tag.replace('&', '%26')}` : ''}${searchTerm ? `&q=${searchTerm.toLowerCase()}` : ''}`);
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

<div class="w-full px-24 flex flex-col justify-center">
    <h1 class="text-center font-semibold tracking-wide text-5xl text-gray-700 mb-6 mt-12">{name}<span class="text-xl text-blue-500 ml-2">v{version}</span></h1>
    <div class="bg-white shadow-md inline-flex items-center mx-auto p-4 mb-6 gap-4 w-full rounded-md overflow-hidden">
        <Icon icon="fe:search" class="text-gray-300" width="32" height="32"/>
        <input bind:value={searchTerm} on:input={() => getIconSet(currentTag, true)} type="text" class=" tracking-wide text-xl text-gray-500 w-full" placeholder="Search {iconCount} icons (Press '/' to focus)" />
    </div>
    <div class="flex gap-2 flex-wrap mb-12 justify-center">
        {#each tags as tag}
            <button on:click={() => getIconSet(currentTag !== tag ? tag : null, true)} class="{currentTag === null || currentTag === tag ? `bg-${colors[category]}-500` : `border-2 border-${colors[category]}-500 text-${colors[category]}-500`} whitespace-nowrap h-11 flex transition-all items-center justify-center shadow-md text-white font-medium text-lg px-8 pb-0.5 rounded-md ">{tag}</button>
        {/each}
    </div>
    {#if iconlist === null || iconlist.length > 0}
        {#if iconlist}
            <div class="w-full grid gap-4 pb-8" style="grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))">
                {#each iconlist as icon}
                    <div on:click={() => {currentIcon.set(`${iconSet}:${icon.name}`)}} class="transition-all bg-white hover:bg-gray-50 cursor-pointer shadow-md rounded-md flex flex-col gap-12 p-12 pb-4 items-center justify-between">
                        <Icon icon={`${iconSet}:${icon.name}`} width="56" height="56" class="text-gray-700" />
                        <p class="font-medium tracking-wide text-gray-700 text-center">{icon.name}</p>
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
        <button on:click={() => { page += 1; isLoading = true; getIconSet(); }} class="bg-blue-500 font-medium flex items-center justify-center text-white text-xl rounded-md shadow-md px-12 h-16 tracking-wide">
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