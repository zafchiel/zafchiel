<script lang="ts">
  import type { ProjectInfo } from "$lib/types";
  import Flashcards from "./flashcards.svelte";
  import LinkShortener from "./link-shortener.svelte";
  export let project: ProjectInfo;
</script>

<section>
  <header>
    <h3>{project.title}</h3>
    <div class="links">
      <a href={project.repoLink}>Repository link</a>
      <a href={project.liveLink}>Live deployment link</a>
    </div>
  </header>

  <div class="project_details">
    {#if project.title === "Flashcards"}
      <Flashcards />
    {:else if project.title === "Link shortener"}
      <LinkShortener />
    {/if}
  </div>
</section>

<style>
  section {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    height: 85%;

    & .project_details {
      overflow-y: auto;
      padding: 0.5rem;
    }

    & header {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0px 8px 14px 0px rgba(0, 0, 0, 0.2);
      padding: 0.5rem;

      & h3 {
        font-weight: 700;
      }

      & .links {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        color: var(--color-primary-faded-text);
      }
    }

    & img {
      margin-top: 1rem;
      border-radius: var(--border-radius-sm);
    }
  }
</style>
