function start()
{
	console.log('request Handler "start" was called');
}
function upload()
{
	console.log("request Handler 'upload' was called");
}

exports.start = start;
exports.upload = upload;