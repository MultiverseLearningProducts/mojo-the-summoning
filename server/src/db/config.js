// add your database connection here
const path = require("path")
const { Sequelize, Model } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, "db.sqlite")
})

module.exports = {
  sequelize,
  Sequelize,
};