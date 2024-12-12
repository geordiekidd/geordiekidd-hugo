$(document).ready(function(){

  const placeValue = $("div[data-place]").attr("data-place");

  $("button[data-place=" + placeValue + "]").addClass("active");
  $("div[data-place=" + placeValue + "]").fadeIn(250, function(){
    $(this).addClass("active");
  });

  // Add fade-out effect on button click
  $("button").on("click", function(event) {
    const target = $(this).attr("href") || $(this).data("place-link"); // Adjust if your buttons have a custom data attribute for links
    if (target) {
      event.preventDefault(); // Prevent immediate redirection

      const $currentButton = $("button[data-place=" + placeValue + "]");
      $currentButton.css("font-weight", "400"); // Update font weight to 400

      $("div[data-place=" + placeValue + "]").fadeOut(250, function() {
        window.location.href = target; // Redirect after fade-out
      });
    }
  });
});