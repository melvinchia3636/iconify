<script>
  import Icon from "@iconify/svelte";
  import { LottiePlayer } from "@lottiefiles/svelte-lottie-player";
  import Usage from "./Usage.svelte";
  import { currentIcon, currentIconSet } from "./stores";

  export let iconSet;

  let curIcon = null;

  currentIcon.subscribe((value) => {
    curIcon = value;
  });

  const colors = {
    General: "rose",
    Emoji: "orange",
    "Brands / Social": "emerald",
    Maps: "sky",
    Thematic: "purple",
  };

  let iconlist = null;
  let version = "";
  let name = "";
  let iconCount = 0;
  let tags = [];
  let category = null;
  let currentTag = null;
  let searchTerm = null;
  let filteredIconList = null;

  async function getIconSet() {
    const res = await fetch(
      `https:cors-anywhere.thecodeblog.net/icon-sets.iconify.design/assets/collection.${iconSet}.js`
    );
    let data = await res.text();
    data = JSON.parse(data.match(/=(.+);/)[1]);
    iconlist = data.icons;
    version = data.info.version || "1.0.0";
    name = data.info.name;
    iconCount = data.info.total;
    tags = data.tags || [];
    category = data.info.category;
    currentIconSet.set(name);
    filteredIconList = iconlist;
  }

  getIconSet();

  const setCurrentTag = (tag) => {
    if (currentTag !== tag) {
      currentTag = tag;
      filteredIconList = iconlist.filter((icon) => {
        return icon.tags.includes(tag);
      });
    } else {
      currentTag = null;
      filteredIconList = iconlist;
    }
  };

  const inputOnChange = function (e) {
    filteredIconList = iconlist.filter((icon) => {
      return (icon.name || icon)
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
  };
</script>

<div class="flex flex-1 flex-col w-full px-12 md:px-24">
  <h1
    class="mt-12 mb-6 text-3xl font-semibold tracking-wide text-center text-zinc-600 dark:text-zinc-100 flex flex-col items-center gap-6 sm:inline"
  >
    {name}<span class="ml-2 text-base text-yellow-400">v{version}</span>
  </h1>
  <div
    class="inline-flex items-center w-full rounded-md p-4 mx-auto mb-6 overflow-hidden bg-white dark:bg-zinc-700 dark:bg-opacity-40 shadow-md gap-4 "
  >
    <Icon icon="fe:search" class="text-zinc-300" width="24" height="24" />
    <input
      bind:value={searchTerm}
      on:input={inputOnChange}
      type="text"
      id="icon-search"
      class="w-full tracking-wide text-zinc-500 dark:text-zinc-200 bg-transparent"
      placeholder="Search {iconCount} icons (Press '/' to focus)"
    />
  </div>
  {#if tags.length}
  <div class="flex flex-wrap justify-center mb-12 gap-2">
    {#each tags.sort() as tag}
      {#if tag}
        <button
          on:click={() => setCurrentTag(tag)}
          class="{currentTag === tag
            ? `bg-yellow-400 text-zinc-800`
            : `border-2 border-yellow-400 text-yellow-400`} whitespace-nowrap rounded-md h-11 flex transition-all items-center justify-center shadow-md font-medium text-sm px-8 flex-grow md:flex-grow-0"
          >{tag}</button
        >
      {/if}
    {/each}
  </div>
  {/if}
  {#if filteredIconList === null || filteredIconList.length > 0}
    {#if filteredIconList}
      <div
        class="w-full pb-8 grid gap-3"
        style="grid-template-columns: repeat(auto-fill, minmax(140px, 1fr))"
      >
        {#each filteredIconList as icon}
          <div
            on:click={() => {
              currentIcon.set(`${iconSet}:${icon.name || icon}`);
            }}
            class="flex flex-col items-center justify-between rounded-md bg-white dark:bg-zinc-700 dark:bg-opacity-40 cursor-pointer transition-all hover:bg-zinc-50 dark:hover:bg-opacity-60  p-4"
          >
            <Icon
              icon={`${iconSet}:${icon.name || icon}`}
              width="32"
              height="32"
              class="text-zinc-600 dark:text-zinc-200"
            />
            <p
              class="font-medium text-xs tracking-wide text-center text-zinc-600 dark:text-zinc-500 mt-4"
            >
              {icon.name || icon}
            </p>
          </div>
        {/each}
      </div>
    {:else}
      <div class="flex justify-center w-full">
        <LottiePlayer
          src="/assets/loading_anim.json"
          autoplay={true}
          loop={true}
          renderer="svg"
          background="transparent"
          height={160}
          width={160}
        />
      </div>
    {/if}
  {:else}
    <p class="text-3xl font-medium tracking-wide text-center text-zinc-500">
      Nothing found :(
    </p>
  {/if}
  {#if curIcon}
    <Usage />
  {/if}
</div>
