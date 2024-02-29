<script>
  import Arrow from "$lib/components/arrow.svelte";
</script>

<section id="home">
  <h1>
    <span class="thin_text">Zafchiel,</span>
    <span class="primary_color">Web</span> development enthusiast
  </h1>
  <a href="#about"
    >learn more

    <Arrow />
  </a>
</section>

<style>
  section {
    margin: 6rem 0 10rem 0;
  }

  span.thin_text {
    font-weight: 300;
  }

  span.primary_color {
    color: var(--color-primary);
  }

  a {
    font-size: var(--fs-sm);
    color: var(--color-primary-faded-text);
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }

  @media (max-width: 1024px) {
    section {
      padding: 1rem;
    }
  }
</style>
