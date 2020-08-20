const percentLabel = document.getElementById("percentLabel");
const teamname = document.getElementById('teamname')

$(document).ready(() => {
  // When ready, query the api to get avg.

  $.get("http://localhost:8080/api/teams/avg/1/100", result => {
    percentLabel.innerText = result.percentAvg;
    teamname.innerText = result.teamname;
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
