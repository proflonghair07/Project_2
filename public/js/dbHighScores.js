const percentLabel = document.getElementById("percentLabel");

$(document).ready(() => {
  // When ready, query the api to get avg.

  $.get("http://localhost:8080/api/teams/avg/1/30", result => {
    alert("here");
    percentLabel.innerText = result.percentAvg;
  });
});

// $.get("/api/teams/all")
//   .then(response => {
//     helpers.buildDropdown(response, $("#existingteams"), "Select an option");
//   })
//   .catch(error => {
//     console.log(error);
//   });
// Put data on the page with this for teams.
