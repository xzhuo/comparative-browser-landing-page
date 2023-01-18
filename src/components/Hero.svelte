<script>
  export let title = '';
  export let desc = '';
</script>

<div class="hero min-h-[60vh] top-0">
  <span
    id="blackOverlay"
    class="w-full h-full absolute opacity-40 bg-black top-0"
  />
  <div class="text-center hero-content">
    <div>
      <h1 class="mb-5 text-6xl font-black lg:text-6xl xl:text-8xl">
        {@html title}
      </h1>
      <p
        class="mb-5 text-4xl font-black  font-handwriting text-secondary lg:text-5xl xl:text-8xl"
      >
        {@html desc}
      </p>
      <div class="mx-auto min-h-[50vh]" />
    </div>
  </div>
</div>
