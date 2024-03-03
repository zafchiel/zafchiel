<script lang="ts">
  import { Drawer } from "vaul-svelte";
  import { drawerOpenedStore } from "$lib/stores/drawer.store";
</script>

<Drawer.Root
  direction="left"
  onOpenChange={(isOpen) => {
    drawerOpenedStore.set(isOpen);
  }}
>
  <Drawer.Trigger>Open Drawer</Drawer.Trigger>
  <Drawer.Portal>
    <Drawer.Content class="drawer_content">
      <h1>Drawer Content</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
      </p>
    </Drawer.Content>
  </Drawer.Portal>
</Drawer.Root>

<style>
  :global(.drawer_content) {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 90vw;
    display: flex;
    flex-direction: column;
    border-radius: 10px 10px 0 0;
    padding: 1rem;
    background-color: var(--color-base-850);
  }
</style>
