<script>
  import Plot from "$lib/assets/plot.svelte";
  import { getExpanded } from "$lib/stores/expaded-store";
  import About from "./about.svelte";
  import Contact from "./contact.svelte";
  import Home from "./home.svelte";
  import Projects from "./projects.svelte";
  import Tech from "./tech.svelte";

  const expanded = getExpanded();
</script>

<main>
  <Plot />
  <Home />
  <div class:hidden={!$expanded}>
    <About />
    <Tech />
    <Projects />
    <Contact />
  </div>
</main>

<style>
  main {
    width: 100%;
    position: relative;
  }

  div {
    display: grid;
    gap: 10rem;
    opacity: 1;
    transition: opacity 0.2s ease-in-out;
  }

  .hidden {
    opacity: 0;
  }
</style>
