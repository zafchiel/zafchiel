<script lang="ts">
  export let direction: string;
</script>

<a href={`#${direction}`}>
  {direction}
</a>

<style>
  a {
    text-transform: capitalize;
    text-decoration: none;
    color: inherit;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    width: fit-content;
    align-self: right;

    background-color: slategray;
  }
</style>
