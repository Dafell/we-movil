var mongoosePaginate=require('mongoose-paginate');
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var categorySchema = new Schema({

	name		:String,
    description :String

});

categorySchema.plugin(mongoosePaginate);

// create the model for users andc expose it to our app
module.exports = mongoose.model('Category', categorySchema);