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
  import sqlIcon from "$lib/assets/tech/sql.svg";

  const duplicateSlide = (node: HTMLElement) => {
    const slide = node.querySelector(".slide");
    if (slide) {
      Array.from(slide.children).forEach((child) => {
        const clone = child.cloneNode() as HTMLElement;
        clone.setAttribute("aria-hidden", "true");
        slide.appendChild(clone);
      });
    }
  };
</script>

<div class="slider" use:duplicateSlide>
  <div class="slide">
    <img src={sqlIcon} alt="avatar" width="100" height="100" title="SQL" />
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
    display: flex;
    mask: linear-gradient(
      90deg,
      transparent,
      white 20%,
      white 80%,
      transparent
    );
  }

  .slide {
    --spacing: 2rem;

    animation: sliding 15s linear infinite;
    display: flex;
    gap: var(--spacing);
    width: max-content;
  }

  .slider:hover .slide {
    animation-play-state: paused;
  }

  @keyframes sliding {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-50% - calc(var(--spacing) / 2)));
    }
  }
</style>
