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
        class="w-full mb-6 overflow-hidden shadow-md"
      >
        <div
          class="bg-{colors[
            index
          ]}-500 p-8 md:p-12 py-6 md:py-8 text-zinc-200 text-2xl md:text-3xl font-medium tracking-wide"
        >
          {name}
        </div>
        <div class="flex-wrap p-4 md:p-12 grid gap-4 icon-list">
          {#each iconSets as iconSet}
            <div
              class="flex flex-col sssm:flex-row flex-grow overflow-hidden  shadow-md w-full"
            >
              <div
                class="flex flex-col flex-shrink-0 text-2xl font-medium tracking-wide text-zinc-200 w-full sssm:w-36"
              >
                <div
                  class="bg-{colors[
                    index
                  ]}-400 text-zinc-200 w-full h-full flex items-center justify-center px-4 py-3 gap-5 sssm:gap-3"
                >
                  {#each iconSet.samples as sampleIcon}
                    <Icon
                      icon={`${iconSet.prefix}:${sampleIcon}`}
                      class="w-9 h-9 sssm:w-8 sssm:h-8"
                    />
                  {/each}
                </div>
                <div
                  class="w-full h-full bg-{colors[
                    index
                  ]}-500 flex px-4 py-2 sssm:py-0 justify-between items-center text-zinc-200"
                  style="font-size: 1.2rem"
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
                  class="text-{colors[
                    index % 7
                  ]}-400 w-11/12 whitespace-nowrap overflow-ellipsis overflow-hidden tracking-wide text-2xl font-medium"
                  >{iconSet.name}</a
                >
                <p
                  class="mt-3 overflow-hidden text-lg tracking-wide text-zinc-400 whitespace-nowrap overflow-ellipsis w-11/12"
                >
                  By <a
                    target="_blank"
                    href={iconSet.author.url || "/"}
                    class="text-{colors[index % 7]}-400">{iconSet.author.name}</a
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
