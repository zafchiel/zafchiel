<script>
  import About from "./about.svelte";
  import Intro from "./intro.svelte";
</script>

<main>
  <Intro />

  <About />
</main>

<style>
  main {
    max-width: 500px;
    display: grid;
    gap: 3rem;
  }
</style>
