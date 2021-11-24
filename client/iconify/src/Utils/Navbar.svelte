<script>
    import { Link } from 'svelte-navigator';

    const pathname = `/${new URL(document.URL).pathname.split('/')[1]}`;
    const navOptions = [
      [['/'], 'Home'],
      [['/icon-sets', '/icon-set', '/search'], 'Icons'],
      [['https://docs.iconify.design/'], 'Documentation'],
      [['https://github.com/iconify'], 'Github'],
    ];
</script>

<nav class="flex px-12 justify-between w-full mb-8">
    <a href="/"><img src="../assets/logo.svg" alt="iconify logo" /></a>
    <div class="flex items-center gap-16 text-xl tracking-wide font-medium -mt-1 text-gray-700">
        {#each navOptions as [route, name]}
            {#if route.includes(pathname)}
                <a href={route[0]} class="text-blue-500 font-semibold" style="font-size: 1.3rem">{name}</a>
            {:else}
                <a href={route[0]}>{name}</a>
            {/if}
        {/each}
    </div>
    <Link to="/icon-sets" class="bg-red-1000 shadow-md px-6 pt-3 pb-4 text-white font-semibold text-xl tracking-wide rounded-md flex items-center gap-6">
        Browse Icons
        <svg class='mt-1' width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.6786 14.8369L17.4286 8.33691L10.6786 1.83691" stroke="white" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17.4286 8.33691L2.00002 8.33691" stroke="white" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </Link>
</nav>