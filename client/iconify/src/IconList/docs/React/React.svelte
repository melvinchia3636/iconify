<script>
    import Paragraph from "../../../Utils/Paragraph.svelte";
    import CodeSnippet from "../CodeSnippet.svelte";
    import MoreInfo from "../MoreInfo.svelte";
</script>
<Paragraph>Install component:</Paragraph>
<CodeSnippet>npm install --save-dev @iconify/react</CodeSnippet>
<Paragraph>Import component:</Paragraph>
<CodeSnippet>import {`{ Icon }`} from '@iconify/react';</CodeSnippet> 
<Paragraph>Use component in template:</Paragraph>
<CodeSnippet>{`<Icon icon="uil:13-plus" />`}</CodeSnippet>

<MoreInfo link="https://iconify.design">More information about React component</MoreInfo>