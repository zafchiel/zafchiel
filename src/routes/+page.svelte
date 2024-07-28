<script lang="ts">
  import Header from "$lib/components/header.svelte";
  import Main from "$lib/components/main.svelte";
  import Side from "$lib/components/side.svelte";
  import { getExpanded } from "$lib/stores/expaded-store";
  import { drawerOpenedStore } from "$lib/stores/drawer.store";

  let expanded = getExpanded();
  let scrolledOver100 = false;

  const handleScroll = () => {
    const scrollPosition =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollPosition >= 100 && !scrolledOver100) {
      expanded.set(true);
      scrolledOver100 = true;
    } else if (
      scrollPosition < 100 &&
      scrolledOver100 &&
      $drawerOpenedStore === false
    ) {
      expanded.set(false);
      scrolledOver100 = false;
    }
  };
</script>

<svelte:document on:scroll={handleScroll} />

<Header />
<div class="push_down"></div>
<div class="wrapper">
  <Side />
  <Main />
</div>

<style>
  .wrapper {
    display: grid;
    grid-template-columns: 250px minmax(650px, 860px);
    gap: 2.5rem;
    padding: 1.5rem;
  }

  .push_down {
    height: 40vh;
  }

  @media (max-width: 1024px) {
    .wrapper {
      grid-template-columns: auto;
      padding: 0;
    }
  }
</style>
