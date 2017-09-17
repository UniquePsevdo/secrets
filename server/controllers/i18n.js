exports.getTranslations = function () {
	
}

exports.getLocales = function (req, res, next) {
	/*{
		"locales": ["en", "de", ...],
		"prefix": "MY_PREFIX"
	}*/
	/*
		{code:"en",
		id:1,
		is_default,
		locale: "en-US"
		title: "English"}
	*/
	res.send({"data":[
		{
		code: "ua",
		id: 0,
		is_default : 1,
		locale: "uk-UA",
		title: "Українська"
	}, {
		code: "en",
		id: 1,
		is_default:0,
		locale: "en-US",
		title: "English"
	}]});
	
}

exports.sendTranslations = function (req, res) {
	res.send(req.getCatalog(req.getLocale()));
}