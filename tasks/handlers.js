'use strict';

const { Task } = require('./models');
console.log(Task);

class TaskHandler {
    create (request, reply) {
        let payload = request.payload;

        Task.create({
            title: payload.title,
            description: payload.description
        });

        reply({
            title: payload.title,
            description: payload.description
        });
    }

}

module.exports = TaskHandler;
