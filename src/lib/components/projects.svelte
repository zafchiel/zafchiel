<script lang="ts">
  import { intersectionObserverAction } from "$lib/utils/intersection-observer";
</script>

<section id="projects" use:intersectionObserverAction>
  <div class="dots"></div>
  <h2>Projects</h2>
  <div class="project">
    <a href=""></a>
  </div>
</section>

<style>
  section {
    position: relative;
  }

  .dots {
    position: absolute;
    width: 100%;
    height: 100%;
    scale: 1.03;
    background-image: url("../assets/dot.png");
    background-repeat: space;
    z-index: -1;
  }

  .project {
    border: 1px solid var(--color-primary);
    border-radius: var(--border-radius-sm);
    aspect-ratio: 1/1;
    width: 200px;
  }
</style>
