<script lang="ts">
  import imageSrc1 from "./images/link-shortener-1.webp?enhanced";
  import imageSrc2 from "./images/link-shortener-2.webp?enhanced";
</script>

<div class="gallery">
  <enhanced:img src={imageSrc2} alt="Flashcards preview screenshot" />
  <enhanced:img src={imageSrc1} alt="Flashcards preview screenshot" />
</div>

<p>
  Link shortener is a simple application for <span class="bold"
    >shortening links</span
  >
  and <span class="bold">creating QR</span>
  codes. Shortened links are <span class="bold">automatically copied</span> to the
  clipboard for your convenience.
</p>
<p>
  You can <span class="bold">download</span> your QR code as a
  <span class="bold">PNG file</span> in three sizes: 200x200, 400x400, and 600x600.
</p>

<p class="bold">Technologies I used:</p>
<ul>
  <li>
    <div>
      <a href="https://react.dev/" target="_blank" class="mark bold">React</a>
      with
      <a href="https://nextjs.org/" target="_blank" class="mark bold">NextJS</a>
      - fast meta framework on top of React
    </div>
  </li>
  <li>
    <div>
      <a href="https://redis.io/" target="_blank" class="mark bold">Redis</a> - blazingly
      fast in-memory database
    </div>
  </li>
  <li>
    <div>
      <a href="https://tailwindcss.com/" target="_blank" class="mark bold"
        >TailwindCSS</a
      >
      with
      <a href="https://ui.shadcn.com/" target="_blank" class="mark bold"
        >shadcnUI</a
      > - efficient way to go about styling
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

  .bold {
    font-weight: bold;
  }

  .mark {
    color: var(--color-primary);
  }

  ul {
    list-style: none;

    & li {
      margin: 1rem 0;
      display: flex;
      gap: 0.5rem;
    }

    & li::before {
      content: "";
      background: url("/list-triangle.svg") no-repeat;
      background-size: cover;
      display: block;
      width: 1rem;
      height: 1rem;
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
