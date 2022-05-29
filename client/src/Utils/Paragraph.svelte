<p class="tracking-wide text-zinc-600 dark:text-zinc-100">
    <slot></slot>
</p>

<style global lang="scss">
    p a {
        @apply text-yellow-400 cursor-pointer hover:text-yellow-600 transition-all hover:underline
    }

    code > div {
        all: inherit;
    }
</style>
