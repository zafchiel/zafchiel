<script lang="ts">
  import imageSrc1 from "./images/flashcards-1.webp?enhanced";
  import imageSrc2 from "./images/flashcards-2.webp?enhanced";
  import imageSrc3 from "./images/flashcards-3.webp?enhanced";
</script>

<div class="gallery">
  <enhanced:img
    src={imageSrc2}
    alt="Flashcards home page preview screenshot"
    class="left_image"
  />
  <enhanced:img src={imageSrc1} alt="Flashcards deck page preview screenshot" />
  <enhanced:img
    src={imageSrc3}
    alt="Flashcards decks page preview screenshot"
    class="right_image"
  />
</div>

<p>
  Flashcards is a web application that allows users to <span class="bold"
    >create</span
  >, <span class="bold">edit</span>, and <span class="bold">delete</span>
  flashcards and decks of flashcards. Users can <span class="bold">share</span>
  their decks with others and <span class="bold">search</span> for public decks.
  With a single click, users can add a public deck to their collection.
</p>
<p class="bold">Technologies I used:</p>
<ul>
  <li>
    <div>
      <a href="https://kit.svelte.dev/" target="_blank" class="mark bold"
        >SvelteKit</a
      >
      with
      <a
        href="https://www.typescriptlang.org/"
        target="_blank"
        class="mark bold">TypeScript</a
      > - solid fullstack framework with excelent developer experience
    </div>
  </li>
  <li>
    <div>
      <a href="https://www.postgresql.org/" target="_blank" class="mark bold"
        >PostgreSQL</a
      >
      with
      <a href="https://orm.drizzle.team/" target="_blank" class="mark bold"
        >drizzleORM</a
      > - battle-tested database with typesafe SQL-like ORM
    </div>
  </li>
  <li>
    <div>
      <a href="https://tailwindcss.com/" target="_blank" class="mark bold"
        >TailwindCSS</a
      >
      with
      <a href="https://www.skeleton.dev/" target="_blank" class="mark bold"
        >Skeleton</a
      > - fast and efficient way to go about styling
    </div>
  </li>
  <li>
    <div>
      <a href="https://lucia-auth.com/" target="_blank" class="mark bold"
        >LuciaAuth</a
      > - utilities making authorization a breze
    </div>
  </li>
</ul>

<p>
  Flashcards are fully operatable with keyboard and I use it myself for
  learning.
</p>

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
