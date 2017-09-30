'use strict';

const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'todolist',
  'root',
  '123456',
  {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    define: {
      timestamps: true,
      underscored: true
    }
  });

module.exports = sequelize;
