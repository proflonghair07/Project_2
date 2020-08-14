module.exports = function(sequelize, DataTypes) {
  const Team = sequelize.define("Team", {
    teamname: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    avgScore: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  return Team;
};
