<script>
    import Paragraph from "../../../Utils/Paragraph.svelte";
    import CodeSnippet from "../CodeSnippet.svelte";
    import MoreInfo from "../MoreInfo.svelte";
</script>

<Paragraph>
    Add code below to your stylesheet to use icon as background image or as pseudo element's content:
</Paragraph>
<CodeSnippet>background: url('https://api.iconify.design/uil/13-plus.svg') no-repeat center center / contain;</CodeSnippet>
<CodeSnippet>content: url('https://api.iconify.design/uil/13-plus.svg');</CodeSnippet>

<MoreInfo link="http://www.iconify.design">More code examples</MoreInfo>