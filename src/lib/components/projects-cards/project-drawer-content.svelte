<script lang="ts">
  import type { ProjectInfo } from "$lib/types";
  import Flashcards from "./flashcards.svelte";
  import LinkShortener from "./link-shortener.svelte";
  export let project: ProjectInfo;
</script>

<section class="wrapper">
  <header>
    <h3>{project.title}</h3>
    <div class="links">
      <a href={project.repoLink}>Repository link</a>
      <a href={project.liveLink}>Live deployment link</a>
    </div>
  </header>

  {#if project.title === "Flashcards"}
    <Flashcards />
  {:else if project.title === "Link shortener"}
    <LinkShortener />
  {/if}
</section>

<style>
  section {
    flex-grow: 1;

    & header {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: space-between;
      align-items: center;

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
