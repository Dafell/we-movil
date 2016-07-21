// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '808597662606666', // your App ID
        'clientSecret'  : 'a622b3bf0921a588f1669196197388bc', // your App Secret
        'callbackURL'   : 'http://wesearch.herokuapp.com/auth/facebook/callback'
        //'callbackURL'   : 'http://localhost:5000/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'nGRpivztHGGnGk6vPjxfAkYxJ',
        'consumerSecret'    : 'XvgdfLzQGxuuzrsfu5EPy40gGcC55DOt24B3maYT5wI8IFCicG',
        'callbackURL'       : 'http://wesearch.herokuapp.com/auth/twitter/callback'
        //'callbackURL'       : 'http://127.0.0.1:5000/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '1067810855126-qc36k3c483uks1phuupt8lg2a9652qd2.apps.googleusercontent.com',
        'clientSecret'  : '8vBL8Yw12ATSp8IaY06lXO0U',
        'callbackURL'   : 'http://wesearch.herokuapp.com/auth/google/callback'
        //'callbackURL'   : 'http://127.0.0.1:5000/auth/google/callback'
    },

};