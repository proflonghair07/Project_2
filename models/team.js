// Creating our Team model
module.exports = function(sequelize, DataTypes) {
  const Team = sequelize.define("Team", {
    teamname: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    // The password cannot be null
    avgScore: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  });

  return Team;
};
