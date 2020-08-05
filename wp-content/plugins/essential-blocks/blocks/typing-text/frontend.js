jQuery(document).ready(function($) {
  $(".eb-typed-wrapper").each(function() {
    let typeSpeed = $(this).data("type-speed"),
      startDelay = $(this).data("start-delay"),
      smartBackspace = $(this).data("smart-backspace"),
      backSpeed = $(this).data("back-speed"),
      backDelay = $(this).data("back-delay"),
      fade = $(this).data("fade"),
      fadeDelay = $(this).data("fade-delay"),
      loop = $(this).data("loop"),
      showCursor = $(this).data("cursor");

    // Generate array of strings for TypedJs
    let strings = [];
    $(".eb-typed-text").each(function() {
      strings.push(this.innerHTML);
    });

    let typed = new Typed(".eb-typed-view", {
      strings,
      typeSpeed,
      startDelay,
      smartBackspace,
      backSpeed,
      backDelay,
      fade,
      fadeDelay,
      loop,
      showCursor
    });
  });
});
