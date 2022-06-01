<p class="tracking-wide ">
  <slot />
</p>

<style lang="scss">
  :global {
    p a {
      @apply cursor-pointer transition-all underline;
    }

    code > div {
      all: inherit;
    }
  }
</style>
