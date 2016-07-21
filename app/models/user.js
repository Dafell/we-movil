// app/models/user.js
// load the things we need
var mongoosePaginate=require('mongoose-paginate');
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
var userSchema = mongoose.Schema({

    local            : {
        name         : String,
        lastName     : String,
        email        : String,
        passwordEnd  : String
    },
    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    twitter          : {
        id           : String,
        token        : String,
        displayName  : String,
        username     : String
    },
    google           : {
        id           : String,
        token        : String,
        email        : String,
        name         : String,
        photo        : String
    }

});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(passwordEnd) {
    return bcrypt.hashSync(passwordEnd, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPasswordEnd = function(passwordEnd) {
    return bcrypt.compareSync(passwordEnd, this.local.passwordEnd);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('user', userSchema);

//===============================================
userSchema.plugin(mongoosePaginate);