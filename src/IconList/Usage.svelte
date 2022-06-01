<script>
  import Icon from "@iconify/svelte";
  import { fade, slide } from "svelte/transition";
  import { currentIcon, currentIconSet } from "./stores";

  import { isColor } from "./utils";
  import CopyToClipboard from "svelte-copy-to-clipboard";

  import Ember from "./docs/Ember.svelte";
  import SVGFramework from "./docs/HTML/SVGFrameworks.svelte";
  import CSS from "./docs/HTML/CSS.svelte";
  import React from "./docs/React/React.svelte";
  import ReactOffline from "./docs/React/ReactOffline.svelte";
  import Svelte from "./docs/Svelte/Svelte.svelte";
  import SvelteOffline from "./docs/Svelte/SvelteOffline.svelte";
  import Vue2 from "./docs/Vue/Vue2.svelte";
  import Vue3 from "./docs/Vue/Vue3.svelte";
  import Vue2Offline from "./docs/Vue/Vue2Offline.svelte";
  import Vue3Offline from "./docs/Vue/Vue3Offline.svelte";
  import SVG from "./docs/SVG/SVG.svelte";
  import SVGURI from "./docs/SVG/SVGURI.svelte";
  import SVGWithRectangle from "./docs/SVG/SVGWithRectangle.svelte";

  let curIcon = null;
  let curIconSet = null;
  let color = "";
  let height;
  let width = (height = "");
  let flipVert = false;
  let flipHoriz = false;
  let display = "block";
  let rotate = 0;
  let currentTab = 0;
  let currentSubTab = 0;
  let isCopied = false;

  let tabs = [
    {
      name: "HTML",
      icon: "icomoon-free:html-five",
      subtabs: [
        ["SVG Frameworks", SVGFramework],
        ["CSS", CSS],
      ],
    },
    {
      name: "React",
      icon: "akar-icons:react-fill",
      subtabs: [
        ["React", React],
        ["React (offline)", ReactOffline],
      ],
    },
    {
      name: "Vue",
      icon: "akar-icons:vue-fill",
      subtabs: [
        ["Vue3", Vue3],
        ["Vue2", Vue2],
        ["Vue3 (offline)", Vue3Offline],
        ["Vue2 (offline)", Vue2Offline],
      ],
    },
    {
      name: "Svelte",
      icon: "cib:svelte",
      subtabs: [
        ["Svelte", Svelte],
        ["Svelte (offline)", SvelteOffline],
      ],
    },
    {
      name: "Ember",
      icon: "file-icons:ember",
      subTab: Ember,
    },
    {
      name: "SVG",
      icon: "mdi:svg",
      subtabs: [
        ["SVG", SVG],
        ["SVG with viewBox rectangle", SVGWithRectangle],
        ["SVG as data: URI", SVGURI],
      ],
    },
  ];

  currentIcon.subscribe((value) => {
    curIcon = value;
  });
  currentIconSet.subscribe((value) => {
    curIconSet = value;
  });

  $: document.body.style.overflow = curIcon ? "hidden" : "auto";
</script>

<div
  in:fade
  out:fade
  class="fixed z-[60] w-full h-screen flex items-center justify-center top-0 left-0 bg-black bg-opacity-20"
