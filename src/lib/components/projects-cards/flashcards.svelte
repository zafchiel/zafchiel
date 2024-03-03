<script lang="ts">
  import imageSrc from "./images/flashcards.webp?enhanced";
</script>

<div class="gallery">
  <enhanced:img src={imageSrc} alt="Flashcards preview screenshot" />
  <enhanced:img src={imageSrc} alt="Flashcards preview screenshot" />
  <enhanced:img src={imageSrc} alt="Flashcards preview screenshot" />
  <enhanced:img src={imageSrc} alt="Flashcards preview screenshot" />
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
    gap: 0.5rem;
    height: 500px;

    & img {
      flex: 1;
      height: 100%;
      object-fit: cover;
    }

    & img:hover {
      flex: 5;
      border: 1px solid var(--color-primary);
    }
  }

  p {
    margin-bottom: 1rem;
  }
</style>
