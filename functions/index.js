const functions = require('firebase-functions');
const next = require('next');
const express = require('express');

const app = next({ dev: false, conf: { distDir: '.next' } });
const handle = app.getRequestHandler();

const server = express();
server.all('*', (req, res) => handle(req, res));

exports.nextServer = functions.https.onRequest(server);

