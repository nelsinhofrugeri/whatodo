'use strict';

const { Task } = require('./models');
console.log(Task);

class TaskHandler {
    create (request, reply) {
        let payload = request.payload;

        Task.create({
            title: payload.title,
            description: payload.description
        })
            .then((result) => {
                reply(result);
            })
            .catch((err) => {
                reply(err);
            });
    }

    list (request, reply) {
        Task.findAll()
            .then((result) => {
                reply(result);
            })
            .catch((err) => {
                reply(err);
            });
    }

}

module.exports = TaskHandler;
