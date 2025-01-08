<script lang="ts">
  type Project = {
    path: string;
    metadata: {
      title: string;
      description: string;
      image: string;
      stack: string[];
    };
    content: any;
  };

  let { project }: { project: Project } = $props();

  let isOpen = $state(false);
</script>

<article>
  <button onclick={() => (isOpen = !isOpen)}>
    <h3>{project.metadata.title}</h3>
    <p class="description">{project.metadata.description}</p>
  </button>
  {#if isOpen}
    <project.content />
  {/if}
</article>

<style>
  button {
    border-radius: 0.5rem;
    background-color: hsla(255, 100%, 100%, 0.1);
    padding: 1rem;
    border: none;
    cursor: pointer;
    margin-bottom: 1rem;
  }
</style>
