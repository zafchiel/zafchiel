<script lang="ts">
  import avatar from "$lib/assets/avatar.png";
  import jsIcon from "$lib/assets/tech/javascript.svg";
  import tsIcon from "$lib/assets/tech/typescript-icon.svg";
  import nextjsIcon from "$lib/assets/tech/nextjs.svg";
  import nodejsIcon from "$lib/assets/tech/nodejs-icon.svg";
  import pythonIcon from "$lib/assets/tech/python.svg";
  import reactIcon from "$lib/assets/tech/react.svg";
  import svelteIcon from "$lib/assets/tech/svelte-icon.svg";
  import svelteKitIcon from "$lib/assets/tech/svelte-kit.svg";

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
    <img
      src={jsIcon}
      alt="avatar"
      width="100"
      height="100"
      title="JavaScript"
    />
    <img
      src={tsIcon}
      alt="avatar"
      width="100"
      height="100"
      title="TypeScript"
    />
    <img
      src={nodejsIcon}
      alt="avatar"
      width="100"
      height="100"
      title="NodeJS"
    />
    <img
      src={svelteIcon}
      alt="avatar"
      width="100"
      height="100"
      title="Svelte"
    />
    <img
      src={svelteKitIcon}
      alt="avatar"
      width="100"
      height="100"
      title="Svelte Kit"
    />

    <img src={reactIcon} alt="avatar" width="100" height="100" title="React" />

    <img
      src={nextjsIcon}
      alt="avatar"
      width="100"
      height="100"
      title="NextJS"
    />
    <img
      src={pythonIcon}
      alt="avatar"
      width="100"
      height="100"
      title="Python"
    />
  </div>
</div>

<style>
  .slider {
    overflow: hidden;
    width: 100%;
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
    pointer-events: none;
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
