<script>
  export let link;
  import Icon from "@iconify/svelte";
</script>

<div class="mt-10 flex items-center gap-2 tracking-wide ">
  <Icon icon="mdi:link-variant" class=" flex-shrink-0" width="24" height="24" />
  <a href={link}>
    <slot />
  </a>
</div>
