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

<div class="flex flex-col px-12 gap-32">
    <Hero />
    <Intro />
    <Tutorial />
    <Features />
    <Workflow />
    <IconList />
    <Compatibility />
    <License />
    <div class="bg-red-500 bg-yellow-500 bg-green-500 bg-indigo-400 bg-indigo-500 bg-purple-400 bg-purple-500"></div>
    <div class="text-red-400 text-yellow-400 text-green-400 text-indigo-400 text-purple-400"></div>
</div>
