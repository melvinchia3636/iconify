<script>
    import Paragraph from "../../../Utils/Paragraph.svelte";
    import CodeSnippet from "../CodeSnippet.svelte";
import MoreInfo from "../MoreInfo.svelte";
</script>

<Paragraph>Install component and icon set:</Paragraph>
<CodeSnippet>npm install --save-dev @iconify/vue2 @iconify/icons-uil</CodeSnippet>
<Paragraph>Import component and icon data:</Paragraph>
<CodeSnippet>
{`import { Icon } from '@iconify/vue2';
import icon16Plus from '@iconify/icons-uil/16-plus';`}
</CodeSnippet>
<Paragraph>Add icon data and icon component to your component:</Paragraph>
<CodeSnippet>
{`export default {
	components: {
		Icon,
	},
	data() {
		return {
			icons: {
				icon16Plus,
			},
		};
	},
});`}
</CodeSnippet>
<Paragraph>Use component in template:</Paragraph>
<CodeSnippet>{`<Icon :icon="icons.icon16Plus" />`}</CodeSnippet>
<MoreInfo>More information about Vue component</MoreInfo>