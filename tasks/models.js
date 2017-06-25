'use strict';

const db = require('../configs/sequelize');

const Task = db.import('Task', (db, DataTypes) => {
    return db.define('Task', {
        uuid: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        title: {
            type: DataTypes.STRING,
            required: true
        },
        description: {
            type: DataTypes.STRING,
            required: true
        }
    });
});

module.exports = { Task };
