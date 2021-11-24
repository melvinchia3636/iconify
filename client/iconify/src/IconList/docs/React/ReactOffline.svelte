<script>
    import Paragraph from "../../../Utils/Paragraph.svelte";
    import CodeSnippet from "../CodeSnippet.svelte";
    import MoreInfo from "../MoreInfo.svelte";
</script>
<Paragraph>Install component and icon set:</Paragraph>
<CodeSnippet>npm install --save-dev @iconify/react @iconify/icons-uil</CodeSnippet>
<Paragraph>Import component and icon data:</Paragraph>
<CodeSnippet>
    import {`{ Icon }`} from '@iconify/react';
import icon13Plus from '@iconify/icons-uil/13-plus';
</CodeSnippet> 
<Paragraph>Use component in template:</Paragraph>
<CodeSnippet>{`<Icon icon={icon13Plus} />`}</CodeSnippet>

<MoreInfo link="https://iconify.design">More information about React component</MoreInfo>