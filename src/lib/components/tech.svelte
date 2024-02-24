<script lang="ts">
  import { intersectionObserverAction } from "$lib/utils/intersection-observer";
  // import type { Action } from "svelte/action";

  // let isIntersecting = false;

  // const observerAction: Action = (node) => {
  //   if (window.IntersectionObserver) {
  //     const observer = new IntersectionObserver(
  //       (entries) => {
  //         console.log(node.id);
  //         isIntersecting = entries[0].isIntersecting;
  //       },
  //       {
  //         threshold: 0.5,
  //       }
  //     );

  //     observer.observe(node);

  //     return {
  //       destroy() {
  //         observer.unobserve(node);
  //       },
  //     };
  //   }
  // };
</script>

<section id="tech" use:intersectionObserverAction>
  <h2>Tech</h2>
  <div></div>
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
  div {
    height: 300px;
    background-color: sienna;
    border-radius: 4px;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
</style>
