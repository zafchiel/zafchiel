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

<div class="push_down" />
<div class="wrapper">
  <Side />
  <Main />
</div>

<style>
  .push_down {
    height: 300px;
  }

  .wrapper {
    display: flex;
    gap: 2rem;
  }
</style>
