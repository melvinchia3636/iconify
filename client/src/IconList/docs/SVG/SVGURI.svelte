<script>
    import { getIcon } from "@iconify/svelte";
    import Paragraph from "../../../Utils/Paragraph.svelte";
    import { currentIcon } from "../../stores";
    import CodeSnippet from "../CodeSnippet.svelte";

    let curIcon;
    let SVG;

    currentIcon.subscribe(value => {
        curIcon = value
        SVG = getIcon(curIcon)?.body
    });
</script>

<Paragraph>You can use this as background image or as content for pseudo element in stylesheet.</Paragraph>
<CodeSnippet>
    url('data:image/svg+xml,{encodeURI(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">${SVG}</svg>`)}')
</CodeSnippet>

