<p class="tracking-wide text-zinc-600 dark:text-stone-600">
    <slot></slot>
</p>

<style global lang="scss">
    p a {
        @apply text-stone-600 cursor-pointer hover:text-stone-600 transition-all hover:underline
    }

    code > div {
        all: inherit;
    }
</style>
