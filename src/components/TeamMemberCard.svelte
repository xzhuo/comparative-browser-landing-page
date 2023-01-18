<script>
  export let entry;
</script>

<div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 my-12 px-4 py-8">
  <div class="px-6">
    <img
      alt="..."
      src={entry.img}
      class="shadow-lg rounded-full mx-auto max-w-240-px"
    />
    <div class="pt-6 text-center">
      <h5 class="text-xl font-bold">{entry.name}</h5>
      <p class="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
        {entry.role}
      </p>
      <div class="mt-2">
        <button
          class="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
          type="button"
        >
          <i class="fab fa-twitter" />
        </button>
        <button
          class="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
          type="button"
        >
          <i class="fab fa-linkedin" />
        </button>
      </div>
    </div>
  </div>
</div>
