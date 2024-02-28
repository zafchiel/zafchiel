<script>
  import Arrow from "$lib/components/arrow.svelte";
</script>

<section id="home">
  <h1>Zafchiel, a web development enthusiast</h1>
  <a href="#about"
    >learn more

    <Arrow />
  </a>
</section>

<style>
  section {
    margin: 6rem 0 10rem 0;
  }

  a {
    font-size: var(--fs-sm);
    color: var(--color-primary-faded-text);
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }
</style>
