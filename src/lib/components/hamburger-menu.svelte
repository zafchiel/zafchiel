<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let isNavVisible = false;
</script>

<div>
  <input
    type="checkbox"
    id="hamburger-menu"
    bind:checked={isNavVisible}
    on:change={(e) => dispatch("nav-state", isNavVisible)}
  />

  <label for="hamburger-menu">
    <svg viewBox="0 0 100 100" fill="#fff">
      <rect class="line top_line" width="80" height="8" x="10" y="25" rx="5"
      ></rect>
      <rect class="line mid_line" width="80" height="8" x="10" y="45" rx="5"
      ></rect>
      <rect class="line bot_line" width="80" height="8" x="10" y="65" rx="5"
      ></rect>
    </svg>
  </label>
</div>

<style>
  input {
    display: none;
  }

  svg {
    width: 2rem;
    height: 2rem;
  }

  label .line {
    transition:
      transform 200ms ease-in 200ms,
      rotate 200ms ease-in,
      opacity 0ms ease-in 200ms;
    transform-origin: 50% 50%;
  }

  input[type="checkbox"]:checked + label .line {
    transition:
      transform 200ms ease-in,
      rotate 200ms ease-in 200ms,
      opacity 0ms ease-in 200ms;
  }

  input[type="checkbox"]:checked + label {
    /* doesn't work on firefox */
    /* & :is(.top_line, .bot_line) {
      y: 45;
    } */

    & .top_line {
      rotate: 45deg;
      transform: translateY(20px);
    }

    & .mid_line {
      opacity: 0;
    }

    & .bot_line {
      rotate: -45deg;
      transform: translateY(-20px);
    }
  }
</style>
