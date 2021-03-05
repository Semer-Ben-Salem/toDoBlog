const { Sequelize } = require("sequelize");

// connection
const sequelize = new Sequelize("toDoBlog", "name", "password", {
  host: "localhost",
  dialect: "mysql",
  host: "localhost",
});

// testing connection to database
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
module.exports = sequelize;

// var mysql = require("mysql");

// var DB = mysql.createConnection({
//   host: "localhost",
//   user: "name",
//   password: "password",
//   database: "toDoBlog",
// });
// module.exports = DB;
