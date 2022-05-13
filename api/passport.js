var GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const user = require("./models/User");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/v1/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
      // console.log(profile.email);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  user.findById(id, function (err, user) {
    done(err, user);
  });
});
