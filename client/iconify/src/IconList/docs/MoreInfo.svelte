<script>
    export let link
    import Icon from "@iconify/svelte"
</script>

<div class="mt-10 flex items-center gap-1 text-xl tracking-wide text-blue-500">
    <Icon icon="mdi:link-variant" class="text-blue-500" width="24" height="24" />
    <a href={link}>
        <slot></slot>
    </a>
</div>