<script lang="ts">
  import { intersectionObserverAction } from "$lib/utils/intersection-observer";
  import ProjectCard from "./project-card.svelte";
  const projects = import.meta.glob("$lib/projects/*.md", { eager: true });

  // Convert projects object to array and extract both metadata and content
  const projectsList = Object.entries(projects).map(
    ([path, project]: [string, any]) => ({
      path,
      metadata: project.metadata,
      content: project.default,
    })
  );
</script>

<section id="projects" use:intersectionObserverAction>
  <h2>Projects</h2>
  <div class="display_projects">
    {#each projectsList as project}
      <ProjectCard {project} />
    {/each}
  </div>
  <p class="more_projects"><i>Working on more, stay tuned!</i></p>
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
    flex-wrap: wrap;
    gap: 1rem;
  }

  .more_projects {
    margin-top: 1rem;
  }
</style>
