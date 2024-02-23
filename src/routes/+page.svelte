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
  <Side />
  <Main />
</div>

<style>
  .wrapper {
    display: grid;
    grid-template-columns: 250px minmax(650px, 760px);
    gap: 2rem;
    margin: 280px auto 0 auto;
    padding: 1.5rem;
    width: fit-content;
  }

  @media (max-width: 1000px) {
    .wrapper {
      grid-template-columns: 1fr;
      padding: 1rem;
    }
  }
</style>
