const express = require('express');
const app = express();
const path = require('path');
const route = require('./routes/index');

//Settings
app.set('port', 3000);
app.engine('html',require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Middlewares


//Routes
app.use(route);

//Static files
app.use(express.static(path.join(__dirname,'public')));

//Turning on
app.listen(app.get('port'), () => {
    console.log('Server listening on port', app.get('port'));
});