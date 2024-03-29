<script>
  import Icon from "@iconify/svelte";
  import { LottiePlayer } from "@lottiefiles/svelte-lottie-player";
  import Usage from "./Usage.svelte";
  import { currentIcon, currentIconSet } from "./stores";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  export let iconSet;

  let curIcon = null;

  currentIcon.subscribe((value) => {
    curIcon = value;
  });

  let iconlist = null;
  let version = "";
  let name = "";
  let iconCount = 0;
  let tags = [];
  let currentTag = null;
  let searchTerm = null;
  let filteredIconList = null;
  let isList = false;

  async function getIconSet() {
    const res = await fetch(
      `https://cors-anywhere.thecodeblog.net/icon-sets.iconify.design/assets/collection.${iconSet}.js`
    );
    let data = await res.text();
    data = JSON.parse(data.match(/=(.+);/)[1]);
    iconlist = data.icons;
    version = data.info.version || "1.0.0";
    name = data.info.name;
    iconCount = data.info.total;
    tags = data.tags || [];
    currentIconSet.set(name);
    filteredIconList = iconlist;
  }

  getIconSet();

  const setCurrentTag = (tag) => {
    if (currentTag !== tag) {
      currentTag = tag;
      filteredIconList = iconlist.filter((icon) => {
        return (
          icon.tags.includes(tag) &&
          (icon.name || icon)
            .toLowerCase()
            .includes(
              document.getElementById("icon-search").value.toLowerCase()
            )
        );
      });
    } else {
      currentTag = null;
      filteredIconList = iconlist.filter((icon) => {
        return (icon.name || icon)
          .toLowerCase()
          .includes(document.getElementById("icon-search").value.toLowerCase());
      });
    }
  };

  const inputOnChange = function (e) {
    filteredIconList = iconlist.filter((icon) => {
      return (
        (icon.name || icon)
          .toLowerCase()
          .includes(e.target.value.toLowerCase()) &&
        (currentTag ? icon.tags.includes(currentTag) : true)
      );
    });
  };

  onMount(() => {
    document.body.onkeydown = (e) => {
      if (e.key == "/") {
        e.preventDefault();
        document.getElementById("icon-search").focus();
      }
    };
  });

  const toggleView = (state) => {
    isList = state;
  };
</script>

<div class="flex flex-1 flex-col w-full px-12 md:px-24">
  <h1
    class="mt-12 mb-6 text-3xl font-semibold tracking-wide text-center flex flex-col items-center gap-1 sm:inline"
  >
    {name}<span class="sm:ml-2 text-base">v{version}</span>
  </h1>
  <div
    class="inline-flex items-center w-full p-4 mx-auto mb-6 overflow-hidden border-2 border-stone-600 gap-4"
  >
    <Icon icon="uil:search" class="flex-shrink-0" width="24" height="24" />
    <input
      bind:value={searchTerm}
      on:input={inputOnChange}
      type="text"
      id="icon-search"
      class="w-full tracking-wide placeholder-stone-600 bg-transparent"
      placeholder="Search {iconCount} icons (Press '/' to focus)"
    />
    <button on:click={() => toggleView(false)} class="hidden ssssm:block">
      <Icon
        icon="carbon:grid"
        class="w-6 h-6 {isList
          ? 'stroke-stone-400 text-stone-400'
          : 'stroke-stone-600 text-stone-600'} stroke-[0.6px]"
      />
    </button>
    <button on:click={() => toggleView(true)} class="hidden ssssm:block">
      <Icon
        icon="carbon:list-boxes"
        class="w-6 h-6 {!isList
          ? 'stroke-stone-400 text-stone-400'
          : 'stroke-stone-600 text-stone-600'} stroke-[0.6px]"
      />
    </button>
  </div>
  <div class="ssssm:hidden">
    <p class="mb-2">View Options</p>
    <div class="flex gap-2 mb-6">
      <button
        on:click={() => toggleView(false)}
        class="border-2 border-stone-600 flex-1 py-4 flex items-center justify-center {!isList &&
          'bg-stone-600 text-stone-100'}"
      >
        <Icon
          icon="carbon:grid"
          class="w-6 h-6 stroke-[0.6px] stroke-stone-600 {!isList &&
            'bg-stone-600 text-stone-100 stroke-stone-100'}"
        />
      </button>
      <button
        on:click={() => toggleView(true)}
        class="border-2 border-stone-600 flex-1 py-4 flex items-center justify-center {isList &&
          'bg-stone-600 text-stone-100'}"
      >
        <Icon
          icon="carbon:list-boxes"
          class="w-6 h-6 stroke-[0.6px] stroke-stone-600 {isList &&
            'bg-stone-600 text-stone-100 stroke-stone-100'}"
        />
      </button>
    </div>
  </div>
  {#if tags.length}
    <div class="flex flex-wrap justify-center mb-12 gap-2">
      {#each tags.sort() as tag}
        {#if tag}
          <button
            on:click={() => setCurrentTag(tag)}
            class="{currentTag === tag
              ? `bg-stone-600 text-stone-200`
              : `border-2 border-stone-600 `} whitespace-nowrap h-11 flex transition-all items-center justify-center font-medium text-sm px-8 flex-grow md:flex-grow-0"
            >{tag}</button
          >
        {/if}
      {/each}
    </div>
  {/if}
  <div class="relative">
    {#if filteredIconList === null || filteredIconList.length > 0}
      {#if filteredIconList}
        {#if !isList}
          <div
            in:fade
            out:fade
            class="w-full pb-8 grid gap-3"
            style="grid-template-columns: repeat(auto-fill, minmax(120px, 1fr))"
          >
            {#each filteredIconList as icon}
              <div
                on:click={() => {
                  currentIcon.set(`${iconSet}:${icon.name || icon}`);
                }}
                class="flex flex-col items-center cursor-pointer transition-all hover:bg-stone-200 p-4"
              >
                <Icon
                  icon={`${iconSet}:${icon.name || icon}`}
                  width="32"
                  height="32"
                  class=""
                />
                <p
                  class="font-medium tracking-wide text-center  mt-4 -mb-0.5"
                  style="font-size: 0.7rem"
                >
                  {(icon.name || icon).replace(/-/g, " ")}
                </p>
              </div>
            {/each}
          </div>
        {:else}
          <div
            in:fade
            out:fade
            class="w-full pb-8 grid gap-3 gap-x-6"
            style="grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))"
          >
            {#each filteredIconList as icon}
              <div
                on:click={() => {
                  currentIcon.set(`${iconSet}:${icon.name || icon}`);
                }}
                class="flex items-center cursor-pointer transition-all hover:bg-stone-200 py-3 px-2"
              >
                <Icon
                  icon={`${iconSet}:${icon.name || icon}`}
                  width="24"
                  height="24"
                  class=" flex-shrink-0"
                />
                <p
                  class="font-medium text-sm tracking-wide  truncate ml-3 -mb-0.5"
                >
                  {icon.name || icon}
                </p>
              </div>
            {/each}
          </div>
        {/if}
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
      <p class="text-xl font-medium tracking-wide text-center ">
        Nothing found :(
      </p>
    {/if}
  </div>
  {#if curIcon}
    <Usage />
  {/if}
</div>
