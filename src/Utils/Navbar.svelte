<script>
  import Icon from "@iconify/svelte";
  import { Link } from "svelte-navigator";

  import { slide } from "svelte/transition";

  const pathname = `/${new URL(document.URL).pathname.split("/")[1]}`;
  const navOptions = [
    [["/"], "Home"],
    [["/icon-sets", "/icon-set", "/search"], "Icons"],
    [["https://docs.iconify.design/"], "Documentation"],
    [["https://github.com/iconify"], "Github"],
  ];

  let isNavOpen = false;

  const toggleNav = () => {
    isNavOpen = !isNavOpen;
  };
</script>

<nav class="flex items-center justify-between w-full px-8 ssm:px-12 mb-8">
  <a href="/" class="relative z-50">
    <img src="../assets/logo.svg" alt="iconify logo" />
  </a>
  <div
    class="items-center hidden -mt-1 font-medium  tracking-wide  gap-16 1100:flex"
  >
    {#each navOptions as [route, name]}
      {#if route.includes(pathname)}
        <a
          href={route[0]}
          class="font-semibold relative after:w-1/2 after:border-b-2 after:absolute after:border-stone-600 after:bottom-0 after:left-1/2 after:-translate-x-1/2"
          >{name}</a
        >
      {:else}
        <a href={route[0]}>{name}</a>
      {/if}
    {/each}
  </div>
  <button class="block 1100:hidden relative z-50" on:click={toggleNav}>
    <Icon icon="tabler:menu-2" class="" width="1.8rem" height="1.8rem" />
  </button>
  <Link
    to="/icon-sets"
    class="items-center hidden px-6 pt-[0.9rem] pb-4 font-semibold tracking-wide  ssm:flex border-2 border-stone-600 gap-6"
  >
    Browse Icons
    <svg
      class="flex-shrink-0 text-stone-800 w-4 h-4"
      width="19"
      height="17"
      viewBox="0 0 19 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.6786 14.8369L17.4286 8.33691L10.6786 1.83691"
        stroke="currentColor"
        stroke-width="2.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.4286 8.33691L2.00002 8.33691"
        stroke="currentColor"
        stroke-width="2.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </Link>
  {#if isNavOpen}
    <div
      class="fixed z-40 top-0 left-0 w-full h-screen bg-stone-50 flex gap-16 flex-col items-center justify-center text-lg font-medium tracking-wide "
      transition:slide
    >
      {#each navOptions as [route, name]}
        {#if route.includes(pathname)}
          <a
            href={route[0]}
            class="font-semibold relative after:w-1/2 after:border-b-2 after:absolute after:border-stone-600 after:bottom-0 after:left-1/2 after:-translate-x-1/2"
            >{name}</a
          >
        {:else}
          <a href={route[0]}>{name}</a>
        {/if}
      {/each}
    </div>
  {/if}
</nav>
