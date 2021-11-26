<script>
    import Icon from '@iconify/svelte';
    import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';
    import { currentIcon, currentIconSet as curIconSet } from '../IconList/stores';
    import Usage from "../IconList/Usage.svelte";

    const colors = {
      General: 'red',
      Emoji: 'yellow',
      'Brands / Social': 'green',
      Maps: 'indigo',
      Thematic: 'purple',
    };

    let iconlist = null;
    let iconSets = null;
    let currentPage = 1;
    const urlParams = new URLSearchParams(window.location.search);
    const searchTerm = urlParams.get('q');
    let hasMore = false;
    let currentIconSet = null;
    let isLoading = false;

    let curIcon = null;

    currentIcon.subscribe(value => {
        curIcon = value
    })

    async function getIconSet(iconSet, isNewSets) {
      if (isNewSets) {
        iconlist = null;
        hasMore = false;
        currentPage = 1;
      }
      currentIconSet = iconSet || null;
      const res = await fetch(`http://localhost:3001/search-icons?q=${searchTerm}&page=${currentPage}${iconSet ? `&icon_set=${iconSet}` : ''}`);
      const data = await res.json();
      if (data.icons.length) {
        iconlist = !isNewSets ? iconlist.concat(data.icons) : data.icons;
      } else {
        iconlist = [];
      }
      iconSets = data.icon_sets;
      hasMore = data.hasMore;
      isLoading = false;
    }

    getIconSet(null, true);

    document.addEventListener('keypress', (e) => {
      if (e.code === 'Slash') {
        document.querySelector('input').focus();
        e.preventDefault();
      }
    });
</script>

<div class="w-full px-4 sm:px-24 flex flex-col justify-center">
    <h1 class="text-center font-semibold tracking-wide text-4xl sssm:text-5xl text-gray-700 mb-6 sssm:mt-12">Search results for "{searchTerm}"</h1>
    {#if iconSets}
        <div class="flex gap-2 flex-wrap mb-12 justify-center">
            {#each iconSets as iconSet}
                <button on:click={() => getIconSet(currentIconSet !== iconSet.prefix ? iconSet.prefix : null, true)} class="{currentIconSet === null || currentIconSet === iconSet.prefix ? `bg-${colors[iconSet.category]}-500` : `border-2 border-${colors[iconSet.category]}-500 text-${colors[iconSet.category]}-500`} whitespace-nowrap h-11 flex transition-all items-center justify-center shadow-md text-white font-medium text-md sssm:text-lg px-4 flex-grow sssm:px-8 pb-0.5 rounded-md ">{iconSet.name}</button>
            {/each}
        </div>
    {/if}
    {#if iconlist === null || iconlist.length > 0}
        {#if iconlist}
            <div class="w-full grid gap-4 pb-8" style="grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))">
                {#each iconlist as icon}
                    <button on:click={() => {curIconSet.set(iconSets.filter(e => e.prefix === icon.icon_set)[0].name); currentIcon.set(`${icon.icon_set}:${icon.name}`)}} class="transition-all bg-white hover:bg-gray-50 shadow-md rounded-md flex flex-col gap-12 p-12 pb-4 items-center justify-between">
                        <Icon icon={`${icon.icon_set}:${icon.name}`} width="56" height="56" class="text-gray-700" />
                        <p class="font-medium tracking-wide text-gray-700 text-center">{icon.icon_set}:{icon.name}</p>
                    </button>
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
        <button on:click={() => { currentPage += 1; isLoading = true; getIconSet(); }} class="bg-blue-500 font-medium flex items-center justify-center text-white text-xl rounded-md shadow-md px-12 h-16 tracking-wide">
            {#if isLoading}
                <div
                class="-mb-12">
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