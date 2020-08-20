$(document).ready(() => {
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
              v.avgScore +
              "</li>"
          );
        });
      }
    })
    .catch(error => {
      console.log(error);
    });
});
