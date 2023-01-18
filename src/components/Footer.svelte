<script>
  export let title = '';
  export let contact = '';
</script>

<footer class="p-10 bg-neutral text-neutral-content">
  <div class="max-w-5xl mx-auto footer">
    <div>
      <span class="footer-title">{@html title}</span>
      <p>
        <a href="mailto:{contact}" class="link link-hover">Contact us</a>
        <br />
        <a
          class="link link-hover"
          rel="nofollow"
          href="https://github.com/lidaof/eg-react">Github</a
        >
      </p>
    </div>
  </div>
</footer>
