'use strict';

const Hapi = require('hapi');
const Acquaint = require('acquaint');
const server = new Hapi.Server();

server.connection({
    port: 9000,
    host: '0.0.0.0'
});

server.register({
    register: require('hapi-router'),
    options: {
        routes: '**/*routes.js'
    }
}, (err) => {
        if (err) throw err;
    }
);

server.start((err) => {
    if (err) {
        console.log('API is in error ', err);
    }
    else {
        console.log('API is standing ', server.info.uri);
    }
});
