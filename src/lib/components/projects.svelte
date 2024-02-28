<script lang="ts">
  import { intersectionObserverAction } from "$lib/utils/intersection-observer";
  import DotsBackground from "./dots-background.svelte";
  import LinkArrow from "./link-arrow.svelte";

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
  <a href="">
    <div class="wrapper">
      <p class="number">01</p>
      <div class="stack">
        <LinkArrow />
        <p>TypeScript</p>
        <p>SvelteKit</p>
      </div>
      <div class="project">
        <h3>Project Title</h3>
        <p class="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          eaque harum dolor quisquam voluptas eum.
        </p>
      </div>
    </div>
  </a>
</section>

<style>
  section {
    position: relative;
  }

  .wrapper {
    width: 100%;
    min-height: 200px;
    position: relative;
    border: 1px solid var(--color-primary);
    border: 1px solid color-mix(in srgb, var(--color-primary), transparent);
    padding: 2rem;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("https://images.unsplash.com/photo-1682686581221-c126206d12f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
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
    top: 150px;
    padding-right: 2rem;
    transition: 0.3s linear;

    & h3 {
      text-align: right;
      margin-bottom: 1rem;
    }
  }

  .wrapper:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url("https://images.unsplash.com/photo-1682686581221-c126206d12f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

    & p.number {
      opacity: 0;
    }

    & .project {
      top: 20px;
    }

    & .stack {
      opacity: 1;
    }
  }
</style>
