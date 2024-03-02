<script lang="ts">
  import { intersectionObserverAction } from "$lib/utils/intersection-observer";
  import Marquee from "./marquee.svelte";
</script>

<section id="tech" use:intersectionObserverAction>
  <h2>Tech</h2>
  <Marquee />
  <ul>
    <li>
      <div>
        Skilled front-end developer proficient in <span>HTML</span>,
        <span> CSS</span>, and <span>JavaScript / TypeScript</span>
      </div>
    </li>
    <li>
      <div>
        Experienced in building interactive interfaces using <span>React</span>
        and <span>Svelte</span>
      </div>
    </li>
    <li>
      <div>
        Possess knowledge of back-end technologies like <span>Node.js</span> and
        <span>Bun</span>
      </div>
    </li>
    <li>
      <div>
        Utilizes <span>Python</span> and <span>SQL</span> for data science projects
        during my studies
      </div>
    </li>
  </ul>
</section>

<style>
  section {
    min-width: 0;
    padding: 1rem;
  }

  ul {
    list-style: none;
    padding: 0.5rem;

    & li {
      margin: 1rem 0;
      font-size: var(--fs-md);

      display: flex;
      gap: 0.5rem;
    }

    & li::before {
      content: "";
      background: url("/list-triangle.svg") no-repeat;
      background-size: cover;
      display: block;
      width: 2rem;
      height: 2rem;
      min-width: 0;
    }

    & span {
      color: var(--color-primary);
      font-weight: 600;
    }
  }
</style>
