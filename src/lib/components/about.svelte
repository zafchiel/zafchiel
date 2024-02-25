<script lang="ts">
  import { intersectionObserverAction } from "$lib/utils/intersection-observer";
</script>

<section id="about" use:intersectionObserverAction>
  <h2>About</h2>
  <div></div>
  <p>
    Hello there! I'm Jakub, a passionate and innovative web developer dedicated
    to crafting seamless and visually appealing digital experiences. With a
    strong foundation in front-end and back-end technologies, I thrive on
    turning creative ideas into functional, user-friendly websites.
  </p>
  <p>
    My journey in the world of web development began in 2023. Since then, I've
    immersed myself in the ever-evolving tech landscape, honing my skills in
    HTML, CSS, JavaScript, and various frameworks to build responsive and
    dynamic websites.
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
