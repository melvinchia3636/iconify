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

<Paragraph>Install component:</Paragraph>
<CodeSnippet>npm install --save-dev @iconify/svelte</CodeSnippet>
<Paragraph>Import component:</Paragraph>
<CodeSnippet>import Icon from '@iconify/svelte';</CodeSnippet>
<Paragraph>Use component in template:</Paragraph>
<CodeSnippet
  >{`<Icon icon="${icon}"${
    isColor(color) ? ` color="${colornameFromHex(color)}"` : ""
  }${width ? ` width="${width}"` : ""}${height ? ` height="${height}"` : ""}${
    flipHorizontal ? ` hFlip={true}` : ""
  }${flipVertical ? ` vFlip={true}` : ""}${
    rotate ? ` rotate={${rotate / 90}}` : ""
  }${display === "inline" ? " inline={true}" : ""} />`}</CodeSnippet
>
<MoreInfo>More information about Svelte component</MoreInfo>
