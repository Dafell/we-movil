var mongoosePaginate=require('mongoose-paginate');
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var objectSchema = new Schema({

	name:String,
    lastName:String,
    documentType: String,
    idNumber: String,
    email:String,
    passwordEnd:String

});

objectSchema.plugin(mongoosePaginate);

// create the model for users andc expose it to our app
module.exports = mongoose.model('manager', objectSchema);