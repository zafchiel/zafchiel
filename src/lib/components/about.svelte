<script lang="ts">
  import { intersectionObserverAction } from "$lib/utils/intersection-observer";
</script>

<section id="about" use:intersectionObserverAction>
  <h2>About</h2>
  <div></div>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, unde!
    Ad illo similique perferendis atque placeat. Voluptatum fuga quam temporibus
    consectetur neque fugit nobis dolor, dolorum quisquam sequi quos optio.
    Harum provident velit eveniet dolor, voluptate minima aliquam cupiditate,
    temporibus odio animi facilis similique voluptatum eius saepe nemo optio.
    Deserunt asperiores amet, quod officia minima magni provident veritatis nisi
    ipsam.
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
