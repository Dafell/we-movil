var mongoosePaginate=require('mongoose-paginate');
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var objectSchema = new Schema({

	name:String,
    address:String,
    country: String,
    department: String,
    municipality:String,
    latitude:String,
    longitude:String

});

objectSchema.plugin(mongoosePaginate);

// create the model for users andc expose it to our app
module.exports = mongoose.model('place', objectSchema);