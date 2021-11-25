<script>
    import Paragraph from "../../../Utils/Paragraph.svelte";
    import CodeSnippet from "../CodeSnippet.svelte";
    import MoreInfo from "../MoreInfo.svelte";
</script>

<Paragraph>Install component and icon set:</Paragraph>
<CodeSnippet>npm install --save-dev @iconify/svelte @iconify/icons-uil</CodeSnippet>
<Paragraph>Import component and icon data:</Paragraph>
<CodeSnippet>
    import Icon from '@iconify/svelte';
import icon16Plus from '@iconify/icons-uil/16-plus';
</CodeSnippet>
<Paragraph>Use component in template:</Paragraph>
<CodeSnippet>{`<Icon icon={icon16Plus} />`}</CodeSnippet>
<MoreInfo>More information about Svelte component</MoreInfo>