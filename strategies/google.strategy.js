var passport = require('passport');

var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

module.exports = function () {

    passport.use(new GoogleStrategy({
            clientID: '873733854058-05rdr5tphp9nn37ksomnb23vp9louvkh.apps.googleusercontent.com',
            clientSecret: 'srWHhs79G4XXbvLZ9BOJxQL4',
            callbackURL: 'http://localhost:3000/auth/google/callback'},
        function(req, accessToken, refreshToken, profile, done){

            var user = {};

            user.email = profile.emails[0].value;
            user.image = profile._json.image.url;
            user.displayName = profile.displayName;

            user.google = {};
            user.google.id =  profile.id;
            user.google.token = accessToken;

            done(null, user);
        }));


};