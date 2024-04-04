<script lang="ts">
  import { intersectionObserverAction } from "$lib/utils/intersection-observer";
</script>

<section id="about" use:intersectionObserverAction>
  <h2>About</h2>
  <div class="heading">
    <enhanced:img class="img" src="../assets/avatar.png" alt="avatar square" />
    <h3>
      <a href="https://github.com/zafchiel"><span>Jakub Krasoń</span></a> | Front-End
      Developer
    </h3>
  </div>
  <p>
    I'm a passionate web developer driven to create user-friendly and visually
    stunning websites. Since embarking on my web development journey in 2023,
    I've honed my skills in HTML, CSS, JavaScript, and various frameworks.
    Explore my portfolio to see how I bring websites to life!
  </p>
</section>

<style>
  section {
    position: relative;
    text-wrap: balance;
    padding: 1rem;
    background: url("../assets/dot.svg");
  }

  .heading {
    display: flex;
    align-items: center;
    gap: 1rem;

    & .img {
      width: 100px;
      height: 100px;
      border-radius: var(--border-radius-md);
    }
  }

  p {
    font-size: var(--fs-md);
  }

  span {
    color: var(--color-primary);
  }
</style>
