<p class="tracking-wide text-sm ssm:text-base">
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
