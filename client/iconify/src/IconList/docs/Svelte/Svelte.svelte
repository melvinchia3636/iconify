<script>
    import Paragraph from "../../../Utils/Paragraph.svelte";
    import CodeSnippet from "../CodeSnippet.svelte";
    import MoreInfo from "../MoreInfo.svelte";
</script>

<Paragraph>Install component:</Paragraph>
<CodeSnippet>npm install --save-dev @iconify/svelte</CodeSnippet>
<Paragraph>Import component:</Paragraph>
<CodeSnippet>import Icon from '@iconify/svelte';</CodeSnippet>
<Paragraph>Use component in template:</Paragraph>
<CodeSnippet>{`<Icon icon="uil:16-plus" />`}</CodeSnippet>
<MoreInfo>More information about Svelte component</MoreInfo>