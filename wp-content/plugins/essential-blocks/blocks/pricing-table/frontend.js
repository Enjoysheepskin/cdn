jQuery(document).ready(function($) {
  $(".eb-pricebox-wrapper").each(function() {
    let _this = $(this),
      buttonBackground = _this.attr("data-button-background"),
      buttonTextColor = _this.attr("data-button-text-color"),
      buttonBorder = _this.attr("data-button-border"),
      hoverBackground = _this.attr("data-hover-background"),
      hoverTextColor = _this.attr("data-hover-text-color"),
      hoverBorder = _this.attr("data-hover-border");

    // Add button hover effect
    $(this)
      .find(".eb-pricebox-button")
      .hover(
        function() {
          $(this)
            .stop(true, true)
            .css({
              backgroundColor: hoverBackground,
              border: hoverBorder,
              color: hoverTextColor,
              cursor: "pointer"
            });
        },
        function() {
          $(this).css({
            backgroundColor: buttonBackground,
            border: buttonBorder,
            color: buttonTextColor,
            cursor: "default"
          });
        }
      );

    // Make feature item clickable
    $(this)
      .find(".eb-pricebox-feature-item")
      .each(function() {
        let clickable = $(this).data("clickable");
        let link = $(this).data("link");

        if (clickable && link) {
          // Change mouse cursor on hover
          $(this).hover(
            function() {
              $(this)
                .stop(true, true)
                .css({ cursor: "pointer" });
            },
            function() {
              $(this).css({ cursor: "default" });
            }
          );

					// Click function
          $(this).click(function() {
            window.location = link;
          });
        }
      });
  });
});
