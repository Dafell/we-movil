module.exports = function(app){

	app.get('/establecimientos', function(request, response) {
	response.render('frontend/establishments');
	});

}