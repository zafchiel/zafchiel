<script lang="ts">
  import { Drawer } from "vaul-svelte";
  import { drawerOpenedStore } from "$lib/stores/drawer.store";
  interface Props {
    trigger?: import('svelte').Snippet;
    content?: import('svelte').Snippet;
  }

  let { trigger, content }: Props = $props();
</script>

<Drawer.Root
  direction="left"
  onOpenChange={(isOpen) => {
    drawerOpenedStore.set(isOpen);
  }}
>
  <Drawer.Trigger>
    {@render trigger?.()}
  </Drawer.Trigger>
  <Drawer.Portal>
    <Drawer.Content class="drawer_content">
      {@render content?.()}
      <Drawer.Close autofocus>Close</Drawer.Close>
    </Drawer.Content>
  </Drawer.Portal>
</Drawer.Root>

<style>
  :global(.drawer_content) {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: min(80vw, 61ch);
    display: flex;
    flex-direction: column;
    border-radius: 0 10px 10px 0;
    background-color: var(--color-base-850);
    box-shadow: 6px 0px 10px 0px rgba(30, 41, 36, 0.603);
  }

  :global([data-dialog-trigger]) {
    border: none;
    background: none;
    display: block;
    padding: 0;
    margin: 0;
    text-transform: none;
    text-align: left;
    cursor: pointer;
    font-size: 100%;

    &:is(:focus, :hover) .project_card_wrapper {
      background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7));
      border-image-source: radial-gradient(
        ellipse at right top,
        var(--color-primary),
        transparent 30%,
        transparent 80%,
        var(--color-primary) 100%
      );
      padding: 1rem;

      & p.number {
        opacity: 0;
      }

      & .project {
        top: 1rem;
        left: 1rem;
        right: 1rem;

        & h3 {
          margin-bottom: 1rem;
        }
      }

      & .stack {
        opacity: 1;
      }
    }
  }

  :global([data-dialog-close]) {
    position: relative;
    padding: 0.5rem;
    border-radius: var(--border-radius-sm);
    cursor: pointer;
    background-color: rgba(var(--color-primary-faded-text-rgb), 0.3);
    border: 1px var(--color-primary-faded-text) solid;
    font-weight: 600;
    text-transform: uppercase;
    margin: 1rem;
    transition: 0.3s ease;
    overflow: hidden;

    &:hover {
      &::before {
        left: 0;
        right: 0;
        width: 100%;
        background: radial-gradient(
          circle,
          var(--color-primary) 0%,
          rgba(0, 0, 0, 0) 100%
        );
        opacity: 0.3;
      }
    }

    &::before {
      transition: 0.3s ease;
      content: "";
      position: absolute;
      width: 5rem;
      height: 5rem;
      background: radial-gradient(
        circle,
        var(--color-primary) 0%,
        rgba(0, 0, 0, 0) 50%
      );
      opacity: 0.2;
      top: -50%;
      left: 50%;
      right: 50%;
    }
  }

  @media (width < 480px) {
    :global([data-dialog-trigger]):is(:focus, :hover) .project_card_wrapper {
      padding: 0.5rem;
    }
  }
</style>
