<script lang="ts">
  import { intersectionObserverAction } from "$lib/utils/intersection-observer";
  import projectsData from "./projects-cards/projects-data.json";
  import ProjectCard from "./projects-cards/project-card.svelte";
</script>

<section id="projects" use:intersectionObserverAction>
  <h2>Projects</h2>
  <div class="display_projects">
    {#each projectsData as project, index}
      <ProjectCard {index} {project} />
    {/each}
  </div>
  <p>Working on more, stay tuned!</p>
</section>

<style>
  section {
    position: relative;
    overflow: hidden;
    padding: 1rem;
    background: url("../assets/dot.svg");
  }

  .display_projects {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  p {
    font-size: var(--fs-md);
    margin-top: 1rem;
    font-weight: 300;
  }
</style>
