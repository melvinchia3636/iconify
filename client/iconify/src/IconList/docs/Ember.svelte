<script>
    import Paragraph from "../../Utils/Paragraph.svelte";
    import CodeSnippet from "./CodeSnippet.svelte";
    import MoreInfo from "./MoreInfo.svelte";
</script>

<Paragraph>Install addon:</Paragraph>
<CodeSnippet>npm install --save-dev @iconify/ember</CodeSnippet>
<Paragraph>Use component in template:</Paragraph>
<CodeSnippet>{`<IconifyIcon @icon="uil:13-plus" />`}</CodeSnippet>
<MoreInfo link="https://google.com">More info about Ember component</MoreInfo>