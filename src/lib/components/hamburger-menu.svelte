<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  let isChecked = false;
</script>

<div>
  <label for="hamburger-menu">
    <svg width="35" height="25" fill="white">
      <rect x="0" y="0" width="35" height="3" />
      <rect x="0" y="10" width="35" height="3" />
      <rect x="0" y="20" width="35" height="3" />
    </svg>
  </label>

  <input
    type="checkbox"
    id="hamburger-menu"
    bind:checked={isChecked}
    on:change={(e) => dispatch("nav-state", isChecked)}
  />
</div>

<style>
  input {
    display: none;
  }

  label {
    /* padding: 0.5rem; */
  }
</style>
