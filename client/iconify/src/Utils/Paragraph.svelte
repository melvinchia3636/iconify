<p class="text-gray-700 text-xl tracking-wide">
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