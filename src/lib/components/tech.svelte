<script lang="ts">
  import { intersectionObserverAction } from "$lib/utils/intersection-observer";
  import Marquee from "./marquee.svelte";
</script>

<section id="tech" use:intersectionObserverAction>
  <h2>Tech</h2>
  <Marquee />
  <p>
    I mainly specialise in front-end technologiec such as HTML, CSS, and
    JavaScript. I also have experience with frameworks such as React, Svelte,
    and Vue.
  </p>
  <p>
    I have a good understanding of back-end technologies such as Node.js and
    Bun. I use python mainly for my data science activities in college.
  </p>
</section>

<style>
  section {
    min-width: 0;
    padding: 1rem;
  }

  p {
    font-size: var(--fs-md);
    margin-top: 0.5rem;
  }
</style>
