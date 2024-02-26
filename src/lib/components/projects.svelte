<script lang="ts">
  import { intersectionObserverAction } from "$lib/utils/intersection-observer";
  import DotsBackground from "./dots-background.svelte";

  const projects = [
    {
      title: "Flashcards/HUH",
      description: "A flashcard app for learning anything you want.",
      imgage: "flashcards.jpg",
    },
  ];
</script>

<section id="projects" use:intersectionObserverAction>
  <DotsBackground />
  <h2>Projects</h2>
  <div class="project">
    <a href="">
      <h3>Project Title</h3>
    </a>
  </div>
</section>

<style>
  section {
    position: relative;
  }

  .project {
    border: 1px solid var(--color-primary);
    border: 1px solid color-mix(in srgb, var(--color-primary), transparent);
    margin: 0 1rem;
    background-color: var(--color-base-850);
  }

  h3 {
    text-align: right;
  }
</style>
