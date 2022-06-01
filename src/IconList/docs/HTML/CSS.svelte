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
  export let icon;

  const baseURL = `https://api.iconify.design/${icon.split(":")[0]}/${
    icon.split(":")[1]
  }.svg`;
  let url = new URL(baseURL);
  let urlString = url.toString();
  $: (() => {
    isColor(color)
      ? url.searchParams.set("color", colornameFromHex(color))
      : url.searchParams.delete("color");
    width
      ? url.searchParams.set("width", width)
      : url.searchParams.delete("width");
    height
      ? url.searchParams.set("height", height)
      : url.searchParams.delete("height");
    rotate
      ? url.searchParams.set("rotate", `${rotate}deg`)
      : url.searchParams.delete("rotate");

    if (!(flipHorizontal || flipVertical)) {
      url.searchParams.delete("flip");
    } else if (flipHorizontal && flipVertical) {
      url.searchParams.set("flip", "vertical,horizontal");
    } else if (flipVertical) {
      url.searchParams.set("flip", "vertical");
    } else {
      url.searchParams.set("flip", "horizontal");
    }

    urlString = url.toString();
  })();
</script>

<Paragraph>
  Add code below to your stylesheet to use icon as background image or as pseudo
  element's content:
</Paragraph>
<CodeSnippet
  >background: url('{urlString}') no-repeat center center / contain;</CodeSnippet
>
<CodeSnippet
  >content: url('{urlString}') no-repeat center center / contain;</CodeSnippet
>

<MoreInfo link="http://www.iconify.design">More code examples</MoreInfo>
