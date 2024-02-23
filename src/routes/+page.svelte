<script>
  import Main from "$lib/components/main.svelte";
  import Side from "$lib/components/side.svelte";
</script>

<div class="push_down" />
<div class="wrapper">
  <Side />
  <Main />
</div>

<style>
  .push_down {
    height: 300px;
  }

  .wrapper {
    display: flex;
    justify-content: center;
    /* min-height: 100vh;
    min-height: 100dvh; */
  }
</style>
