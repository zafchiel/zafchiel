<script>
  import Arrow from "$lib/assets/arrow.svelte";
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
    text-decoration: none;
    color: var(--color-primary);
    opacity: 0.7;
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }
</style>
