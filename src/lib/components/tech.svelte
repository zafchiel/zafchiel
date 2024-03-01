<script lang="ts">
  import { intersectionObserverAction } from "$lib/utils/intersection-observer";
  import Marquee from "./marquee.svelte";
</script>

<section id="tech" use:intersectionObserverAction>
  <h2>Tech</h2>
  <Marquee />
  <ul>
    <li>
      Skilled front-end developer proficient in <span>HTML</span>,
      <span> CSS</span>, and <span>JavaScript / TypeScript</span>
    </li>
    <li>
      Experienced in building interactive interfaces using <span>React</span>
      and <span>Svelte</span>
    </li>
    <li>
      Possess knowledge of back-end technologies like <span>Node.js</span> and
      <span>Bun</span>
    </li>
    <li>
      Utilizes <span>Python</span> and <span>SQL</span> for data science projects
      during my studies
    </li>
  </ul>
</section>

<style>
  section {
    min-width: 0;
    padding: 1rem;
  }

  ul {
    padding: 0.5rem;
    list-style: url("/list-triangle.svg");

    & li {
      margin: 1rem 0;
      font-size: var(--fs-md);
    }

    & span {
      color: var(--color-primary);
    }
  }
</style>
