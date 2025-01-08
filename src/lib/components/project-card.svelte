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
    <div class="content">
      <project.content />
    </div>
  {/if}
</article>

<style>
  .content {
    color: red;
  }
</style>
