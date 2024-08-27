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
        Possess knowledge of back-end technologies such as <span>Node.js</span>
        and
        <span>NextJS / Sveltekit</span>
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
    max-width: clamp(30ch, 100%, 75ch);
    padding: 1rem;
  }

  ul {
    list-style: none;

    & li {
      font-size: var(--fs-md);
      margin: 1rem 0;
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }

    & li::before {
      content: "";
      display: block;
      width: 0.5rem;
      height: 0.5rem;
      background-color: var(--color-primary);
      border-radius: 50%;
      flex-shrink: 0;
    }

    & span {
      color: var(--color-primary);
      font-weight: 600;
    }
  }
</style>
