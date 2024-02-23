<script>
  import MenuLink from "./menu-link.svelte";
  import { getExpanded } from "$lib/stores/expaded-store";

  const expanded = getExpanded();
</script>

<aside>
  <div class="holder">
    <h3 class:hidden={!$expanded}>Menu</h3>
    <nav>
      <MenuLink direction="intro" />
      <MenuLink direction="about" />
      <MenuLink direction="tech" />
      <MenuLink direction="projects" />
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
  }

  .hidden {
    opacity: 0;
  }
</style>
