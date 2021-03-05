const Sequelize = require("sequelize");
const connection = require("../connexion/connexion.js");

const User = connection.define("user", {
  user_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.STRING, allowNull: false },
  password: { type: Sequelize.STRING, allowNull: false },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});

module.exports = User;

/*
var Player = this.sequelize.define('player', { attributes })
  , Team  = this.sequelize.define('team', { attributes });

Player.belongsTo(Team); // Will add a teamId attribute to Player to hold the primary key value for Team
*/
