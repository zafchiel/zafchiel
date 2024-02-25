<script lang="ts">
  import { intersectionObserverAction } from "$lib/utils/intersection-observer";
</script>

<section id="contact" use:intersectionObserverAction>
  <h2>Contact</h2>
  <div></div>
</section>

<style>
  div {
    height: 300px;
    background-color: #222;
    border-radius: 4px;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
</style>
