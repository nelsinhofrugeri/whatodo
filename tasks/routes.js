'use strict';

const Joi = require('joi');
const TaskHandler = require('./handlers');
const taskHandler = new TaskHandler();

module.exports = [
    {
        method: 'POST',
        path: '/task',
        handler: taskHandler.create,
        config: {
            validate: {
                payload: Joi.object({
                    title: Joi.string().required(),
                    description: Joi.string().required()
                })
            }
        }
    },
    {
        method: 'GET',
        path: '/task',
        handler: taskHandler.list
    }
];
