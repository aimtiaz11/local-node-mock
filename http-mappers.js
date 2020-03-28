const fs = require('fs');
const logger = require('creepy-logger');
const config = require('./config');

const logRequest = (req) => {
	console.log(`\nUrl: ${req.originalUrl}`);
	console.log("Headers:");
	console.log(req.headers);
	console.log("Body:");
	console.log(req.body);
};

const processRequest = (app, req, res, resStatus, payloadContentType, payloadPath) => {
	logger.info(`${app}: ${req.method}: ${req.url}....trackingID: ${req.header('X-TrackingID')}`);

	// Log http wire if turned on
	config.logHttpWire ? logRequest(req) : null;

	res.status(resStatus);
	res.contentType(payloadContentType);
	const content = fs.readFileSync(payloadPath, 'utf8');
	res.send(content);
}

module.exports = {
	myApp: {
		successResponse: (req, res) => processRequest('myApp', req,res, 200, 'application/json', 'mocks/my-app/response-200.json')
	}
}