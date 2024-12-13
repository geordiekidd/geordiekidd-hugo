// $(document).ready(function(){

//   const placeValue = $("div[data-place]").attr("data-place");

//   $("button[data-place=" + placeValue + "]").addClass("active");
//   $("div[data-place=" + placeValue + "]").fadeIn(250, function(){
//     $(this).addClass("active");
//   });

//   // Add fade-out effect on button click
//   $("button").on("click", function(event) {
//     const target = $(this).attr("href") || $(this).data("place-link"); // Adjust if your buttons have a custom data attribute for links
//     if (target) {
//       event.preventDefault(); // Prevent immediate redirection

//       const $currentContent = $("div[data-place=" + placeValue + "]");

//       const $currentButton = $("button[data-place=" + placeValue + "]");
//       $currentButton.css("font-weight", "400"); // Update font weight to 400

//       $currentContent.fadeOut(250, function() {
//         // Redirect after fade-out completes
//         window.location.href = target;
//       });
//     }
//   });
// });

$(document).ready(function() {
  const placeValue = $("div[data-place]").attr("data-place");

  // Initialize active button and content
  $("button[data-place=" + placeValue + "]").addClass("active");
  $("div[data-place=" + placeValue + "]").fadeIn(250, function() {
    $(this).addClass("active");
  });

  // Add fade-out effect on button click
  $("button").on("click", function(event) {
    const target = $(this).attr("href"); // Adjust based on your links
    if (target) {
      event.preventDefault(); // Prevent immediate navigation

      const $currentContent = $("div[data-place=" + placeValue + "]");
      
      const $currentButton = $("button[data-place=" + placeValue + "]");
      $currentButton.css("font-weight", "400"); // Update font weight to 400

      // Trigger fade-out
      $currentContent.fadeOut(250, function() {
        console.log("Fade-out complete, redirecting...");
        window.location.href = target;
      });
    }
  });
});
