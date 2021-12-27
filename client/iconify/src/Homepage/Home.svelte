<script>
    import Hero from './Hero.svelte';
    import Intro from './Intro.svelte';
    import Tutorial from './Tutorial.svelte';
    import Features from './Features.svelte';
    import Workflow from './Workflow.svelte';
    import IconList from './IconList.svelte';
    import Compatibility from './Compatibility.svelte';
    import License from './License.svelte';
</script>

<div class="flex flex-col px-8 ssm:px-12 gap-20 sm:gap-32">
    <Hero />
    <Intro />
    <Tutorial />
    <IconList />
    <Compatibility />
    <License />
</div>
<div class="h-0 bg-rose-500 bg-orange-500 bg-emerald-500 bg-sky-400 bg-sky-500 bg-purple-400 bg-purple-500"></div>
<div class="h-0 text-rose-400 text-orange-400 text-emerald-400 text-sky-400 text-purple-400 text-rose-500 text-orange-500 text-emerald-500 text-sky-500 text-purple-500"></div>
<div class="h-0 border-rose-500 border-orange-500 border-emerald-500 border-sky-500 border-purple-500"></div>