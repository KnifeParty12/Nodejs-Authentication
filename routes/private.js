const route = require('express').Router();

route.get('/', (req,res)=>{
    res.send("Visible to some")
});

exports = module.exports = route;
