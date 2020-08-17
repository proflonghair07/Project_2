// Creating our Team model
module.exports = function(sequelize, DataTypes) {
  const Team = sequelize.define("Team", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: true,
      primaryKey: true
    },
    teamname: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    // The password cannot be null
    avgScore: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    // eslint-disable-next-line camelcase
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });

  return Team;
};
