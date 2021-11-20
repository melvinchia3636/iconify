<script>
    export let content = "";
    export let isHTML = false;
</script>

<p class="text-gray-700 text-xl tracking-wide">
    {#if isHTML}
        {@html content}
    {:else}
        {content}
    {/if}
</p>

<style global lang="scss">
    p a {
        @apply text-blue-500 cursor-pointer hover:text-blue-600 transition-all hover:underline
    }
</style>