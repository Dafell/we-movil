var mongoosePaginate=require('mongoose-paginate');
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var imageSchema = new Schema({

	name:String,
    country: String,
    department: String,
    municipality:String,
    description:String,
    latitude:String,
    longitude:String

});

imageSchema.plugin(mongoosePaginate);

// create the model for users andc expose it to our app
module.exports = mongoose.model('image', imageSchema);
