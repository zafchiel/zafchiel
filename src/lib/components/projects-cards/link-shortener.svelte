<script lang="ts">
  import imageSrc1 from "./images/link-shortener-1.webp?enhanced";
  import imageSrc2 from "./images/link-shortener-2.webp?enhanced";
</script>

<div class="gallery">
  <enhanced:img src={imageSrc2} alt="Flashcards preview screenshot" />
  <enhanced:img src={imageSrc1} alt="Flashcards preview screenshot" />
</div>

<p>
  Link shortener is simple aplication to shorten links and creating QR codes.
</p>
<p>
  It is possible to download your code as a PNG file in three formats (200x200,
  400x400 and 600x600).
</p>
<p>
  Shortened link is automatically copied to the clipboard for convinience of
  user.
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
</style>
