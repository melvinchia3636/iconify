<script>
  import { getIcon } from "@iconify/svelte";
  import Paragraph from "../../../Utils/Paragraph.svelte";
  import { currentIcon } from "../../stores";
  import CodeSnippet from "../CodeSnippet.svelte";

  let curIcon;
  let SVG;

  currentIcon.subscribe((value) => {
    curIcon = value;
    SVG = getIcon(curIcon)?.body;
  });
</script>

<Paragraph
  >This SVG contains extra empty rectangle that matches viewBox. It is needed to
  keep icon dimensions when importing icon in software that ignores viewBox
  attribute.</Paragraph
>
<CodeSnippet>
  {`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><rect x="0" y="0" width="24" height="24" fill="none" stroke="none" />${SVG}</svg>`}
</CodeSnippet>
