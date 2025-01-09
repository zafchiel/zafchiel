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
    border-radius: 0.5rem;
    background-color: hsla(255, 100%, 100%, 0.1);
    padding: 1rem;
    border: none;
    cursor: pointer;
    margin-bottom: 1rem;
  }
  .description {
    font-size: var(--fs-sm);
    color: var(--color-faded-text);
  }
</style>
