// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Will need to redirect to teams when member signs up.
  app.get("/teams", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/teams.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    const hbsObject = {};
    res.render("members", hbsObject);
    //    res.sendFile(path.join(__dirname, "../public/members.html"));
  });

  app.get("/game", isAuthenticated, (req, res) => {
    const hbsObject = {
      layout: "maingames"
    };
    res.render("game", hbsObject);
    //    res.sendFile(path.join(__dirname, "../public/game.html"));
  });

  app.get("/highscores", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/highscores.html"));
  });

  app.get("/dbhighscores", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/dbHighScores.html"));
  });

  app.get("/end", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/end.html"));
  });
};
