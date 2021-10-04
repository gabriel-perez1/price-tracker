const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db
const sequelize = new Sequelize('mysql://b01b9c25965f08:b5f865a7@us-cdbr-east-04.cleardb.com/heroku_b751fd196fc59f1?reconnect=true');

module.exports = sequelize;