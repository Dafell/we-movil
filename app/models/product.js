var mongoosePaginate=require('mongoose-paginate');
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var productSchema = new Schema({

	name		:String,
    description :String,
    idEstablishment :String

});

productSchema.plugin(mongoosePaginate);

// create the model for users andc expose it to our app
module.exports = mongoose.model('product', productSchema);