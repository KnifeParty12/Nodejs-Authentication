const route = require('express').Router();

route.get('/', (req,res)=>{
   if(req.user){
      return res.send("Visible to logged in users")
   }else {
       res.redirect('/login')
   }
});

exports = module.exports = route;
