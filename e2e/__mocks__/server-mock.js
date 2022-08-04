var jsonServer = require('json-server');
var auth = require('json-server-auth');

const rules = auth.rewriter({
  // Permission rules
  messages: 640
});

const server = jsonServer.create();
const router = jsonServer.router('db.json');

server.db = router.db;

server.use(rules);
server.use(auth);
server.use(router);

const httpServer = require('http').createServer(server);

const start = () => {
  httpServer.listen(8080, function () {
    console.log('JSON Server is running');
  });
};

const stop = () => {
  httpServer.close();
};

exports.stop = stop;
exports.start = start;
