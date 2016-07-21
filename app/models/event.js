var mongoosePaginate=require('mongoose-paginate');
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var objectSchema = new Schema({

	nameEvent:String,
    LocationEvent:String,
    countryEvent:String,
    departmentEvent:String,
    municipalityEvent:String,
    latitude:String,
    longitude:String

});

objectSchema.plugin(mongoosePaginate);

// create the model for users andc expose it to our app
module.exports = mongoose.model('event', objectSchema);