<script lang="ts">
  import { store } from "$lib/stores/global-store.svelte";
  import { expanded } from "$lib/stores/expaded-store.svelte";
</script>

<section>
  <div class="holder">
    <h3 class={{ hidden: !expanded.value }}>Menu</h3>
    <nav class={{ expanded: expanded.value }}>
      <a
        href="#home"
        onclick={(e) => {
          e.preventDefault();
          window.scrollTo(0, 0);
        }}>Home</a
      >
      <a href="#about" class:active={store.activeLink === "about"}>About</a>
      <a href="#tech" class:active={store.activeLink === "tech"}>Tech</a>
      <a href="#projects" class:active={store.activeLink === "projects"}
        >Projects</a
      >
      <a href="#contact" class:active={store.activeLink === "contact"}
        >Contact</a
      >
    </nav>
    <div class={[!expanded.value && "hidden", "contact_info"]}>
      <a href="mailto:j.krason@proton.me">j.krason@proton.me</a>
      <a href="https://github.com/zafchiel" target="_blank">Github</a>
    </div>
  </div>
</section>

<style>
  .hidden {
    opacity: 0;
  }

  section {
    position: relative;
  }

  .holder {
    position: sticky;
    top: 150px;
  }

  section h3 {
    text-align: center;
    margin-bottom: 1rem;
    text-transform: uppercase;
    transition: opacity 0.2s ease-in-out;
    color: var(--color-primary);
  }

  section nav {
    display: flex;
    flex-direction: column;
    align-items: self-end;
    gap: 1rem;
  }

  nav.expanded a {
    min-width: 250px;
    background-color: transparent;
    color: inherit;
  }

  nav.expanded a.active {
    background-color: var(--color-primary);
    color: #151515;
  }

  nav a {
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
    filter: blur(1.5px);
    scale: 0.97;
  }
  nav:has(a:hover) a:hover {
    filter: none;
    scale: 1.03;
  }

  .contact_info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    justify-content: flex-end;
    margin-top: 2rem;
    color: var(--color-faded-text);
  }

  @media (max-width: 1024px) {
    section {
      display: none;
    }
  }
</style>
