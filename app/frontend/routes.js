var Category = require('../models/category');
var Establishment = require('../models/establishment');
var Product = require('../models/product');
var Photo = require('../models/photo');
var Images = require('../models/Image');
var Places = require('../models/place');
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

		Images.findOne({},function(err, Images){
			
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
	

	app.get('/cultura', function(req, res) {

		Images.findOne({},function(err, Images){
			
			if (err) {
				res.send(err);
			}

			res.render("frontend/culture.ejs",{
				Images:Images
			});
		});
	});

	app.get('/galeria/',function(req, res) {

		Places.findOne({},function(err, Places){
			
			if (err) {
				res.send(err);
			}
			res.render("frontend/gallery.ejs",{
				Places:Places
			});
		});
	});

	app.get('/ocio/', function(req, res) {

		res.render("frontend/ocio.ejs");
	});

	app.get('/planes/', function(req, res) {

		res.render("frontend/plans.ejs");
	});

	app.get('/calle/', function(req, res) {

		Images.findOne({},function(err, Images){
			
			if (err) {
				res.send(err);
			}

			res.render("frontend/street.ejs",{
				Images:Images
			});
		});
	});
		
		
	app.get('/rutas', function(req, res) {

        Establishment.find({},function(err, Establishment) {
	      if (err) {
	        return res.send(err);
	      }

	      res.render('frontend/mapRoutes.ejs',{
	        Establishment:Establishment,
	      });
	    });
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

	app.post('/calificarPositivo/:id', function(req, res) {
		var id = req.param("id");
    	Establishment.findById({ _id: id }, function(err, Establishment){
      		if (err) throw err;
      			var aux = parseInt(Establishment.score);
      				aux = aux+1;
      				Establishment.score = aux.toString();
      			Establishment.save({ _id: id }, function(err)  {
        			if (err) {
          			res.end("{success: false}");
          			
        			}
        		else {
        			res.end("{success: true, aux: "+aux+"}");
          			
        		}
    	  	});
    	});
    });

    app.post('/calificarNegativo/:id', function(req, res) {
		var id = req.param("id");
    	Establishment.findById({ _id: id }, function(err, Establishment){
      		if (err) throw err;
      			var aux = parseInt(Establishment.score);
      				aux = aux-1;
      				Establishment.score = aux.toString();
      			Establishment.save({ _id: id }, function(err)  {
        			if (err) {
          			res.end("{success: false}");
          			
        			}
        		else {
        			res.end("{success: true, aux: "+aux+"}");
          			
        		}
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