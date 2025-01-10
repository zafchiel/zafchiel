<script lang="ts">
  import Modal from "./modal.svelte";

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

  let showModal = $state(false);
</script>

<article>
  <button onclick={() => (showModal = !showModal)}>
    <h3>{project.metadata.title}</h3>
    <p class="description">{project.metadata.description}</p>
    <div class="stack">
      {#each project.metadata.stack as stack}
        <span>{stack}</span>
      {/each}
    </div>
  </button>
  <Modal bind:showModal>
    {#snippet header()}
      <h4>{project.metadata.title}</h4>
      <p class="description">{project.metadata.description}</p>
    {/snippet}
    <project.content />
  </Modal>
</article>

<style>
  button {
    border-radius: 2px;
    background-color: #f2cdcd20;
    padding: 1rem;
    border: none;
    cursor: pointer;
    margin-bottom: 1rem;
    text-align: left;
  }

  h3 {
    font-size: var(--fs-lg);
  }

  .description {
    font-size: var(--fs-sm);
  }

  .stack {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    color: var(--color-faded-text);
    margin-top: 0.5rem;
  }
</style>
