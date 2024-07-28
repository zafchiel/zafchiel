<script lang="ts">
  import { intersectionObserverAction } from "$lib/utils/intersection-observer";
  import githubIcon from "$lib/assets/github-icon.svg";
  import mailIcon from "$lib/assets/mail-icon.svg";
</script>

<section id="contact" use:intersectionObserverAction>
  <h2>Contact</h2>
  <p>If you have any questions, feel free to contact me.</p>
  <a href="mailto:j.krason@proton.me" class="social_link">
    <img src={mailIcon} alt="mail logo" />
    <i>j.krason@proton.me</i>
  </a>
  <a href="https://github.com/zafchiel" target="_blank" class="social_link">
    <img src={githubIcon} alt="github logo" />
    <i>My github</i>
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

  .social_link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-primary);
    margin: 1rem 0.5rem;
  }
</style>
