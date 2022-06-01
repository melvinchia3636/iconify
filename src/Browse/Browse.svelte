<script>
  import IconList from "./IconList.svelte";
  import Header from "./Header.svelte";
  import Search from "./Search.svelte";
  import BottomDec from "../Utils/BottomDec.svelte";
  import { iconFilterTerm } from "./stores";

  let selectedCategory = null;

  const setSelectedCategory = (value) => {
    selectedCategory = value;
  };
</script>

<div class="flex flex-col px-3 390:px-8 ssm:px-12">
  <Header />
  <Search
    bind:value={$iconFilterTerm}
    {setSelectedCategory}
    {selectedCategory}
    iconFilterTerm={$iconFilterTerm}
  />
  <IconList {selectedCategory} iconFilterTerm={$iconFilterTerm} />
  <BottomDec />
</div>
