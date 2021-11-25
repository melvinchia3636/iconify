<script>
    import { getIcon } from "@iconify/svelte";
    import { currentIcon } from "../../stores";
    import CodeSnippet from "../CodeSnippet.svelte";

    let curIcon;
    let SVG;

    currentIcon.subscribe(value => {
        curIcon = value
        SVG = getIcon(curIcon)?.body
    });
</script>

<CodeSnippet>
    {`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">${SVG}</svg>`}
</CodeSnippet>

