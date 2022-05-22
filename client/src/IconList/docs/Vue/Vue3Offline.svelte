<script>
    import Paragraph from "../../../Utils/Paragraph.svelte";
    import CodeSnippet from "../CodeSnippet.svelte";
    import MoreInfo from "../MoreInfo.svelte";
	import { isColor, colornameFromHex } from "../../utils";

	String.prototype.toProperCase = function () {
        return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    };

    export let color;
    export let width;
    export let height;
    export let flipHorizontal;
    export let flipVertical;
    export let rotate;
    export let display;
    export let icon;

    icon = icon || ""
</script>

<Paragraph>Install component and icon set:</Paragraph>
<CodeSnippet>npm install --save-dev @iconify/vue @iconify-icons/{icon?.split(":")[0]}</CodeSnippet>
<Paragraph>Import component and icon data:</Paragraph>
<CodeSnippet>
{`import { Icon } from '@iconify/vue';
import icon${icon?.split(":")[1]?.split("-").map(e => e.toProperCase()).join("")} from '@iconify-icons/${icon?.split(":")[0]}/${icon?.split(":")[1]}';`}
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
				icon${icon?.split(":")[1]?.split("-").map(e => e.toProperCase()).join("")},
			},
		};
	},
});`}
</CodeSnippet>
<Paragraph>Use component in template:</Paragraph>
<CodeSnippet>{`<Icon :icon="icons.icon${icon?.split(":")[1]?.split("-").map(e => e.toProperCase()).join("")}"${isColor(color) ? ` color="${colornameFromHex(color)}"` : ""}${width ? ` width="${width}"` : ""}${height ? ` height="${height}"` : ""}${flipHorizontal ? ` :horizontalFlip="true"` : ""}${flipVertical ? ` :verticalFlip="true"` : ""}${rotate ? ` :rotate="${rotate/90}"` : ""}${display === "inline" ? " :inline=\"true\"" : ""} />`}</CodeSnippet>
<MoreInfo>More information about Vue component</MoreInfo>
