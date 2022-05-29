<script>
  import Icon from "@iconify/svelte";
  import { slide } from "svelte/transition";
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

  const colors = ["rose", "orange", "emerald", "sky", "purple", "gray", "teal"];
</script>

<div class="flex flex-col items-center w-full mt-8 px-0 md:px-16">
  <div class="flex flex-col w-full pt-12">
    {#each Object.entries(iconSets) as [name, iconSets], index}
      <div
        in:slide
        out:slide
        class="w-full mb-6 overflow-hidden border-2 border-stone-600"
      >
        <div
          class="bg-stone-600 p-8 text-stone-100 text-2xl font-medium tracking-wide"
        >
          {name}
        </div>
        <div class="flex-wrap p-4 md:p-12 grid gap-4 icon-list">
          {#each iconSets as iconSet}
            <div
              class="flex flex-col sssm:flex-row flex-grow overflow-hidden w-full border-2 border-stone-600"
            >
              <div
                class="flex flex-col flex-shrink-0 border-r-2 border-stone-600 font-medium tracking-wide text-stone-800 w-full sssm:w-36"
              >
                <div
                  class="w-full h-full flex items-center justify-center px-4 py-3 gap-5 sssm:gap-3 text-stone-600"
                >
                  {#each iconSet.samples as sampleIcon}
                    <Icon
                      icon={`${iconSet.prefix}:${sampleIcon}`}
                      class="w-9 h-9 sssm:w-8 sssm:h-8"
                    />
                  {/each}
                </div>
                <div
                  class="w-full h-full border-t-2 border-stone-600 flex p-4 py-4 sssm:py-0 justify-between items-center text-stone-600 text-smr"
                >
                  <p>{iconSet.total}</p>
                  {#if iconSet.height}
                    <div class="flex items-center">
                      <Icon
                        icon="icon-park-outline:auto-height-one"
                        width="20"
                        height="20"
                      />
                      <p class="ml-1">{iconSet.height}</p>
                    </div>
                  {/if}
                </div>
              </div>
              <div class="flex flex-col justify-between px-4 py-3 w-full">
                <a
                  href="./icon-set/{iconSet.prefix}"
                  class="text-stone-600 w-11/12 whitespace-nowrap overflow-ellipsis overflow-hidden tracking-wide text-xl font-medium"
                  >{iconSet.name}</a
                >
                <p
                  class="mt-3 overflow-hidden tracking-wide text-stone-600 whitespace-nowrap overflow-ellipsis w-11/12"
                >
                  By <a
                    target="_blank"
                    href={iconSet.author.url || "/"}
                    class="underline">{iconSet.author.name}</a
                  >
                </p>
              </div>
            </div>
          {/each}
        </div>
      </div>
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
