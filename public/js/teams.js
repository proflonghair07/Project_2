$(document).ready(() => {
  /*  const groupForm = $("form.group");
  const groupInput = $("#group-input");
  groupForm.on("submit", event => {
    event.preventDefault();
    const teamData = {
      teamname: groupInput.val().trim()
    };
  });
*/

  let userId = "";

  $.get("/api/user_data").then(data => {
    userId = data.id;
  });

  const joinTeamForm = $(".jointeamform");
  const existingTeam = $("#existingteams");
  const newTeamForm = $(".teamform");
  const txtTeamname = $("#teamname");

  newTeamForm.on("submit", event => {
    event.preventDefault();
    const teamData = {
      teamname: txtTeamname.val().trim(),
      avgScore: 0
    };

    createTeam(teamData.teamname, teamData.avgScore);
  });

  joinTeamForm.on("submit", event => {
    event.preventDefault();
    const teamData = {
      teamId: existingTeam.val().trim(),
      userId: userId
    };
    joinTeam(teamData.userId, teamData.teamId);
  });

  function createTeam(teamName, avgScore) {
    $.post("/api/newteam", {
      teamname: teamName,
      avgscore: avgScore
    })
      .then(() => {
        window.location.replace("/members");
        // If there's an error, log the error
      })
      .catch(err => {
        console.log(err);
      });
  }

  function joinTeam(userId, teamId) {
    $.post("/api/jointeam", {
      userid: userId,
      teamid: teamId
    })
      .then(() => {
        window.location.replace("/members");
        // If there's an error, log the error
      })
      .catch(err => {
        console.log(err);
      });
  }

  const helpers = {
    buildDropdown: function(result, dropdown, emptyMessage) {
      // Remove current options
      dropdown.html("");
      // Add the empty option with the empty message
      dropdown.append('<option value="">' + emptyMessage + "</option>");
      // Check result isnt empty
      if (result != "") {
        // Loop through each of the results and append the option to the dropdown
        $.each(result, (k, v) => {
          dropdown.append(
            "<option value=\"" + v.id + "\">" + v.teamname + "</option>"
          );
        });
      }
    }
  };

  $.get("/api/teams/all")
    .then(response => {
      helpers.buildDropdown(response, $("#existingteams"), "Select an option");
    })
    .catch(error => {
      console.log(error);
    });
});
