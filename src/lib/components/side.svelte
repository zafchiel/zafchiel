<script>
  import { getExpanded } from "$lib/stores/expaded-store";

  const expanded = getExpanded();
</script>

<aside>
  <div class="holder">
    <h3 class:hidden={!$expanded}>Menu</h3>
    <nav>
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
    position: block;
    width: 300px;
  }

  .holder {
    position: sticky;
    top: 200px;
  }

  nav {
    display: flex;
    flex-direction: column;
    align-items: self-end;
    gap: 1rem;
  }

  h3 {
    text-align: center;
    margin-bottom: 1rem;
    transition: opacity 0.2s ease-in-out;
  }

  .hidden {
    opacity: 0;
  }

  a {
    text-transform: capitalize;
    text-decoration: none;
    color: inherit;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    background-color: slategray;
  }
</style>
