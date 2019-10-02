

var express=require("express");
var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
var session=require("express-session")
var passport=require("passport");
var cors=require("cors");



var app=express();

  passport.use(new LinkedInStrategy({
    clientID: "81r4tlaw37zs0n",
    clientSecret: "FRXXIqMD475QDneY",
    callbackURL: "http://localhost:3000/auth/linkedin/callback",
    scope: ['r_emailaddress','r_liteprofile'],
    state: true
  }, function(accessToken, refreshToken, profile, done) {
   
    process.nextTick(function () {
      return done(null, profile);
    });
  }));

app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin',"*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers','Content-Type');
    next();
})

//   -------------Session-----------
  app.use(session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
  }))

//   -------------Passport-----------
app.use(passport.initialize());
app.use(passport.session());


//   -------------Cors--------------
app.use(cors());

  app.get('/auth/linkedin',
  passport.authenticate('linkedin'),
  function(req, res){
    res.send({api:"vivek"})
    // The request will be redirected to LinkedIn for authentication, so this
    // function will not be called.
  });

  app.get('/auth/linkedin/callback',
  passport.authenticate('linkedin', { failureRedirect: '/login' }),
  function(req, res) {
    //res.send({api:"http://localhost:3000/auth/linkedin"})
    // Successful authentication
    // res.json(req.user);
  });



app.get("/met",(req,res)=>{
    res.send({result:"hallo world"})
})


  app.listen(3000, (err) =>{
    if(err){
        console.log(err)
    }else{
        console.log("server Started");    
    }
    
});