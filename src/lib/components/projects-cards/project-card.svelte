<script lang="ts">
  import type { ProjectInfo } from "$lib/types";
  import Triangle from "../triangle.svelte";
  import ProjectDrawerContent from "./project-drawer-content.svelte";
  import ProjectDrawer from "./project-drawer.svelte";

  export let project: ProjectInfo;
  export let index: number;
</script>

<ProjectDrawer>
  <div class="project_card_wrapper" slot="trigger">
    <img src={project.image} alt={`${project.title} card background`} />
    <p class="number">{`0${index + 1}`}</p>
    <div class="stack">
      <Triangle />
      {#each project.stack as tech}
        <p>{tech}</p>
      {/each}
    </div>
    <div class="project">
      <h3>{project.title}</h3>
      <p class="description">
        {project.description}
      </p>
    </div>
  </div>

  <ProjectDrawerContent {project} slot="content" />
</ProjectDrawer>

<style>
  img {
    position: absolute;
    inset: 0;
    object-fit: cover;
    max-width: 100%;
    height: 100%;
    z-index: -1;
  }

  .project_card_wrapper {
    width: 100%;
    height: 250px;
    position: relative;
    border: 2px solid;
    border-image-source: radial-gradient(
      ellipse at left top,
      var(--color-primary-faded-text),
      transparent 30%,
      transparent 80%,
      var(--color-primary-faded-text) 100%
    );
    border-image-slice: 1;

    border-radius: var(--border-radius-sm);
    padding: 2rem;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    transition: 0.3s linear;

    & p.number {
      font-size: var(--fs-lg);
      font-weight: bold;
      color: var(--color-primary);
      transition: 0.2s linear;
    }

    & .description {
      color: var(--color-faded-text);
    }

    & .stack {
      opacity: 0;
      display: flex;
      gap: 0.5rem;

      transition: 0.2s linear;

      & p {
        color: var(--color-primary-faded-text);
      }
    }
  }

  .project {
    position: absolute;
    top: 180px;
    right: 2rem;
    left: 2rem;
    transition: 0.3s ease-in-out;

    & h3 {
      text-align: right;
      margin-bottom: 5rem;
    }
  }

  /* .project_card_wrapper:hover,
  a:focus .project_card_wrapper {
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7));
    border-image-source: radial-gradient(
      ellipse at right top,
      var(--color-primary),
      transparent 30%,
      transparent 80%,
      var(--color-primary) 100%
    );
    padding: 1rem;

    & p.number {
      opacity: 0;
    }

    & .project {
      top: 1rem;
      left: 1rem;
      right: 1rem;

      & h3 {
        margin-bottom: 1rem;
      }
    }

    & .stack {
      opacity: 1;
    }
  } */

  /* @media (width < 480px) {
    .project_card_wrapper:hover,
    a:focus .project_card_wrapper {
      padding: 0.5rem;
    }
  } */
</style>
