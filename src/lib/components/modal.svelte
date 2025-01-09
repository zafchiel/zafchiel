<script lang="ts">
  let { showModal = $bindable(), header, children } = $props();

  let dialog: HTMLDialogElement | undefined = $state();

  $effect(() => {
    if (showModal) {
      dialog?.showModal();
      document.body.classList.add("modal_open");
    } else {
      document.body.classList.remove("modal_open");
    }
  });
</script>

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
<dialog
  bind:this={dialog}
  onclose={() => (showModal = false)}
  onclick={(e) => {
    if (e.target === dialog) dialog.close();
  }}
>
  <div class="modal_content">
    {@render header?.()}
    <hr />
    {@render children?.()}
    <hr />
    <!-- svelte-ignore a11y_autofocus -->
    <button autofocus onclick={() => dialog?.close()}>close modal</button>
  </div>
</dialog>

<style>
  dialog {
    max-width: 32em;
    border-radius: 0.2em;
    border: none;
    padding: 0;
    margin: 0 auto;
    top: 50%;
    transform: translateY(-50%);
  }
  dialog::backdrop {
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(3px);
  }
  .modal_content {
    padding: 1em;
  }
  dialog[open] {
    animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  @keyframes zoom {
    from {
      transform: scale(0.95) translateY(-50%);
    }
    to {
      transform: scale(1) translateY(-50%);
    }
  }
  dialog[open]::backdrop {
    animation: fade 0.2s ease-out;
  }
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  button {
    display: block;
  }

  :global(body.modal_open) {
    overflow: hidden;
  }
</style>
