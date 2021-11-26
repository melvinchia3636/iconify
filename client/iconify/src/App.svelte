<script>
	import { Router, Route } from "svelte-navigator";

	import Navbar from "./Utils/Navbar.svelte"
	import Footer from "./Utils/Footer.svelte";

	import Home from "./Homepage/Home.svelte";
	import Browse from "./Browse/Browse.svelte";
	import IconList from "./IconList/IconList.svelte";
	import SearchAll from "./SearchAll/SearchAll.svelte";

	window.onload = () => {
		window.scrollTo({ top: 0 });
	}
</script>

<Router>
	<main class="pt-8">
		<Navbar />
		<Route path="/">
			<Home />
		</Route>
		<Route path="/icon-set/:iconSet" let:params>
			<IconList iconSet={params.iconSet}/>
		</Route>
		<Route path="/icon-sets">
			<Browse />
		</Route>
		<Route path="/search">
			<SearchAll />
		</Route>
		<!--<Footer />-->
	</main>
</Router>

<style global lang="scss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

	@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@100;200;300;400;500;600;700&family=Noto+Serif+SC:wght@200;300;400;500;600;700;900&display=swap');

	body {
		margin: 0;
	}

	* {
		font-family: Barlow, sans-serif;

		&:focus {
			outline: none;
		}
	}

</style>