<script lang="ts">
  import imageSrc1 from "./images/flashcards-1.webp?enhanced";
  import imageSrc2 from "./images/flashcards-2.webp?enhanced";
  import imageSrc3 from "./images/flashcards-3.webp?enhanced";
</script>

<div class="gallery">
  <enhanced:img src={imageSrc2} alt="Flashcards preview screenshot" />
  <enhanced:img src={imageSrc1} alt="Flashcards preview screenshot" />
  <enhanced:img src={imageSrc3} alt="Flashcards preview screenshot" />
</div>

<p>
  Flashcards is a web application that allows users to create, edit, and delete
  flashcards. Users can also create and delete decks of flashcards. The
  application uses a PostgreSQL database to store the flashcards and decks. The
  application is built using SvelteKit and TypeScript.
</p>
<p>
  It is possible to share your flashcards decks with other users and search for
  decks that are marked as public. It is possible to copy a deck to your list
  with one click.
</p>
<p>
  User can authenticate using Google/Github account or with username and
  password.
</p>

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

  @media (width < 800px) {
    .gallery {
      flex-direction: column;
      height: auto;
    }
  }
</style>
