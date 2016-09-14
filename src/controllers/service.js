function load(req, res, next, id) {
	req.service = {name: 'danny'};
	return next();
}

function get(req, res) {
	let param = req.params;

	res.json(param.serviceId);
}

function list(req, res, next) {
	res.json({});
}

function create(req, res, next) {
	res.json({});
}

function update(req, res, next) {
	res.json({});
}

function remove(req, res, next) {
	res.json({});
}

export default { load, list, create, get, update, remove };