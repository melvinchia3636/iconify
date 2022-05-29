<script>
    export let link
    import Icon from "@iconify/svelte"
</script>

<div class="mt-10 flex items-center gap-1 text-lg ssssm:text-xl tracking-wide text-yellow-400">
    <Icon icon="mdi:link-variant" class="text-yellow-400 flex-shrink-0" width="24" height="24" />
    <a href={link}>
        <slot></slot>
    </a>
</div>