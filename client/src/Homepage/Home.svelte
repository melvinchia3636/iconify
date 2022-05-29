<script>
  import Hero from "./Hero.svelte";
  import Intro from "./Intro.svelte";
  import Tutorial from "./Tutorial.svelte";
  import Features from "./Features.svelte";
  import Workflow from "./Workflow.svelte";
  import IconList from "./IconList.svelte";
  import Compatibility from "./Compatibility.svelte";
  import License from "./License.svelte";
</script>

<div class="flex flex-col px-3 390:px-8 ssm:px-12 gap-20 sm:gap-32">
  <Hero />
  <Intro />
  <Tutorial />
  <Features />
  <!--<Workflow />-->
  <IconList />
  <Compatibility />
  <License />
</div>
<div
  class="h-0 bg-stone-600 bg-orange-500 bg-stone-500 bg-stone-600 bg-stone-500 bg-purple-400 bg-purple-500 bg-zinc-500 bg-stone-500 bg-zinc-400 bg-stone-600"
/>
<div
  class="h-0 text-stone-600 text-orange-400 text-stone-600 text-stone-600 text-purple-400 text-stone-600 text-orange-500 text-stone-500 text-stone-500 text-purple-500 text-zinc-500 text-stone-500 text-zinc-400 text-stone-600"
/>
<div
  class="h-0 border-stone-600 border-orange-500 border-stone-500 border-stone-500 border-purple-500 border-zinc-500 border-stone-500"
/>
