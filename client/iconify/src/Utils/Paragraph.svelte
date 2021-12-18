<p class="text-base tracking-wide text-gray-700 sm:text-xl">
    <slot></slot>
</p>

<style global lang="scss">
    p a {
        @apply text-blue-500 cursor-pointer hover:text-blue-600 transition-all hover:underline
    }

    code > div {
        all: inherit;
    }
</style>
