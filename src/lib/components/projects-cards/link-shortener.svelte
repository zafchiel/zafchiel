<script lang="ts">
  import imageSrc1 from "./images/link-shortener-1.webp?enhanced";
  import imageSrc2 from "./images/link-shortener-2.webp?enhanced";
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
  Link shortener is a simple application for <b>shortening links</b>
  and <b>creating QR</b>
  codes. Shortened links are <b>automatically copied</b> to the clipboard for your
  convenience.
</p>
<p>
  You can <b>download</b> your QR code as a
  <b>PNG file</b> in three sizes: 200x200, 400x400, and 600x600.
</p>

<p class="bold">Technologies I used:</p>
<ul>
  <li>
    <div>
      <a href="https://react.dev/" target="_blank" class="mark">React</a>
      with
      <a href="https://nextjs.org/" target="_blank" class="mark">NextJS</a>
      - fast meta framework on top of React
    </div>
  </li>
  <li>
    <div>
      <a href="https://redis.io/" target="_blank" class="mark">Redis</a> - blazingly
      fast in-memory database
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
