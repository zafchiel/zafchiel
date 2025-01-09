<script lang="ts">
  let { children, images } = $props();
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
  .project_layout {
    padding: 1rem;
  }

  .gallery {
    display: flex;
    gap: 0.5rem;
    height: 300px;
    margin-bottom: 1.5rem;
  }

  .gallery_image {
    max-width: 100%;
    object-fit: cover;
    min-width: 0;

    &:first-of-type {
      border-radius: 1rem 0 0 1rem;
    }

    &:last-of-type {
      border-radius: 0 1rem 1rem 0;
    }
  }
</style>
