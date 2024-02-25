<script lang="ts">
  import { intersectionObserverAction } from "$lib/utils/intersection-observer";
</script>

<section id="projects" use:intersectionObserverAction>
  <div class="dots"></div>
  <h2>Projects</h2>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni esse minus
    eum ratione ipsam unde minima amet incidunt facere, aperiam reiciendis nam
    officia similique nihil! Necessitatibus vero tempora aliquid accusantium!
    Provident quibusdam rem nobis quis soluta! Doloribus nobis ad est quo
    impedit cupiditate omnis in sunt, temporibus eum recusandae nemo suscipit,
    tempore corporis excepturi neque? Dolorum, quas? Aliquam, reiciendis error.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsum impedit
    omnis culpa, eos laborum illo libero earum eius reiciendis beatae cum,
    consectetur distinctio quaerat voluptatem odit reprehenderit magni quam?
  </p>
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
</style>
