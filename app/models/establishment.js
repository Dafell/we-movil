var mongoosePaginate=require('mongoose-paginate');
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var objectSchema = new Schema({

	nit:String,
    name:String,
    description: String,
    address: String,
    nameLegal:String,
    lastNameLegal:String,
    cellPhone:String,
    mail:String,
    facebook:String,
    Twitter:String,
    google:String,
    instagram:String,
    idcategory:String,
    longitude:String,
    latitude:String,
    score:Number,
    status:String

});

objectSchema.plugin(mongoosePaginate);

// create the model for users and expose it to our app
module.exports = mongoose.model('Establishment', objectSchema);