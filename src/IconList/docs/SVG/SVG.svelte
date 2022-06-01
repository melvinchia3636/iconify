<script>
  import { getIcon, replaceIDs } from "@iconify/svelte";
  import CodeSnippet from "../CodeSnippet.svelte";
  import { isColor, colornameFromHex } from "../../utils";

  export let color;
  export let width;
  export let height;
  export let flipHorizontal;
  export let flipVertical;
  export let rotate;
  export let icon;

  function saveSvg(svgEl, name) {
    var svgData = svgEl;
    var preface = '<?xml version="1.0" standalone="no"?>\r\n';
    var svgBlob = new Blob([preface, svgData], {
      type: "image/svg+xml;charset=utf-8",
    });
    var svgUrl = URL.createObjectURL(svgBlob);
    var downloadLink = document.createElement("a");
    downloadLink.href = svgUrl;
    downloadLink.download = name;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }

  const baseURL = `https://api.iconify.design/${icon.split(":")[0]}/${
    icon.split(":")[1]
  }.svg`;
  let url = new URL(baseURL);
  let urlString = url.toString();
  let curSVG = "";
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

  $: fetch(urlString)
    .then((res) => res.text())
    .then((data) => {
      curSVG = data;
    });
</script>

<CodeSnippet>
  {curSVG}
</CodeSnippet>
<button
  on:click={() => {
    saveSvg(curSVG, icon.split(":")[1] + ".svg");
  }}
  class="w-full p-4 text-xl font-medium tracking-wide  bg-stone-600  "
  >Download SVG</button
>
