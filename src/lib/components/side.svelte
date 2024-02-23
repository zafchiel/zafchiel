<script>
  import { getExpanded } from "$lib/stores/expaded-store";

  const expanded = getExpanded();
</script>

<aside>
  <div class="holder">
    <h3 class:hidden={!$expanded}>Menu</h3>
    <nav class:expanded={$expanded}>
      <a href="#intro">Intro</a>
      <a href="#about">About</a>
      <a href="#tech">Tech</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  </div>
</aside>

<style>
  aside {
    /* position: block; */
    width: 300px;
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
    min-width: 260px;
  }

  a {
    text-transform: capitalize;
    text-decoration: none;
    color: inherit;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    background-color: slategray;
    min-width: 0;

    transition: 0.3s ease-in-out;
  }
</style>
