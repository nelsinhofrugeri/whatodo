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
            .then((task) => {
                reply(task);
            })
            .catch((err) => {
                reply(err);
            });
    }

    list (request, reply) {
        Task.findAll()
            .then((tasks) => {
                reply(tasks);
            })
            .catch((err) => {
                reply(err);
            });
    }

    update (request, reply) {
        let uuid = request.params.uuid;

        Task.find({
            where: {
                uuid: uuid
            }
        })
            .then((task) => {
                let title = request.payload.title || task.title;
                let description = request.payload.description || task.description;

                if (!task) {
                    reply({
                        'statusCode': 404,
                        'error': 'Not Found',
                        'message': 'Resource Not Found'
                    }).code(404);
                }

                task.updateAttributes({
                    title: title,
                    description: description
                })
                    .then((updatedTask) => {
                        reply(updatedTask);
                    })
            })
            .catch((err) => {
                reply(err);
            });
    }

    delete (request, reply) {
        let uuid = request.params.uuid;

        Task.find({
            where: {
                uuid: uuid
            }
        })
            .then((task) => {
                if (!task) {
                    reply({
                        'statusCode': 404,
                        'error': 'Not Found',
                        'message': 'Resource Not Found'
                    }).code(404);
                }

                task.destroy({
                    where: {
                        uuid: uuid
                    }
                })
                    .then((result) => {
                        reply().code(204);
                    });
            })
            .catch((err) => {
                reply(err);
            });
    }

}

module.exports = TaskHandler;
