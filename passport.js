const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Users = require('./db').Users;

passport.serializeUser(function (user,done) {
    done(null, user.username)
});

passport.deserializeUser(function (username,done) {
        Users.findOne({
            username: username
        }).then((user)=>  {
            if(!user){
                return done(new Error("No Such User"))
            }
            return done(null,user)
        }).catch((err)=>{
            return done(err);
        })
});

passport.use(new LocalStrategy((username,password,done)=>{
    Users.findOne({
        where: {
            username: username
        }
    }).then((user)=>{
        if(!user) {
            return done(null, false, {message: "No Such User"})
        }
        if(user.password !== password){
            return done(null, false, {message: "Wrong Password"})
        }
        return done(null, user)
    }).catch((err)=>{
        return done(err);
    })
}));

exports = module.exports = passport;
