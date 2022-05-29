<div
  class="w-full bg-stone-600  relative p-4 sssm:p-8 ssm:p-16 "
>
  <div class="inline-flex flex-col w-full ssm:w-auto">
    <div
      class="bg-zinc-800 text-stone-600 pt-4 530:pt-6 px-6 530:px-10 inline relative w-min text-5xl 530:text-6xl 700:text-7xl xl:text-8xl font-bold tracking-wide rounded-t-2xl round "
    >
      Unified
    </div>
    <div
      class="bg-zinc-800 text-zinc-600 dark:text-stone-600 w-full ssm:w-auto block py-4 530:py-6 px-6 530:px-10 text-2xl 390:text-3xl 530:text-4xl 700:text-5xl xl:text-6xl font-medium tracking-wide rounded-b-2xl rounded-tr-2xl"
    >
      Icons Framework
    </div>
  </div>
  <p
    class="text-zinc-800 text-xl sssm:text-xl ssm:text-2xl leading-7 sssm:leading-8 ssm:leading-10 tracking-wide mt-8"
  >
    More than 100 icon sets, one library.
    <br class="hidden 700:inline" />Over 100,000 open source vector icons.
  </p>
  <form
    action="/search"
    class="mt-10 flex w-full md:w-9/12 lg:w-5/12 overflow-hidden rounded-md "
  >
    <input
      autocomplete="off"
      name="q"
      type="text"
      class="bg-stone-600 w-full px-6 py-3 ssm:py-5 text-xl tracking-wide"
      placeholder="Search icons..."
    />
    <button type="submit" class="bg-stone-500 py-4 px-6">
      <svg
        class="mt-1 w-6 h-6"
        viewBox="0 0 19 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.6786 14.8369L17.4286 8.33691L10.6786 1.83691"
          stroke="white"
          stroke-width="2.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M17.4286 8.33691L2.00002 8.33691"
          stroke="white"
          stroke-width="2.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </form>
  <img
    src="./assets/hero.svg"
    alt="hero design"
    class="absolute right-0 top-0 h-full hidden lg:block"
  />
</div>

<style lang="scss">
  .round::before {
    content: "";
    width: 1rem;
    height: 1rem;
    position: absolute;
    background-color: rgb(24,24,27);
    bottom: 0;
    right: -1rem;
  }
  .round::after {
    content: "";
    width: 1.8rem;
    height: 1.8rem;
    position: absolute;
    background-color: rgb(250,204,21);
    bottom: 0;
    right: -1.8rem;
    border-radius: 1.8rem;
  }
</style>
