<script lang="ts">
  import { activeLinkStore } from "$lib/stores/active-link-store";
  import { getExpanded } from "$lib/stores/expaded-store";
  import { onMount } from "svelte";

  const expanded = getExpanded();

  let isNavVisible = false;

  let scrollDirection: "down" | "up" = "down";
  let lastKnownScrollPosition = 0;

  onMount(() => {
    const getDirection = () => {
      const scrollToTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;

      const scrollDifference = Math.abs(scrollToTop - lastKnownScrollPosition);

      if (scrollDifference > 15) {
        if (scrollToTop > lastKnownScrollPosition) {
          scrollDirection = "down";
        } else {
          scrollDirection = "up";
        }
      }

      lastKnownScrollPosition = scrollToTop;
    };

    window.addEventListener("scroll", getDirection);

    return () => {
      window.removeEventListener("scroll", getDirection);
    };
  });

  const handleLinkClick = () => {
    isNavVisible = false;
  };
</script>

<header
  class:hidden={!$expanded}
  class:down={scrollDirection === "down"}
  class:nav_visible={isNavVisible}
>
  <h3>Zafchiel</h3>
  <button on:click={() => (isNavVisible = !isNavVisible)}>BURG</button>
  <nav class:nav_visible={isNavVisible}>
    <a
      href="#home"
      on:click={(e) => {
        e.preventDefault();
        window.scrollTo(0, 0);
        isNavVisible = false;
      }}>Home</a
    >
    <a
      href="#about"
      on:click={handleLinkClick}
      class:active={$activeLinkStore === "about"}>About</a
    >
    <a
      href="#tech"
      on:click={handleLinkClick}
      class:active={$activeLinkStore === "tech"}>Tech</a
    >
    <a
      href="#projects"
      on:click={handleLinkClick}
      class:active={$activeLinkStore === "projects"}>Projects</a
    >
    <a
      href="#contact"
      on:click={handleLinkClick}
      class:active={$activeLinkStore === "contact"}>Contact</a
    >
  </nav>
</header>

<style>
  .hidden {
    opacity: 0;
  }

  header {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
    bottom: 90%;
    display: none;
    justify-content: space-between;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(16px);
    transition: 0.5s ease-in-out;
    transform: translateY(-100%);

    &.nav_visible {
      bottom: 0;
    }

    &.down {
      transform: translateY(0);
    }

    & h3 {
      text-transform: lowercase;
    }

    & button {
      z-index: 2;
      height: fit-content;
      padding: 0.5rem;
    }
  }

  nav {
    position: absolute;
    inset: 0;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    font-size: var(--fs-lg);

    &.nav_visible {
      display: flex;
    }

    & a {
      padding-block: 1rem;

      &.active {
        text-decoration: underline var(--color-primary);
      }
    }
  }

  @media (max-width: 1024px) {
    header {
      display: flex;
    }
  }
</style>
