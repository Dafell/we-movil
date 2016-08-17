var Category = require('../models/category');
var Establishment = require('../models/establishment')
var Product = require('../models/product')
var Photo = require('../models/photo');
var Images = require('../models/Image')
var console = require('console-prefix');
var exec = require('exec');

module.exports = function(app, passport) {

	app.get('/', function(req, res) {

		Category.find({},function(err, Category){
			
			if (err) {
				res.send(err);
			}
			
		Establishment.findOne({},function(err, Establishment){
		
			if (err) {
				res.send(err);
				}

		Images.find({},function(err, Images){
			
			if (err) {
				res.send(err);
			}


				res.render("frontend/index.ejs",{
				Category:Category,
				Establishment:Establishment,
				Images:Images
				});
			});
		});
		});
	});
	app.get('/cultura/', function(req, res) {

		 res.render("frontend/cultura.ejs");
	
	});
	app.get('/ocio/', function(req, res) {

		res.render("frontend/ocio.ejs")
	});
		

	

	app.get('/establecimientos/:id',function(req, res){
		var id = req.param("id");

		Establishment.find({idcategory:id},function(err, Establishment){
			if (err) {
				res.send(err);
			}
			
			res.render("frontend/establishments.ejs",{
				Establishment:Establishment
			});
		});

	});

	app.get('/establecimiento/:id',function(req, res){
		var id = req.param("id");
		Establishment.findOne({_id:id},function(err, Establishment){
			if (err) {
				res.send(err);
			}
			Product.find({idEstablishment:id},function(err, Product){
				if (err) {
					res.send(err);
				}
			Photo.find({idEstablishment:id},function(err, Photo){
				if (err) {
					res.send(err);
				}

			res.render("frontend/establishment",{
				Establishment:Establishment,
				Product:Product,
				Photo:Photo
			});
			});
			});
		});
	});

} 