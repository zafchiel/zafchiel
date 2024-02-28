<script lang="ts">
  import { activeLinkStore } from "$lib/stores/active-link-store";
  import { getExpanded } from "$lib/stores/expaded-store";
  import { onMount } from "svelte";

  const expanded = getExpanded();

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
</script>

<header class:hidden={!$expanded} class:down={scrollDirection === "down"}>
  <h3>Zafchiel</h3>
  <p>BURG</p>
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
    display: none;
    justify-content: space-between;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(10px);
    transition: 0.3s ease-in-out;
    transform: translateY(-100%);

    &.down {
      transform: translateY(0);
    }

    & h3 {
      text-transform: lowercase;
    }
  }

  @media (max-width: 1024px) {
    header {
      display: flex;
    }
  }
</style>
