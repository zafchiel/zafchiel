<script lang="ts">
  import Main from "$lib/components/main.svelte";
  import Side from "$lib/components/side.svelte";
  import { getExpanded } from "$lib/stores/expaded-store";

  let expanded = getExpanded();
  let scrolledOver100 = false;

  const handleScroll = () => {
    const scrollPosition =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollPosition >= 100 && !scrolledOver100) {
      expanded.set(true);
      scrolledOver100 = true;
    } else if (scrollPosition < 100 && scrolledOver100) {
      expanded.set(false);
      scrolledOver100 = false;
    }
  };
</script>

<svelte:document on:scroll={handleScroll} />

<!-- <div class="push_down" /> -->
<div class="wrapper">
  <div class="menu">
    <Side />
  </div>
  <Main />
</div>

<style>
  /* .push_down {
    height: 250px;
  } */

  .wrapper {
    display: grid;
    grid-template-columns: max-content minmax(500px, 640px);
    gap: 2rem;
    /* margin: 0 auto; */
    margin-top: 280px;
    padding: 1.5rem;
  }

  @media (max-width: 1000px) {
    .wrapper {
      grid-template-columns: 1fr;
      padding: 1rem;
    }

    .menu {
      display: none;
    }
  }
</style>
