<script>
  import { activeLinkStore } from "$lib/stores/active-link-store";
  import { getExpanded } from "$lib/stores/expaded-store";

  const expanded = getExpanded();
</script>

<aside>
  <div class="holder">
    <h3 class:hidden={!$expanded}>Menu</h3>
    <nav class:expanded={$expanded}>
      <a
        href="#home"
        on:click={(e) => {
          e.preventDefault();
          window.scrollTo(0, 0);
        }}>Home</a
      >
      <a href="#about" class:active={$activeLinkStore === "about"}>About</a>
      <a href="#tech" class:active={$activeLinkStore === "tech"}>Tech</a>
      <a href="#projects" class:active={$activeLinkStore === "projects"}
        >Projects</a
      >
      <a href="#contact" class:active={$activeLinkStore === "contact"}
        >Contact</a
      >
    </nav>
  </div>
  <!-- <div class="glow" /> -->
</aside>

<style>
  aside {
    position: relative;
  }

  .holder {
    position: sticky;
    top: 150px;
  }

  h3 {
    text-align: center;
    margin-bottom: 1rem;
    text-transform: uppercase;
    transition: opacity 0.2s ease-in-out;
    color: var(--color-primary);
  }

  .hidden {
    opacity: 0;
  }

  nav {
    display: flex;
    flex-direction: column;
    align-items: self-end;
    gap: 1rem;
  }

  nav.expanded a {
    min-width: 250px;
    background-color: transparent;
    /* border: 1px solid var(--color-primary); */
    color: inherit;
  }

  nav.expanded a.active {
    background-color: var(--color-primary);
    color: #151515;
  }

  a {
    text-transform: capitalize;
    color: black;
    padding: 0.5rem 1.5rem;
    border-radius: var(--border-radius-sm);
    background-color: var(--color-text);
    min-width: 0;
    transition: 0.3s ease-in-out;
    font-weight: 600;
    font-size: (var(--fs-md));
  }

  nav:has(a:hover) a:not(:hover) {
    filter: blur(2px);
    scale: 0.97;
  }
  nav:has(a:hover) a:hover {
    filter: none;
    scale: 1.03;
  }

  .glow {
    position: absolute;
    top: 0;
    right: -10px;
    width: 2px;
    height: 100%;
    background: linear-gradient(
      rgba(0, 0, 0, 0) 0%,
      var(--color-primary) 10%,
      rgba(0, 0, 0, 0) 95%
    );
  }

  @media (max-width: 1024px) {
    aside {
      display: none;
    }
  }
</style>
