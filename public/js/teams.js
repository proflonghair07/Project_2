$(document).ready(() => {
  const groupForm = $("form.group");
  const groupInput = $("input#group-input");

  groupForm.on("submit", event => {
    event.preventDefault();
    const teamData = {
      teamname: groupInput.val().trim()
    };
  });

  
});
