<script>
  import { setExpandedContext } from "$lib/stores/expaded-store";
  import "./global.css";
  /**
   * @typedef {Object} Props
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let { children } = $props();

  setExpandedContext();
</script>

{@render children?.()}
