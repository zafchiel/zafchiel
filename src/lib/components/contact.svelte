<script lang="ts">
  import { intersectionObserverAction } from "$lib/utils/intersection-observer";
</script>

<section id="contact" use:intersectionObserverAction>
  <h2>Contact</h2>
  <div>
    <p>
      If you have any questions or would like to work together, feel free to
      contact me at <span class="primary_color">example@mail.com</span>.
    </p>
    <p>
      <a href="https://github.com/zafchiel" target="_blank"
        ><span class="primary_color">Github</span></a
      >
    </p>
  </div>
</section>

<style>
  section {
    padding: 1rem;
  }

  .primary_color {
    color: var(--color-primary);
  }
</style>
