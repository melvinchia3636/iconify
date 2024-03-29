<script>
  import Paragraph from "../Utils/Paragraph.svelte";
  import Icon from "@iconify/svelte";

  import { fade } from "svelte/transition";

  import TypedJs from "@loscrackitos/svelte-typed-js";

  const icon_sets = [
    ["Emoji One", "emojione-v1:speaker-high-volume", "4500+"],
    ["Noto Emoji", "noto:anchor", "3000+"],
  ];

  const svg_examples = [
    `<i class="iconify" data-icon="mdi:food-apple" style="font-size: 64px; color: #3C8A3F;"></i>`,
    `<span class="iconify" data-icon="flat-color-icons:alarm-clock"></span>`,
    `<i class="iconify" data-icon="noto:waving-hand"></i>`,
    `<p style="font-size: 24px;">Inline cat <span data-icon="emojione-v1:cat-face" class="iconify" data-inline="true"></span> emoji!</p>`,
    `<span class="iconify" data-icon="mdi:alert-octagon" data-icon-inline="false" style="font-size: 48px; color: #c41953;"></span>`,
  ];

  let current_icon_set = 0;
  let current_svg_example = 0;
  let last_current_svg_example = 0;

  const prevIcon = () => {
    current_icon_set > 0 && current_icon_set--;
  };

  const nextIcon = () => {
    current_icon_set < icon_sets.length - 1 && current_icon_set++;
  };

  const incrementSVGExampleCount = () => {
    current_svg_example = last_current_svg_example + 0;
    current_svg_example < svg_examples.length
      ? current_svg_example++
      : (current_svg_example = 1);
    last_current_svg_example = current_svg_example + 0;
    setTimeout(() => {
      current_svg_example = null;
    }, 2000);
  };
</script>

