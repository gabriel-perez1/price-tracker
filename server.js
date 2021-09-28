const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const app = express();
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({
    force: false
}).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});













// TODO:

// The steps we followed in this lesson are the same ones developers take regularly:

// Model the data.

// Set up API routes to work with that data.

// Test the routes to make sure everything works as intended.

// Repeat with new model.