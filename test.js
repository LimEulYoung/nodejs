var http = require("http");
var url = require("url");

function start(route, handle)
{
	function onRequest(req,res)
	{
		var pathname = url.parse(req.url).pathname;
		console.log("Request for" + pathname + "received.")

		route(handle,pathname);

		res.writeHead(200,{"Content=Type" : "text/plain"}); //문서에 대한 응답, 응답이 잘됬으면 200리턴(상태값)
		res.write("Hello, World!"); //응답이 잘됬으면 실행
		res.end();//끝
	};

	http.createServer(onRequest).listen(8888);

	console.log("Server started on 8888 ports");
}

exports.start = start;