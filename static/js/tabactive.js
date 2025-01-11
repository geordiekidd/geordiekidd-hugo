$(document).ready(function() {
  const placeValue = $("div[data-place]").attr("data-place");

  // Initialize active button and content
  $("li[data-place=" + placeValue + "]").addClass("active");
  $("div[data-place=" + placeValue + "]").fadeIn(0, function() {
    $(this).addClass("active");
  });

  // Add fade-out effect on button click
  $("li").on("click", function(event) {
    const target = $(this).attr("href"); // Adjust based on your links
    if (target) {
      event.preventDefault(); // Prevent immediate navigation

      const $currentContent = $("div[data-place=" + placeValue + "]");
     
      const $currentButton = $("li[data-place=" + placeValue + "]");
      $currentButton.css("font-weight", "normal"); // Update font weight to 400

      // Trigger fade-out
      $currentContent.fadeOut(0, function() {
        console.log("Fade-out complete, redirecting...");
        window.location.href = target;
      });
    }
  });
});
