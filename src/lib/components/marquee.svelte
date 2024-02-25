<script lang="ts">
  import avatar from "$lib/assets/avatar.png";

  const duplicateSlide = (node: HTMLElement) => {
    const slide = node.querySelector(".slide");

    if (slide) {
      node.appendChild(slide.cloneNode(true));
      node.appendChild(slide.cloneNode(true));
    }
  };
</script>

<div class="slider" use:duplicateSlide>
  <div class="slide">
    <img src={avatar} alt="avatar" width="100" height="100" />
    <img src={avatar} alt="avatar" width="100" height="100" />
    <img src={avatar} alt="avatar" width="100" height="100" />
  </div>
</div>

<style>
  .slider {
    overflow: hidden;
    max-width: 100%;
    white-space: nowrap;
    padding: 1rem 0;
    position: relative;
  }

  .slider::before,
  .slider::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 80px;
    top: 0;
    z-index: 3;
    /* opacity: 0.8; */
  }

  .slider::before {
    left: 0;
    background: linear-gradient(
      to right,
      var(--color-base-900),
      rgba(0, 0, 0, 0)
    );
  }

  .slider::after {
    right: 0;
    background: linear-gradient(
      to left,
      var(--color-base-900),
      rgba(0, 0, 0, 0)
    );
  }

  .slide {
    display: inline-block;
    animation: sliding 10s linear infinite;
  }

  .slide > * {
    display: inline-block;
    margin: 0 2.5rem;
  }

  .slider:hover .slide {
    animation-play-state: paused;
  }

  @keyframes sliding {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
</style>
