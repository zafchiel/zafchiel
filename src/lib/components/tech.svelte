<script lang="ts">
  import { intersectionObserverAction } from "$lib/utils/intersection-observer";
  import Marquee from "./marquee.svelte";
</script>

<section id="tech" use:intersectionObserverAction>
  <h2>Tech</h2>
  <Marquee />
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas optio dolorum
    reprehenderit? Nesciunt sunt vitae debitis fuga quas error veritatis
    deserunt repellat. Aliquid ipsum atque officiis, a dolorem corrupti
    assumenda. Mollitia expedita minima nostrum iure! Laboriosam molestiae
    numquam eligendi saepe porro assumenda voluptatibus nobis harum illum
    asperiores itaque, aliquam consequatur nulla placeat nihil perferendis,
    ipsam optio pariatur aspernatur quibusdam vitae!
  </p>
</section>

<style>
  section {
    min-width: 0;
  }
</style>
