<script lang="ts">
  import { intersectionObserverAction } from "$lib/utils/intersection-observer";
</script>

<section id="about" use:intersectionObserverAction>
  <h2>About</h2>
  <div class="card">
    <enhanced:img class="img" src="../assets/avatar.png" />
    <p class="one">
      Hello there! I'm <span>Jakub</span>, a passionate and innovative web
      developer dedicated to crafting seamless and visually appealing digital
      experiences.
    </p>
    <p class="two">
      My journey in the world of web development began in 2023. Since then, I've
      immersed myself in honing my skills in HTML, CSS, JavaScript, and various
      frameworks to build responsive and dynamic websites.
    </p>
  </div>
</section>

<style>
  section {
    position: relative;
    text-wrap: balance;
    padding: 1rem;
    background: url("../assets/dot.svg");
  }

  .card {
    display: grid;
    grid-template-columns: min-content 1fr;

    gap: 0.5rem;
  }

  @media (width < 480px) {
    .one {
      grid-area: 1 / 1 / 2 / 3;
    }
    .two {
      grid-area: 2 / 1 / 3 / 3;
    }
    .img {
      width: 200px !important;
      height: 200px !important;
    }
  }

  .card .img {
    width: 100px;
    height: 100px;
    border-radius: var(--border-radius-md);
  }

  .two {
    grid-column: 1 / 3;
  }

  p {
    font-size: var(--fs-md);
  }

  span {
    color: var(--color-primary);
  }
</style>
