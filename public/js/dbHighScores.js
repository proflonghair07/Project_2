$(document).ready(() => {
//  const percentLabel = document.getElementById("percentLabel");
//  const teamname = document.getElementById('teamname')

//  $.get("http://localhost:8080/api/teams/avg/1/100", result => {
//    percentLabel.innerText = result.percentAvg;
//    teamname.innerText = result.teamname;
//  });
  
  const userScores = $("#user-scores");
  const teamScores = $("#team-scores");

  $.get("/api/userscore")
    .then(response => {
      console.log(response);
      if (response !== "") {
        // Loop through each of the results and append the option to the dropdown
        $.each(response, (k, v) => {
          userScores.append(
            '<li class="list-group-item">' + v.email + " - " + v.score + "</li>"
          );
        });
      }
    })
    .catch(error => {
      console.log(error);
    });

  $.get("/api/teamscore")
    .then(response => {
      console.log(response);
      if (response !== "") {
        // Loop through each of the results and append the option to the dropdown
        $.each(response, (k, v) => {
          teamScores.append(
            '<li class="list-group-item">' +
              v.teamname +
              " - " +
              Math.trunc(v.avgScore) +
              "</li>"
          );
        });
      }
    })
    .catch(error => {
      console.log(error);
    });
});
