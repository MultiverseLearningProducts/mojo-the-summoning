// create your User model here
const { DataTypes } = require("sequelize");
const { Sequelize, sequelize } = require("../db/config");

let User = sequelize.define("User", {
  username: {
    type: DataTypes.STRING
  }
});


module.exports = {
  User
};