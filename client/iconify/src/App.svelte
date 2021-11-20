<script>
	import { Router, Route } from "svelte-navigator"

	import Navbar from "./Utils/Navbar.svelte"
	import Home from "./Homepage/Home.svelte";
</script>

<Router>
	<main class="px-12 py-8 pb-24">
		<Navbar />
		<Route path="/">
			<Home />
		</Route>
	</main>
</Router>

<style global lang="scss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

	@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@100;200;300;400;500;600;700&family=Noto+Serif+SC:wght@200;300;400;500;600;700;900&display=swap');

	* {
		font-family: Barlow, sans-serif;

		&:focus {
			outline: none;
		}
	}
</style>