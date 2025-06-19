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
    <h4>{project.metadata.title}</h4>
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
    position: relative;
    border-radius: 8px;
    background-color: #31324418;
    backdrop-filter: blur(1.25px);
    padding: 1rem;
    cursor: pointer;
    text-align: left;
    display: grid;
    gap: 0.7rem;
    /* border: 1px solid #f2cdcd20; */
    transition: background-color 150ms ease-in-out;
    border: none;

    &:hover {
      background-color: #31324481;
    }

    &::before {
      content: "";
      position: absolute;
      z-index: -1;
      inset: 0;
      border-radius: inherit;
      border: 1px solid transparent;
      background: linear-gradient(to left, #f2cdcd20, #f2cdcd50) border-box;
      mask:
        linear-gradient(black, black) border-box,
        linear-gradient(black, black) padding-box;
      mask-composite: subtract;
    }
  }

  h4 {
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
