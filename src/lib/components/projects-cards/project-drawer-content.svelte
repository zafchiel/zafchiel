<script lang="ts">
  import type { ProjectInfo } from "$lib/types";
  import Flashcards from "./flashcards.svelte";
  import LinkShortener from "./link-shortener.svelte";
  import linkIcon from "$lib/assets/link-icon.svg";
  import DrawBoard from "./draw-board.svelte";

  interface Props {
    project: ProjectInfo;
  }

  let { project }: Props = $props();
</script>

<section>
  <header>
    <h3>{project.title}</h3>
    <div class="links">
      <a href={project.repoLink}>
        <img src={linkIcon} alt="Link icon" />
        Repository
      </a>
      <a href={project.liveLink}>
        <img src={linkIcon} alt="Link icon" />

        Live deployment</a
      >
    </div>
  </header>

  <div class="project_details">
    {#if project.title === "Flashcards"}
      <Flashcards />
    {:else if project.title === "Link shortener"}
      <LinkShortener />
    {:else if project.title === "Drawing Board"}
      <DrawBoard />
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
      gap: 0.5rem;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid var(--color-primary-faded-text);
      box-shadow: 0px 8px 14px 0px rgba(0, 0, 0, 0.2);
      padding: 1rem;
      z-index: 2;

      & h3 {
        font-weight: 700;
      }

      & .links {
        display: flex;
        flex-direction: column;

        & a {
          display: flex;
          gap: 0.3rem;
        }
      }
    }
  }
</style>
