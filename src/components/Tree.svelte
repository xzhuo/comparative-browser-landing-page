<script>
  // const URL = 'https://comparative-portal-dpuru-debugpoint136.vercel.app/';
  const URL = 'https://comparative-selection-widget-dpuru.vercel.app/';
  const content = `<iframe id="browser-embed" src="${URL}" allowfullscreen> </iframe>`;
</script>

<div class="">
  <div class="iframe-container">
    {@html content}
  </div>
</div>

<style>
  .iframe-container {
    /* border-top: 1px solid #ccc; */
    background-color: white;
    margin-top: 5vh;
  }
  :global(iframe) {
    width: 100%;
    height: calc(100vh);
    border: none;
    display: block;
    position: absolute;
    top: 2;
    left: 0;
  }
</style>
