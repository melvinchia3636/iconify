<script>
    import Paragraph from "../../../Utils/Paragraph.svelte";
    import CodeSnippet from "../CodeSnippet.svelte";
    import MoreInfo from "../MoreInfo.svelte";

    import { isColor, colornameFromHex } from "../../utils";

    export let color;
    export let width;
    export let height;
    export let flipHorizontal;
    export let flipVertical;
    export let rotate;
    export let display;
    export let icon;
</script>

<Paragraph>Iconify SVG framework makes using icons as easy as icon fonts. To use "13-plus in HTML, add this code to the document:</Paragraph>
<CodeSnippet>{`<span class="iconify${display === "inline" ? "-inline" : ""}" data-icon="${icon}"${isColor(color) ? ` style="color:${colornameFromHex(color)}` : ""}${width ? ` data-width="${width}"` : ""}${height ? ` data-height="${height}"` : ""}${flipHorizontal && flipVertical ? ' data-flip="horizontal,vertical"' : `${flipHorizontal ? ' data-flip="horizontal' : ""}${flipVertical ? ' data-flip="vertical"' : ""}`}${rotate ? ` data-rotate="${rotate}deg"` : ""}></span>`}</CodeSnippet>
<Paragraph>
    Iconify SVG framework will load icon data from Iconify API and replace that placeholder with SVG.
    <br/>
    Make sure you import Iconify SVG framework:
</Paragraph>
<CodeSnippet>{'<script src="https://code.iconify.design/2/2.1.0/iconify.min.js"></script>'}</CodeSnippet>
<MoreInfo>More information about Iconify SVG framework.</MoreInfo>