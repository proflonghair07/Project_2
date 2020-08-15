$(document).ready(() => {
  const groupForm = $("form.group");
  const groupInput = $("#group-input");
    console.log(teamData);
  groupForm.on("submit", event => {
    event.preventDefault();
    const teamData = {
      teamname: groupInput.val().trim()
    };
  });

    // api call to database
    
});
