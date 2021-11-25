<script>
    import Paragraph from "../../../Utils/Paragraph.svelte";
    import CodeSnippet from "../CodeSnippet.svelte";
    import MoreInfo from "../MoreInfo.svelte";

    import { isColor, colornameFromHex } from "../../utils";
    import { currentColor, currentWidth, currentHeight, currentFlipHorizontal, currentFlipVertical, currentRotate } from "../../stores";

    let curColor;
    let curWidth;
    let curHeight;
    let curFlipHorizontal;
    let curFlipVertical;
    let curRotate;

    currentColor.subscribe(value => {
        curColor = value;
    })
    currentWidth.subscribe(value => {
        curWidth = value
    })
    currentHeight.subscribe(value => {
        curHeight = value
    })
    currentFlipHorizontal.subscribe(value => {
        curFlipHorizontal = value
    })
    currentFlipVertical.subscribe(value => {
        curFlipVertical = value
    })
    currentRotate.subscribe(value => {
        curRotate = value
    })
</script>

<Paragraph>Iconify SVG framework makes using icons as easy as icon fonts. To use "13-plus in HTML, add this code to the document:</Paragraph>
<CodeSnippet>{`<span class="iconify" data-icon="uil:13-plus"${isColor(curColor) ? ` style="color:${colornameFromHex(curColor)}` : ""}${curWidth !== 24 ? ` data-width="${curWidth}"` : ""}${curHeight !== 24 ? ` data-height="${curHeight}"` : ""}${curFlipHorizontal && curFlipVertical ? ' data-flip="horizontal,vertical"' : `${curFlipHorizontal ? ' data-flip="horizontal' : ""}${curFlipVertical ? ' data-flip="vertical"' : ""}`}${curRotate ? ` data-rotate=${curRotate}deg` : ""}></span>`}</CodeSnippet>
<Paragraph>
    Iconify SVG framework will load icon data from Iconify API and replace that placeholder with SVG.
    <br/>
    Make sure you import Iconify SVG framework:
</Paragraph>
<CodeSnippet>{'<script src="https://code.iconify.design/2/2.1.0/iconify.min.js"></script>'}</CodeSnippet>
<MoreInfo>More information about Iconify SVG framework.</MoreInfo>