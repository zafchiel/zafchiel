<script>
  import About from "./about.svelte";
  import Intro from "./intro.svelte";
  import Projects from "./projects.svelte";
  import Tech from "./tech.svelte";
</script>

<main>
  <Intro />
  <About />
  <Tech />
  <Projects />
</main>

<style>
  main {
    max-width: 500px;
    display: grid;
    gap: 10rem;
  }
</style>
