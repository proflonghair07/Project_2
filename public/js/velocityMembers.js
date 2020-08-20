console.log("test");

// Optional: If you're using the UI pack, require it after Velocity. (You don't need to assign it to a variable.)
// require("path/to/velocity.ui.js");
/* Your app code here. */
$("#home").velocity(
  {
    transform: ["scale(1)", "scale(0.3)"],
  },
  {
    duration: 575,
  }
);

//game javascript
$(".choice-container").velocity(
  {
    transform: ["scale(1)", "scale(0.3)"],
  },
  {
    duration: 500,
  }
);
//highscores javascript
// $(".col-sm").velocity(
//   {
//     left: "200px",
//   },
//   625,
//   [500, 40]
// );
