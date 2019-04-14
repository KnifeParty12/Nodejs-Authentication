const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'hbs');
app.set('views','views');

app.use('/public', require('./routes/public'));
app.use('/private', require('./routes/private'));
app.use('/',require('./routes/root'));
app.listen(1234,()=> console.log("Server listening on http://localhost:1234"));
