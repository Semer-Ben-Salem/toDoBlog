const Sequelize = require("sequelize");
const User = require("./userModel.js");

const sequelize = require("../connexion/connexion.js");

const Blog = sequelize.define("blog", {
  user_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: true,
    primaryKey: true,
  },
  title: { type: Sequelize.STRING, allowNull: false },
  status: { type: DataTypes.BOOLEAN, defaultValue: true, allowNull: false },
  description: { type: Sequelize.STRING, allowNull: false },
});

// adding foreign key
User.belongsTo(Blog);

module.exports = Blog;

/*
this is how foreign key works in sequilize

var Player = this.sequelize.define('player', { attributes })
  , Team  = this.sequelize.define('team', { attributes });

Player.belongsTo(Team); // Will add a teamId attribute to Player to hold the primary key value for Team
*/
