<script lang="ts">
  let { children, images } = $props();
  console.log(images);
</script>

<div class="project_layout">
  <div class="gallery">
    {#each images as image}
      <img src={image} alt="Project preview" class="gallery_image" />
    {/each}
  </div>
  {@render children()}
</div>

<style>
  .gallery {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    width: 100%;
    height: 300px;
    margin-bottom: 1.5rem;

    & img {
      flex: 1;
      height: 100%;
      object-fit: cover;
      transition: all 0.8s ease;

      &:hover {
        flex: 10;
      }
    }
  }
  @media (width < 800px) {
    .gallery {
      flex-direction: column;
      height: auto;
    }
  }
  .project_layout {
    padding: 2rem;
  }
</style>
