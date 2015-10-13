var server = require("./test");
var route = require('./route')
var requestHandlers = require('./requestHandler');

var handle = {};
handle["/"] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;

server.start(route.route, handle);