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

<div class="flex flex-col px-8 ssm:px-12 gap-20 sm:gap-32">
  <Hero />
  <Intro />
  <Tutorial />
  <Features />
  <!--<Workflow />-->
  <IconList />
  <Compatibility />
  <License />
</div>
