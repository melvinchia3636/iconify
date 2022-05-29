<script>
    import Icon from '@iconify/svelte';
    import { Link } from 'svelte-navigator';

    import { slide } from 'svelte/transition'

    const pathname = `/${new URL(document.URL).pathname.split('/')[1]}`;
    const navOptions = [
      [['/'], 'Home'],
      [['/icon-sets', '/icon-set', '/search'], 'Icons'],
      [['https://docs.iconify.design/'], 'Documentation'],
      [['https://github.com/iconify'], 'Github'],
    ];

    let isNavOpen = false;

    const toggleNav = () => {
        isNavOpen = !isNavOpen;
    }
</script>

<nav class="flex items-center justify-between w-full px-3 390:px-8 ssm:px-12 mb-8">
    <div class="flex items-center flex-shrink-0 gap-6 z-50">
        <button class="block 1100:hidden" on:click={toggleNav}>
            <Icon icon="gg:menu" class="text-zinc-600 dark:text-zinc-100" width="1.8rem" height="1.8rem" />
        </button>
        <a href="/"><img src="../assets/logo.svg" alt="iconify logo" /></a>
    </div>
    <div class="items-center hidden -mt-1 font-medium text-lg tracking-wide text-zinc-600 dark:text-zinc-100 gap-16 1100:flex">
        {#each navOptions as [route, name]}
            {#if route.includes(pathname)}
                <a href={route[0]} class="font-semibold text-yellow-400">{name}</a>
            {:else}
                <a href={route[0]}>{name}</a>
            {/if}
        {/each}
    </div>
    <Link to="/icon-sets" class="items-center rounded-md hidden px-6 pt-[0.9rem] pb-4 text-lg font-semibold tracking-wide text-zinc-800 shadow-md ssm:flex bg-yellow-400  gap-6">
        Browse Icons
        <svg class='flex-shrink-0 mt-1 text-zinc-800' width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.6786 14.8369L17.4286 8.33691L10.6786 1.83691" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17.4286 8.33691L2.00002 8.33691" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </Link>
    {#if isNavOpen}
        <div class="fixed z-40 top-0 left-0 w-full h-screen bg-zinc-200 flex gap-16 flex-col items-center justify-center text-xl font-medium tracking-wide text-zinc-600 dark:text-zinc-100" transition:slide>
            {#each navOptions as [route, name]}
                {#if route.includes(pathname)}
                    <a href={route[0]} class="font-semibold text-yellow-400" style="font-size: 1.3rem">{name}</a>
                {:else}
                    <a href={route[0]}>{name}</a>
                {/if}
            {/each}
        </div>
    {/if}
</nav>
