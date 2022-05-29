<script>
  import Icon from "@iconify/svelte";
  import { slide } from "svelte/transition";
  import { count } from "./stores";
  import { collections } from "@iconify/collections";

  let iconSets = {
    General: [],
    "Brands / Social": [],
    Emoji: [],
    "Maps / Flags": [],
    Thematic: [],
    "Archive / Unmaintained": [],
    Other: [],
  };

  for (let [key, value] of Object.entries(collections)) {
    value.prefix = key;
    iconSets[value.category || "Other"] = [
      ...iconSets[value.category || "Other"],
      value,
    ];
  }

  count.set(Object.values(iconSets).flat().map(e => e.total).reduce((a, b) => a+b));

  const colors = ["rose", "orange", "emerald", "sky", "purple", "gray", "teal"];

  export let selectedCategory = null;
  export let iconFilterTerm;
</script>

<div class="flex flex-col items-center w-full mt-8">
  <div class="flex flex-col w-full pt-12">
    {#each Object.entries(iconSets) as [name, iconSets], index}
      {#if (selectedCategory === null || selectedCategory === index) && iconSets.filter((iconSet) => !iconFilterTerm.trim() || iconSet.name
              .toLowerCase()
              .includes(iconFilterTerm.trim().toLowerCase())).length}
        <div
          in:slide
          out:slide
          class="w-full mb-6 overflow-hidden rounded-md shadow-md dark:bg-zinc-700 dark:bg-opacity-20"
        >
          <div
            class="bg-yellow-400 p-8 md:p-12 py-6 md:py-8 text-zinc-800 text-2xl font-medium tracking-wide"
          >
            {name}
          </div>
          <div class="flex-wrap p-4 md:p-12 grid gap-4 icon-list">
            {#each iconSets as iconSet}
              {#if !iconFilterTerm.trim() || iconSet.name
                  .toLowerCase()
                  .includes(iconFilterTerm.trim().toLowerCase())}
                <div
                  class="flex flex-col sssm:flex-row flex-grow overflow-hidden shadow-md w-full dark:bg-zinc-700 dark:bg-opacity-30 rounded-md"
                >
                  <div
                    class="flex flex-col flex-shrink-0 font-medium tracking-wide text-zinc-800 w-full sssm:w-36"
                  >
                    <div
                      class="bg-yellow-400 text-zinc-800 w-full h-full flex items-center justify-center px-4 py-3 gap-5 sssm:gap-3"
                    >
                      {#each iconSet.samples as sampleIcon}
                        <Icon
                          icon={`${iconSet.prefix}:${sampleIcon}`}
                          class="w-9 h-9 sssm:w-8 sssm:h-8"
                        />
                      {/each}
                    </div>
                    <div
                      class="w-full h-full bg-yellow-500 flex px-4 py-2 sssm:py-0 justify-between items-center text-zinc-800"
                    >
                      <p>{iconSet.total}</p>
                      {#if iconSet.height}
                        <div class="flex items-center">
                          <Icon
                            icon="icon-park-outline:auto-height-one"
                            width="24"
                            height="24"
                          />
                          <p class="ml-1">{iconSet.height}</p>
                        </div>
                      {/if}
                    </div>
                  </div>
                  <div class="flex flex-col justify-between px-4 py-3 w-full">
                    <a
                      href="./icon-set/{iconSet.prefix}"
                      class="text-yellow-400 w-11/12 whitespace-nowrap overflow-ellipsis overflow-hidden tracking-wide text-xl font-medium"
                      >{iconSet.name}</a
                    >
                    <p
                      class="mt-3 overflow-hidden tracking-wide text-zinc-400 whitespace-nowrap overflow-ellipsis w-11/12"
                    >
                      By <a
                        target="_blank"
                        href={iconSet.author.url || "/"}
                        class="text-yellow-400">{iconSet.author.name}</a
                      >
                    </p>
                  </div>
                </div>
              {/if}
            {/each}
          </div>
        </div>
      {/if}
    {/each}
  </div>
</div>

<style lang="scss">
  .icon-list {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  }
  @media (min-width: 640px) {
    .icon-list {
      grid-template-columns: repeat(auto-fit, minmax(480px, 1fr));
    }
  }
</style>
