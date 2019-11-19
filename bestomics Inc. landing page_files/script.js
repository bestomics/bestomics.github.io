var options = {
  scroll: 500, // duration of scroll animation between each item
  pause: 1000, // time to stop on each item
  height: 60 // outer-height of element (height and padding), should instead be calculated
};

setInterval(function() {
  $("#carousel")
    .stop()
    .animate(
      { scrollTop: options.height },
      options.scroll,
      "linear",
      function() {
        $(this)
          .scrollTop(0)
          .find("span:last")
          .after($("span:first", this)); // shift the order of the LI elements
      }
    );
}, 2700);
