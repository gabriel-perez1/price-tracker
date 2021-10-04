const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const path = require('path');

var http = require('http');
const app = express();
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
const PORT = process.env.PORT || 3001;
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


var io = require('socket.io')(server);

io.sockets.on('connection', function (socket) {
    console.log('\nGot a new connection from: ' + socket.id + '\n');
});

server.listen(3000);
