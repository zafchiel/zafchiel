<script lang="ts">
  import { activeLinkStore } from "$lib/stores/active-link-store";
  import { getExpanded } from "$lib/stores/expaded-store";
  import { onMount } from "svelte";
  import HamburgerMenu from "./hamburger-menu.svelte";
  import { drawerOpenedStore } from "$lib/stores/drawer.store";

  const expanded = getExpanded();

  let isNavVisible = $state(false);
  let navComponent: HTMLElement = $state();

  let scrollDirection: "down" | "up" = $state("down");
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
    navComponent.setAttribute("aria-hidden", "true");
  };
</script>

<header
  aria-hidden={scrollDirection === "up" ? "false" : "true"}
  class:hidden={!$expanded || $drawerOpenedStore}
  class:header_visible={scrollDirection === "up"}
  class:nav_visible={isNavVisible}
>
  <h3>Zafchiel</h3>
  <HamburgerMenu
    {isNavVisible}
    on:nav-state={(e) => {
      isNavVisible = e.detail;
      navComponent.setAttribute("aria-hidden", (!e.detail).toString());
    }}
  />

  <nav
    class:nav_visible={isNavVisible}
    bind:this={navComponent}
    aria-hidden="true"
  >
    <a
      href="#home"
      onclick={(e) => {
        e.preventDefault();
        window.scrollTo(0, 0);
        isNavVisible = false;
      }}>Home</a
    >
    <a
      href="#about"
      onclick={handleLinkClick}
      class:active={$activeLinkStore === "about"}>About</a
    >
    <a
      href="#tech"
      onclick={handleLinkClick}
      class:active={$activeLinkStore === "tech"}>Tech</a
    >
    <a
      href="#projects"
      onclick={handleLinkClick}
      class:active={$activeLinkStore === "projects"}>Projects</a
    >
    <a
      href="#contact"
      onclick={handleLinkClick}
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

    &.header_visible {
      transform: translateY(0);
    }

    & h3 {
      text-transform: lowercase;
    }
  }

  nav {
    position: absolute;
    top: 10%;
    left: 0;
    right: 0;
    bottom: 0;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    font-size: var(--fs-lg);
    overflow: hidden;

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
