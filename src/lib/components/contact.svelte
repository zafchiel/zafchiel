<script lang="ts">
  import { intersectionObserverAction } from "$lib/utils/intersection-observer";
  import githubIcon from "$lib/assets/github-icon.svg";
</script>

<section id="contact" use:intersectionObserverAction>
  <h2>Contact</h2>
  <p>
    If you have any questions, feel free to contact me at <span
      class="primary_color">j.krason@proton.me</span
    >.
  </p>
  <a href="https://github.com/zafchiel" target="_blank">
    <img src={githubIcon} alt="github logo" />
    <span>My github</span>
  </a>
</section>

<style>
  section {
    padding: 1rem;
    margin-bottom: 5rem;
  }

  p {
    margin: 1rem 0;
  }

  .primary_color {
    color: var(--color-primary);
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-primary);
  }
</style>
