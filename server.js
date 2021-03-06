const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const path = require('path');
PORT = process.env.PORT || 5000;

var http = require('http');
const app = express();
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
var server = http.createServer(app);



app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(express.static(path.join(__dirname, 'public')));
// Turn on routes
app.use(routes);

// Turn on connection to db and server
sequelize.sync({
    force: false
}).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});