<script lang="ts">
  import imageSrc1 from "./images/draw-dark.webp?enhanced";
  import imageSrc2 from "./images/draw-light.webp?enhanced";
</script>

<div class="gallery">
  <enhanced:img
    src={imageSrc2}
    alt="Flashcards preview screenshot"
    class="left_image"
  />
  <enhanced:img
    src={imageSrc1}
    alt="Flashcards preview screenshot"
    class="right_image"
  />
</div>

<p>
  Drawing board is a react app for <b>drawing and wireframing</b>. It's build
  <b>from scratch</b>, without using any libraries to manipualte canvas.
</p>
<p>
  It's a simple drawing board, still <b>in development</b>, with a few tools
  like pen, eraser, and color picker. You can also save your drawing as an
  image.
</p>

<p class="bold">Technologies I used:</p>
<ul>
  <li>
    <div>
      <a href="https://react.dev/" target="_blank" class="mark">React</a>
      with
      <a
        href="https://www.typescriptlang.org/"
        target="_blank"
        class="mark bold">TypeScript</a
      >
    </div>
  </li>
  <li>
    <div>
      <a href="https://tailwindcss.com/" target="_blank" class="mark"
        >TailwindCSS</a
      >
      with
      <a href="https://ui.shadcn.com/" target="_blank" class="mark">shadcnUI</a>
      - efficient way to go about styling
    </div>
  </li>
</ul>

<style>
  .gallery {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    width: 100%;
    height: 300px;
    margin-bottom: 1.5rem;

    & .left_image {
      border-radius: var(--border-radius-md) 0 0 var(--border-radius-md);
    }

    & .right_image {
      border-radius: 0 var(--border-radius-md) var(--border-radius-md) 0;
    }

    & picture,
    img {
      flex: 1;
      height: 100%;
      object-fit: cover;
      transition: all 0.8s ease;

      &:hover {
        flex: 10;
      }
    }
  }

  p {
    margin-bottom: 1rem;
  }

  .mark {
    color: var(--color-primary);
    font-weight: bold;
  }

  ul {
    list-style: none;

    & li {
      margin: 1rem 0;
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }

    & li::before {
      content: "";
      display: block;
      width: 0.5rem;
      height: 0.5rem;
      background-color: var(--color-primary);
      border-radius: 50%;
      flex-shrink: 0;
    }

    & span {
      color: var(--color-primary);
      font-weight: 600;
    }
  }

  @media (width < 800px) {
    .gallery {
      flex-direction: column;
      height: auto;
    }
  }
</style>
