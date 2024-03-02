<script>
  import { page } from "$app/stores";
</script>

<main>
  <h1>{$page.status}: {$page.error?.message}</h1>
  <a href="/">return to home page</a>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    height: 100dvh;
  }

  a {
    padding: 0.5rem 1.5rem;
    background-color: transparent;
    color: var(--color-primary);
    border: 2px solid var(--color-primary);
    border-radius: 0.5rem;
    font-size: var(--fs-md);
    font-weight: 600;
    text-transform: uppercase;
  }
</style>
