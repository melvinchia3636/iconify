<script>
  import { Router, Route } from "svelte-navigator";

  import Navbar from "./Utils/Navbar.svelte";
  import Footer from "./Utils/Footer.svelte";

  import Home from "./Homepage/Home.svelte";
  import Browse from "./Browse/Browse.svelte";
  import IconList from "./IconList/IconList.svelte";
  import SearchAll from "./SearchAll/SearchAll.svelte";

  window.onload = () => {
    window.scrollTo({ top: 0 });
  };

  let theme = localStorage.theme;
  if (
    theme === "dark" ||
    (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }
</script>

<Router>
  <main class="pt-8 bg-stone-100 min-h-[100vh] flex flex-col">
    <Navbar />
    <Route path="/">
      <Home />
    </Route>
    <Route path="/icon-set/:iconSet" let:params>
      <IconList iconSet={params.iconSet} />
    </Route>
    <Route path="/icon-sets">
      <Browse />
    </Route>
    <Route path="/search">
      <SearchAll />
    </Route>
    <Footer />
  </main>
</Router>

<style global lang="scss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&display=swap');
  
  body {
    margin: 0;
  }

  *:not(path) {
    font-family: "Jetbrains Mono";
    @apply text-stone-600;
    -webkit-tap-highlight-color: transparent;

    &:focus {
      outline: none;
    }
  }
</style>