>
  <div
    in:slide
    out:slide
    class="w-full gap-8 flex flex-col md:flex-row overflow-auto md:overflow-hidden relative bg-stone-100 m-4 ssssm:m-12 700:m-24"
    style="height: calc(100vh - 8rem)"
  >
    <button
      on:click={() => currentIcon.set(null)}
      class="absolute right-6 top-6"
      ><Icon icon="heroicons-solid:x" class="" width="24" height="24" /></button
    >
    <div
      class="pt-12 m-8 mt-16 md:mt-8 pb-24 relative md:w-2/5 flex-shrink-0 flex items-center justify-center border-2 border-stone-600"
    >
      {#if display === "inline"}
        <p class=" tracking-wide text-lg p-12 text-center">
          Text with icon sample
          <Icon
            icon={curIcon}
            class="transform inline rotate-{rotate} transition-all"
            style="{flipVert && '--tw-rotate-x: 180deg'};{flipHoriz &&
              '--tw-rotate-y: 180deg'}; color: {isColor(color)
              ? color
              : 'currentColor'}; width: {width &&
            !isNaN(width) &&
            parseInt(width) <= 256
              ? `${width}px`
              : '1.5rem'}; height: {height &&
            !isNaN(height) &&
            parseInt(height) <= 256
              ? `${height}px`
              : '1.5rem'}"
          />
          to show icon alignment in text.
        </p>
        <p
          class="font-medium tracking-wide absolute bottom-1 left-1/2 transform -translate-x-1/2 text-center w-full p-8 break-all"
        >
          Inline text
        </p>
      {:else}
        <Icon
          icon={curIcon}
          class="transform rotate-{rotate} transition-all"
          style="{flipVert && '--tw-rotate-x: 180deg'};{flipHoriz &&
            '--tw-rotate-y: 180deg'}; color: {isColor(color)
            ? color
            : 'currentColor'}; width: {width &&
          !isNaN(width) &&
          parseInt(width) <= 256
            ? `${width}px`
            : '172px'}; height: {height &&
          !isNaN(height) &&
          parseInt(height) <= 256
            ? `${height}px`
            : '172px'}"
        />
        <p
          class="font-medium tracking-wide absolute bottom-1 left-1/2 transform -translate-x-1/2 text-center w-full p-8 break-all"
        >
          {width && !isNaN(width) ? width : "24"} x {height && !isNaN(height)
            ? height
            : "24"}
        </p>
      {/if}
    </div>
    <div class="overflow-visible md:overflow-auto p-8 md:pl-0 pt-0 md:pt-8">
      <p class=" font-medium tracking-wide mb-2">{curIconSet}</p>
      <div class="flex gap-4 items-center">
        {#if curIcon}
          <h2 class="font-semibold break-all text-3xl ssm:text-4xl tracking-wide -mt-1">
            {curIcon}
          </h2>
        {/if}
        <CopyToClipboard
          text={curIcon}
          on:copy={() => {
            isCopied = true;
            setTimeout(() => {
              isCopied = false;
            }, 1000);
          }}
          let:copy
        >
          <button class="relative w-8 h-8" on:click={copy}>
            {#if !isCopied}
              <div
                class="absolute top-0 left-0"
                transition:fade={{ duration: 150 }}
              >
                <Icon
                  icon="ic:round-content-copy"
                  width="32"
                  height="32"
                  class="text-stone-400"
                />
              </div>
            {:else}
              <svg
                transition:fade={{ duration: 150 }}
                xmlns="http://www.w3.org/2000/svg"
                class="text-stone-400 absolute top-0 left-0"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                width="2.4rem"
                height="2.4rem"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
                ><path
                  d="M18.71 7.21a1 1 0 0 0-1.42 0l-7.45 7.46l-3.13-3.14A1 1 0 1 0 5.29 13l3.84 3.84a1 1 0 0 0 1.42 0l8.16-8.16a1 1 0 0 0 0-1.47z"
                  fill="currentColor"
                /></svg
              >
            {/if}
          </button>
        </CopyToClipboard>
      </div>
      <div class="flex gap-6 mt-8 flex-wrap">
        <div
          class="p-4 flex flex-grow xl:flex-grow-0 gap-4 border-stone-600 border-2 relative"
        >
          <div class="absolute -top-[1.3rem] left-4 bg-stone-100 p-2">
            <p class="tracking-wide text-sm md:text-base font-medium">Color</p>
          </div>
          <div class="flex flex-grow gap-2 items-center">
            <Icon
              icon="ic:baseline-water-drop"
              width="28"
              height="28"
              style="color: {isColor(color) ? color : 'currentColor'}"
            />
            <input
              bind:value={color}
              size="12"
              type="text"
              class=" bg-transparent font-medium tracking-wide placeholder-stone-300"
              placeholder="#000000"
              autocomplete="off"
            />
          </div>
        </div>
        <div
          class="p-4 py-2 flex flex-grow flex-wrap xl:flex-grow-0 gap-3 border-stone-600 border-2 relative"
        >
          <div
            class="absolute left-4 bg-stone-100 p-2 h-4 flex items-center"
            style="top: -0.6rem"
          >
            <p class="tracking-wide  text-sm md:text-base font-medium">Size</p>
          </div>
          <div class="flex flex-grow gap-2 items-center  ">
            <Icon
              icon="fluent:auto-fit-width-20-filled"
              width="28"
              height="28"
              class=""
            />
            <input
              size="5"
              type="text"
              class=" bg-transparent font-medium tracking-wide placeholder-stone-300"
              bind:value={width}
              placeholder="24"
              autocomplete="off"
            />
          </div>
          <div class="flex flex-grow gap-2 p-3 items-center  ">
            <Icon
              icon="fluent:auto-fit-height-20-filled"
              width="28"
              height="28"
              class=""
            />
            <input
              size="5"
              type="text"
              class=" bg-transparent font-medium tracking-wide placeholder-stone-300"
              bind:value={height}
              placeholder="24"
              autocomplete="off"
            />
          </div>
        </div>
        <div
          class="p-4 flex flex-grow flex-wrap xl:flex-grow-0 gap-3 border-stone-600 border-2  relative"
        >
          <div
            class="absolute left-4 bg-stone-100 p-2 h-4 flex items-center"
            style="top: -0.6rem"
          >
            <p class="tracking-wide  text-sm md:text-base font-medium">Flip</p>
          </div>
          <button
            on:click={() => (flipHoriz = !flipHoriz)}
            class="flex flex-grow relative z-10 gap-2 p-3 items-center {flipHoriz
              ? 'bg-stone-600'
              : ''} border-2 border-stone-600 transition-all"
          >
            <Icon
              icon="mdi:flip-horizontal"
              width="28"
              height="28"
              class={flipHoriz ? "active" : ""}
            />
            <p
              class="{flipHoriz
                ? 'text-stone-100'
                : ''} font-medium tracking-wide"
            >
              Horizontal
            </p>
          </button>
          <button
            on:click={() => (flipVert = !flipVert)}
            class="flex flex-grow relative z-10 gap-2 p-3 items-center {flipVert
              ? 'bg-stone-600'
              : ''} border-2 border-stone-600 transition-all"
          >
            <Icon
              icon="mdi:flip-vertical"
              width="28"
              height="28"
              class={flipVert ? "active" : ""}
            />
            <p
              class="{flipVert
                ? 'text-stone-100'
                : ''} font-medium tracking-wide"
            >
              Vertical
            </p>
          </button>
        </div>
        <div
          class="p-4 flex flex-grow flex-wrap xl:flex-grow-0 gap-3 border-stone-600 border-2  relative"
        >
          <div
            class="absolute left-4 bg-stone-100 p-2 h-4 flex items-center"
            style="top: -0.6rem"
          >
            <p class="tracking-wide  text-base font-medium">Display</p>
          </div>
          <button
            on:click={() => (display = "block")}
            class="flex flex-grow relative z-10 gap-2 p-3 items-center {display ===
            'block'
              ? 'bg-stone-600'
              : ''} border-2 border-stone-600 transition-all"
          >
            <Icon
              icon="mdi:flip-horizontal"
              width="28"
              height="28"
              class={display === "block" ? "active" : ""}
            />
            <p
              class="{display === 'block'
                ? 'text-stone-100'
                : ''} font-medium tracking-wide"
            >
              Block
            </p>
          </button>
          <button
            on:click={() => (display = "inline")}
            class="flex flex-grow relative z-10 gap-2 p-3 items-center {display ===
            'inline'
              ? 'bg-stone-600'
              : ''} border-2 border-stone-600 transition-all"
          >
            <Icon
              icon="mdi:flip-vertical"
              width="28"
              height="28"
              class={display === "inline" ? "active" : ""}
            />
            <p
              class="{display === 'inline'
                ? 'text-stone-100'
                : ''} font-medium tracking-wide"
            >
              Inline
            </p>
          </button>
        </div>
        <div
          class="p-4 flex flex-grow flex-wrap xl:flex-grow-0 gap-3 border-stone-600 border-2  relative"
        >
          <div
            class="absolute left-4 bg-stone-100 p-2 h-4 flex items-center"
            style="top: -0.6rem"
          >
            <p class="tracking-wide text-base font-medium">Rotate</p>
          </div>
          <button
            on:click={() => (rotate = 0)}
            class="flex flex-grow relative z-10 gap-2 py-3 px-4 items-center {rotate ==
            0
              ? 'bg-stone-600'
              : ''} border-2 border-stone-600 transition-all"
          >
            <svg
              width="6"
              height="6"
              viewBox="0 0 6 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class={rotate === 0 ? "active" : ""}
            >
              <circle cx="3" cy="3" r="3" fill="currentColor" />
            </svg>
            <p
              class="{rotate === 0
                ? 'text-stone-100'
                : ''} font-medium tracking-wide"
            >
              0°
            </p>
          </button>
          <button
            on:click={() => (rotate = 90)}
            class="flex flex-grow relative z-10 gap-2 p-3 items-center {rotate ===
            90
              ? 'bg-stone-600'
              : ''} border-2 border-stone-600 transition-all"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class={rotate === 90 ? "active-stroke" : ""}
            >
              <path
                d="M12 6C13.5913 6 15.1174 6.63214 16.2426 7.75736C17.3679 8.88258 18 10.4087 18 12V14.5"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M18 15L21 12"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M18 15L15 12"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            <p
              class="{rotate === 90
                ? 'text-stone-100'
                : ''} font-medium tracking-wide"
            >
              90°
            </p>
          </button>
          <button
            on:click={() => (rotate = 180)}
            class="flex flex-grow relative z-10 gap-2 p-3 items-center {rotate ===
            180
              ? 'bg-stone-600'
              : ''} border-2 border-stone-600 transition-all"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class={rotate === 180 ? "active-stroke" : ""}
            >
              <path
                d="M11.998 6C13.5893 6 15.1155 6.63214 16.2407 7.75736C17.3659 8.88258 17.998 10.4087 17.998 12C17.998 13.5913 17.3659 15.1174 16.2407 16.2426C15.1155 17.3679 13.5893 18 11.998 18H9.49805"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M9 18L12 21"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M9 18L12 15"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            <p
              class="{rotate === 180
                ? 'text-stone-100'
                : ''} font-medium tracking-wide"
            >
              180°
            </p>
          </button>
          <button
            on:click={() => (rotate = 270)}
            class="flex flex-grow relative z-10 gap-2 p-3 items-center {rotate ===
            270
              ? 'bg-stone-600'
              : ''} border-2 border-stone-600 transition-all"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class={rotate === 270 ? "active-stroke" : ""}
            >
              <path
                d="M13.8 5.00002C15.224 5.00002 16.6161 5.42229 17.8001 6.21344C18.9841 7.00459 19.907 8.12907 20.4519 9.4447C20.9969 10.7603 21.1395 12.208 20.8617 13.6047C20.5838 15.0013 19.8981 16.2843 18.8912 17.2912C17.8842 18.2981 16.6013 18.9839 15.2046 19.2617C13.808 19.5395 12.3603 19.3969 11.0447 18.852C9.72905 18.307 8.60456 17.3842 7.81342 16.2001C7.02227 15.0161 6.6 13.624 6.6 12.2V9.20002"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M6.6001 8.60007L3.0001 12.2001"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M6.59995 8.60007L10.2 12.2001"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            <p
              class="{rotate === 270
                ? 'text-stone-100'
                : ''} font-medium tracking-wide"
            >
              270°
            </p>
          </button>
        </div>
      </div>
      <div class="mt-12">
        <div class="flex flex-wrap gap-2">
          {#each tabs as tab, index}
            <button
              on:click={() => {
                currentTab = index;
                currentSubTab = 0;
              }}
              class="transition-all flex gap-2 {currentTab === index
                ? 'font-medium bg-stone-600 text-stone-100'
                : ''} border-2 border-stone-600 tracking-wide px-3 items-center justify-center py-2"
            >
              <Icon icon={tab.icon} width="20" height="20" class="{currentTab == index
                ? 'active'
                : ''}" />
              <span class="-mt-0.5 {currentTab == index
                ? 'text-stone-100'
                : ''}">{tab.name}</span>
            </button>
          {/each}
        </div>
        {#if tabs[currentTab].subtabs}
          <div class="flex flex-wrap gap-2 mt-4">
            {#each tabs[currentTab].subtabs as [name], index}
              <button
                on:click={() => {
                  currentSubTab = index;
                }}
                class="transition-all flex gap-2 {currentSubTab == index
                  ? 'font-medium bg-stone-600 text-stone-100'
                  : ''} border-2 border-stone-600 tracking-wide px-3 items-center justify-center py-2"
              >
                <span class="-mt-0.5 {currentSubTab == index
                  ? 'text-stone-100'
                  : ''}">{name}</span>
              </button>
            {/each}
          </div>
        {/if}
        <div class="mt-8">
          <svelte:component
            this={tabs[currentTab].subTab ||
              tabs[currentTab].subtabs[currentSubTab][1]}
            icon={curIcon}
            {color}
            {width}
            {height}
            flipHorizontal={flipHoriz}
            flipVertical={flipVert}
            {rotate}
            {display}
          />
        </div>
      </div>
    </div>
  </div>
</div>

<style global lang="scss">
  .transform {
    --tw-rotate-x: 0;
    --tw-rotate-y: 0;

    transform: translateX(var(--tw-translate-x))
      translateY(var(--tw-translate-y)) rotate(var(--tw-rotate))
      skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
      scaleY(var(--tw-scale-y)) rotateX(var(--tw-rotate-x))
      rotateY(var(--tw-rotate-y));
  }

  .rotate-90 {
    --tw-rotate: 90deg !important;
  }

  .rotate-180 {
    --tw-rotate: 180deg !important;
  }

  .rotate-270 {
    --tw-rotate: 270deg !important;
  }

  .-translate-x-1\/2 {
    --tw-translate-x: -50%;
  }

  .active path, .active circle {
    @apply fill-stone-100;
  }

  .active-stroke path {
    @apply stroke-stone-100;
  }
</style>
