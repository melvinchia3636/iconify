<script>
  import Icon from "@iconify/svelte";
  import { LottiePlayer } from "@lottiefiles/svelte-lottie-player";
  import {
    currentIcon,
    currentIconSet as curIconSet,
  } from "../IconList/stores";
  import Usage from "../IconList/Usage.svelte";

  const colors = {
    General: "rose",
    Emoji: "orange",
    "Brands / Social": "emerald",
    "Maps / Flags": "sky",
    Thematic: "purple",
    "Archive / Unmaintained": "gray",
    Other: "gray",
  };

  let iconlist = null;
  let iconSets = null;
  const urlParams = new URLSearchParams(window.location.search);
  const searchTerm = urlParams.get("q");
  let currentIconSet = null;
  let filteredIconList = null;

  let curIcon = null;

  currentIcon.subscribe((value) => {
    curIcon = value;
  });

  async function getIconSet() {
    const res = await fetch(
      `https://cors-anywhere.thecodeblog.net/api.iconify.design/search?query=${searchTerm}&limit=9999`
    );
    const data = await res.json();
    if (data.icons.length) {
      iconlist = data.icons;
    } else {
      iconlist = [];
    }
    iconSets = data.collections;
    filteredIconList = iconlist;
  }

  getIconSet(null, true);

  document.addEventListener("keypress", (e) => {
    if (e.code === "Slash") {
      document.querySelector("input").focus();
      e.preventDefault();
    }
  });

  const setCurrentIconSet = (iconSet) => {
    if (currentIconSet !== iconSet) {
      currentIconSet = iconSet;
      filteredIconList = iconlist.filter(
        (e) => e.split(":").shift() === iconSet
      );
    } else {
      currentIconSet = null;
      filteredIconList = iconlist;
    }
  };
</script>

<div class="flex-1 px-12 md:px-24">
  <h1
    class="mb-6 text-3xl font-semibold tracking-wide text-center text-zinc-600  sm:mt-12"
  >
    Search results for "{searchTerm}"
  </h1>
  {#if iconSets}
    <div class="flex flex-wrap justify-center mb-12 gap-2">
      {#each Object.entries(iconSets) as [name, iconSet]}
        <button
          on:click={() => setCurrentIconSet(name)}
          class="{currentIconSet === name
            ? `bg-stone-600`
            : `text-stone-600`} border-2 border-stone-600 whitespace-nowrap h-11 flex transition-all items-center justify-center text-stone-600 font-medium px-4 flex-grow sssm:px-8 pb-0.5  "
          >{iconSet.name}</button
        >
      {/each}
    </div>
  {/if}
  {#if filteredIconList === null || filteredIconList.length > 0}
    {#if filteredIconList}
      <div
        class="w-full pb-8 grid gap-4"
        style="grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))"
      >
        {#each filteredIconList as icon}
          <div
            on:click={() => {
              currentIcon.set(icon);
            }}
            class="flex flex-col items-center cursor-pointer transition-all hover:bg-stone-200 dark:hover:bg-opacity-60 p-4"
          >
            <Icon
              icon={icon}
              width="32"
              height="32"
              class="text-stone-600"
            />
            <p
              class="font-medium text-xs tracking-wide text-center text-stone-600 mt-4 -mb-0.5"
            >
              {icon}
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
