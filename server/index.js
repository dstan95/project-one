// import dependinte
const expresss = require('express');
const bodyParser = require('body-parser');
const config = require('./config.js');
const bcrypt = require('bcrypt');
const cors = require('cors');
const jwt = require('jsonwebtoken');

// conectare baza de date
// setare mongoose
const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

// baza de date
const db = mongoose.connection;
// afisare erori db
db.on('error', (err) => console.log(err));

// import rute
const user = require('./routes/api/user.route');
const list = require('./routes/api/list.route');

// aplicatia
const app = expresss();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/api/users', user);
app.use('/api/lists', list);

//import model
const User = require('./models/user.model');
const List = require('./models/list.model');
// listen pe port
app.listen(config.PORT, () => {
    mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true });
});