const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite', 
  storage: 'your-database-file.sqlite', 
});
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })