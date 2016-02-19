var useragent = require('useragent');

function parseHeader(req){
	var agent = useragent.parse(req.headers['user-agent']);
	var software = agent.os.toString();
	var ip = req.connection.remoteAddress
	var lang = req.headers["accept-language"];
	return {
		'ipaddress'	:ip,
		'language'	:lang,
		'software'	:software
	};
}

exports.parseHeader = parseHeader;