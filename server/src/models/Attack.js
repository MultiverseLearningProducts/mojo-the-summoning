const { DataTypes } = require("sequelize");
const { Sequelize, sequelize } = require("../db/config");

let Attack = sequelize.define("Attack", {
  title: {
    type: DataTypes.STRING
  },
  mojoCost: {
    type: DataTypes.INTEGER
  },
  stamina : {
    type: DataTypes.INTEGER
  }
});


module.exports = {
  Attack
};