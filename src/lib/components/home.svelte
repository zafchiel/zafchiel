<script>
  import Arrow from "$lib/assets/arrow.svelte";
</script>

<section id="home">
  <h1>Zafchiel, a web development enthusiast</h1>
  <div>
    <Arrow />
    <a href="#about">learn more</a>
  </div>
</section>

<style>
  section {
    margin: 6rem 0 10rem 0;
  }

  a {
    font-size: var(--fs-sm);
    text-decoration: none;
    color: #f8f8f866;
  }

  h1 + div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
</style>
