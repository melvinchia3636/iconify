<script>
    import Paragraph from "../../../Utils/Paragraph.svelte";
    import CodeSnippet from "../CodeSnippet.svelte";
    import MoreInfo from "../MoreInfo.svelte";
</script>

<Paragraph>Install component:</Paragraph>
<CodeSnippet>npm install --save-dev @iconify/vue</CodeSnippet>
<Paragraph>Import component:</Paragraph>
<CodeSnippet>{`import { Icon } from '@iconify/vue';`}</CodeSnippet>
<Paragraph>Add icon component to your component:</Paragraph>
<CodeSnippet>
{`export default {
    components: {
        Icon,
    },
});`}
</CodeSnippet>
<Paragraph>Use component in template:</Paragraph>
<CodeSnippet>{`<Icon icon="uil:16-plus" />`}</CodeSnippet>
<MoreInfo>More information about Vue component</MoreInfo>