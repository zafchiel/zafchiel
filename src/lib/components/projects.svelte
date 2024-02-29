<script lang="ts">
  import { intersectionObserverAction } from "$lib/utils/intersection-observer";
  import Triangle from "./triangle.svelte";

  const projects = [
    {
      title: "Flashcards/HUH",
      description:
        "Distinctio dignissimos quo deleniti laborum laboriosam saepe quibusdam. Et ea neque et deserunt omnis nihil explicabo. Quos debitis quis et aut recusandae ut maiores.",
      image: "/fhuh.webp",
      stack: ["TypeScript", "SvelteKit", "PostgreSQL"],
    },
    {
      title: "Flashcards/HUH",
      description:
        "Distinctio dignissimos quo deleniti laborum laboriosam saepe quibusdam. Et ea neque et deserunt omnis nihil explicabo. Quos debitis quis et aut recusandae ut maiores.",
      image: "/fhuh.webp",
      stack: ["TypeScript", "SvelteKit", "PostgreSQL"],
    },
    {
      title: "Flashcards/HUH",
      description:
        "Distinctio dignissimos quo deleniti laborum laboriosam saepe quibusdam. Et ea neque et deserunt omnis nihil explicabo. Quos debitis quis et aut recusandae ut maiores.",
      image: "/fhuh.webp",
      stack: ["TypeScript", "SvelteKit", "PostgreSQL"],
    },
    {
      title: "Flashcards/HUH",
      description:
        "Distinctio dignissimos quo deleniti laborum laboriosam saepe quibusdam. Et ea neque et deserunt omnis nihil explicabo. Quos debitis quis et aut recusandae ut maiores.",
      image: "/fhuh.webp",
      stack: ["TypeScript", "SvelteKit", "PostgreSQL"],
    },
  ];
</script>

<section id="projects" use:intersectionObserverAction>
  <h2>Projects</h2>
  <div class="display_projects">
    {#each projects as project, index}
      <a href="">
        <div class="wrapper">
          <img src={project.image} />
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
      </a>
    {/each}
  </div>
</section>

<style>
  img {
    position: absolute;
    inset: 0;
    object-fit: cover;
    max-width: 100%;
    z-index: -1;
  }

  section {
    position: relative;
    overflow: hidden;
    padding: 1rem 0;
    background: url("../assets/dot.svg");
  }

  .display_projects {
    display: flex;
    flex-direction: column;
    gap: 5rem;
  }

  .wrapper {
    width: 100%;
    height: 250px;
    position: relative;
    border: 1px solid var(--color-primary);
    border: 1px solid color-mix(in srgb, var(--color-primary), transparent);
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
    top: 200px;
    right: 2rem;
    left: 2rem;
    transition: 0.3s ease-in-out;

    & h3 {
      text-align: right;
      margin-bottom: 1rem;
    }
  }

  .wrapper:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7));

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

  a:focus .wrapper {
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7));

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