<div class="w-full px-0 md:px-16">
  <p class="font-medium text-base sm:text-xl mb-2 text-center tracking-wide">Feautres</p>
  <h2 class="text-3xl sssm:text-4xl sm:text-5xl font-semibold tracking-wide text-center mb-6 lg:mb-12">
    Many icons, one framework
  </h2>
  <Paragraph>
    <div class="">
      Iconify icons collection includes <a href="/icon-sets"
        >over 100,000 icons</a
      >
      from popular fonts and emoji sets: <a>Font Awesome 4 and 5</a>,
      <a>Material Design Icons</a>, <a>IonIcons</a>, <a>Vaadin Icons</a>,
      <a>Entypo+</a>
      and many many more. You can use them all on same page without loading
      multiple glyph fonts. Only icons used on page will be loaded instead of
      entire fonts.
      <br /><br />
      Icon designers can publish their own icon sets too. Iconify offers open source
      tools to clean up and publish custom icon sets.
    </div>
  </Paragraph>
  <div class="pt-20 w-full flex flex-col gap-24">
    <div class="flex flex-col sm:flex-row gap-12 items-center">
      <div class="w-full sm:w-1/2">
        <h3 class=" font-semibold tracking-wide text-3xl mb-6 sm:mb-8">
          Load on demand
        </h3>
        <Paragraph>
          <div>
            Fonts and other SVG frameworks load entire collections. Even if you
            are using only 10-20 icons, your visitors are forced to load them
            all.
            <br /><br />
            Iconify works differently. Very differently! Iconify loads only icons
            used on page. Icons are loaded as external resources that are cached
            by browser, not embedded into each page. No other SVG framework can do
            that.
            <br /><br />
            What is advantage of this unique approach to handling icons? You are
            no longer limited to one collection. You can use them all on same page
            without having to load megabytes of data!
            <br /><br />
            See <a href="/icon-sets">icon collections page</a> for list of available
            icons.
          </div>
        </Paragraph>
      </div>
      <div class="w-full sm:w-1/2">
        <div class="flex gap-6 flex-col relative">
          <div class="arrow" />
          <div class="border-2 border-stone-600 w-full flex flex-col">
            <h4
              class=" text-2xl md:text-3xl tracking-wide text-center font-medium m-6"
            >
              API
            </h4>
            <img src="./assets/iconsdemo.svg" alt="icons example w-full" />
            <p class=" text-lg tracking-wide text-center m-6">100,000+ icons</p>
          </div>
          <div class="border-2 border-stone-600 w-full">
            <div class="flex flex-wrap justify-center gap-2 m-6">
              <div
                class="px-3 py-2 border-2 border-stone-600  font-medium text-lg tracking-wide"
              >
                mdi:opacity
              </div>
              <div
                class="px-3 py-2 border-2 border-stone-600  font-medium text-lg tracking-wide"
              >
                ion:ios-cart
              </div>
              <div
                class="px-3 py-2 border-2 border-stone-600  font-medium text-lg tracking-wide"
              >
                mdi:flask
              </div>
              <div
                class="px-3 py-2 border-2 border-stone-600  font-medium text-lg tracking-wide"
              >
                noto:anchor
              </div>
              <div
                class="px-3 py-2 border-2 border-stone-600  font-medium text-lg tracking-wide"
              >
                fxemoji:alien
              </div>
            </div>
            <p class=" text-lg tracking-wide text-center m-6">
              Only icons used on page are downloaded
            </p>
          </div>
          <div class="border-2 border-stone-600 w-full">
            <h4
              class=" text-2xl md:text-3xl tracking-wide text-center font-medium m-6"
            >
              Browser
            </h4>
            <div class="w-full flex justify-center">
              <img
                src="./assets/iconsdemoresult.svg"
                alt="icons example"
                class="w-96"
              />
            </div>
            <p class=" text-lg tracking-wide text-center m-6">
              5 icons = ~2.5 Kb of data (~0.5 Kb per icon)
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col-reverse sm:flex-row gap-12 items-center">
      <div class="w-full sm:w-1/2">
        <div class="border-2 border-stone-600  py-4 px-5  mt-4 mb-4">
          <code class="break-words">
            &lt;<span style="all: inherit; color: rgb(49, 141, 225)"
              >script</span
            >
            src="<span
              style="all: inherit; color: rgb(225, 62, 49); text-decoration: underline; text-decoration-thickness: 1px;"
              >https://code.iconify.design/2/2.1.0/iconify.min.js</span
            >"&gt;&lt;/<span
              class=""
              style="all: inherit; color: rgb(49, 141, 225)">script</span
            >&gt;
            <br /><br />
            <TypedJs
              strings={svg_examples}
              contentType={null}
              backDelay={2000}
              typeSpeed={10}
              on:stringTyped={incrementSVGExampleCount}
              style="all: inherit;"
              loop={true}
            >
              <span class="typing" style="all: inherit;" />
            </TypedJs>
          </code>
        </div>
        <div class="w-full h-64 flex flex-col  border border-stone-600">
          <div class="flex items-center gap-2 p-3 border-b border-stone-600">
            <div class="w-3 h-3 rounded-full bg-rose-600" />
            <div class="w-3 h-3 rounded-full bg-orange-400" />
            <div class="w-3 h-3 rounded-full bg-green-600" />
          </div>
          <div class="w-full h-full items-center justify-center flex">
            {#if current_svg_example === 1}
              <div in:fade out:fade>
                <Icon
                  icon="mdi:food-apple"
                  width="64"
                  height="64"
                  color="#3C8A3F"
                />
              </div>
            {:else if current_svg_example === 2}
              <div in:fade out:fade>
                <Icon
                  icon="flat-color-icons:alarm-clock"
                  width="64"
                  height="64"
                />
              </div>
            {:else if current_svg_example === 3}
              <div in:fade out:fade>
                <Icon icon="noto:waving-hand" width="64" height="64" />
              </div>
            {:else if current_svg_example === 4}
              <div in:fade out:fade>
                <p style="font-size: 24px;" class="flex gap-2 items-center">
                  Inline cat <Icon
                    icon="emojione-v1:cat-face"
                    inline={true}
                    width="24"
                    height="24"
                  /> emoji!
                </p>
              </div>
            {:else if current_svg_example === 5}
              <div in:fade out:fade>
                <Icon
                  icon="mdi:alert-octagon"
                  width="64"
                  height="64"
                  color="#c41953"
                />
              </div>
            {/if}
          </div>
        </div>
      </div>
      <div class="w-full sm:w-1/2">
        <h3 to use class=" font-semibold tracking-wide text-3xl mb-6 sm:mb-8">
          Easy to use
        </h3>
        <Paragraph>
          <div>
            Syntax is similar to glyph fonts. Write a placeholder element,
            Iconify will replace it with SVG.
            <br /><br />
            Use span or i or any other HTML tag with class="iconify". If you want
            an icon to behave like text, aligned slightly below baseline, use class="iconify-inline".
            <br /><br />
            Icons are easy to style with CSS: size is set by font-size, color for
            monotone icons is set by text color. Just like glyph fonts.
            <br /><br />
            Do not forget to add Iconify script tag in head section of your document
            or before {"</body>"}!
            <br /><br />
            See <a href="https://docs.iconify.design">how to use Iconify</a> tutorial.
          </div>
        </Paragraph>
      </div>
    </div>
    <div class="flex flex-col sm:flex-row gap-12 items-center">
      <div class="w-full sm:w-1/2">
        <h3 to use class=" font-semibold tracking-wide text-3xl mb-6 sm:mb-8">
          Over 100,000 icons to choose from
        </h3>
        <Paragraph>
          One script to access thousands of icons from popular collections:
          FontAwesome, Material Design, Vaadin Icons, Emoji One, Twemoji, Icons8
          sets and many more.
          <br /><br />
          You can use Iconify with custom and commercial icon sets too.
        </Paragraph>
      </div>
      <div
        class="w-full sm:w-1/2 h-full flex items-center justify-center gap-24 mb-20"
      >
        <button on:click={prevIcon}>
          <Icon
            icon="eva:chevron-left-outline"
            width="48"
            height="48"
            class=" mt-16"
          />
        </button>
        <div class="flex relative h-full flex-col items-center">
          <div class="w-20 h-32 xl:w-64 xl:h-64" />
          {#each icon_sets as icon_set, index}
            {#if index == current_icon_set}
              <div
                class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                in:fade
                out:fade
              >
                <Icon
                  icon={icon_set[1]}
                  class="w-32 h-32 380:w-48 380:h-48 xl:w-64 xl:h-64"
                />
              </div>
              <h4
                class=" font-medium text-3xl tracking-wider mt-16 absolute top-20 380:top-28 xl:top-56 whitespace-nowrap"
                in:fade
                out:fade
              >
                {icon_set[0]}
              </h4>
              <h5
                class=" font-medium text-xl tracking-wider mt-16 absolute top-28 380:top-36 pt-2 xl:top-64 whitespace-nowrap"
                in:fade
                out:fade
              >
                {icon_set[2]} icons
              </h5>
            {/if}
          {/each}
        </div>
        <button on:click={nextIcon}>
          <Icon
            icon="eva:chevron-right-outline"
            width="48"
            height="48"
            class=" mt-16"
          />
        </button>
      </div>
    </div>
    <div class="flex flex-col-reverse sm:flex-row gap-12 items-center">
      <div class="w-full sm:w-1/2 -mb-12">
        <img
          src="./assets/servermap.svg"
          alt="server distribution"
          class="w-full"
        />
      </div>
      <div class="w-full 530:sm:w-1/2">
        <h3 to use class=" font-semibold tracking-wide text-3xl mb-6 sm:mb-8">
          Lightning fast
        </h3>
        <Paragraph>
          <div>
            Icons are loaded from Iconify API in bulk, reducing number of
            queries. Script is small and fast. Placeholders are replaced with
            SVG images in fraction of second.
            <br /><br />
            Iconify API is hosted on network of servers spread across the globe.
            Visitors are always connected to closest server, reducing loading time
            to fraction of second.
            <br /><br />
            If you want to, you can <a>create your own Iconify API server</a>!
          </div>
        </Paragraph>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .arrow {
    position: absolute;
    top: -2rem;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: calc(100% + 4rem);
    background-color: #dddddd;
    border-radius: 2px;
    z-index: -1;

    &::before,
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 2px;
      height: 1rem;
      background-color: #dddddd;
      border-radius: 2px;
    }

    &::before {
      transform: rotate(-45deg);
      transform-origin: bottom right;
    }

    &::after {
      transform: rotate(45deg);
      transform-origin: bottom left;
    }
  }
</style>
