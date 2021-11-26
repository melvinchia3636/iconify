<script>
    import { getIcon, replaceIDs } from "@iconify/svelte";
    import CodeSnippet from "../CodeSnippet.svelte";
    import { isColor, colornameFromHex } from "../../utils";

    export let color;
    export let width;
    export let height;
    export let display;
    export let icon;

    let SVGOriginal = getIcon(icon)?.body;
    let SVG = SVGOriginal + ""

    $: SVG = isColor(color) ? SVGOriginal.replace("currentColor", colornameFromHex(color)) : SVGOriginal
</script>

<CodeSnippet>
    {`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"${display === 'inline' ? ` style="vertical-align: -0.125em;"` : ""} width="${width ? width : "1rem"}" height="${height ? height : "1rem"}" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">${SVG}</svg>`}
</CodeSnippet>

