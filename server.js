require('dotenv').config();
const connection = require("./config/connection");
const express = require('express');
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use(express.static(__dirname + '/public'));
app.use('/', require('./controllers/burgerController'));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


connection.connect(err => {
    if (err) {
        console.log(err);
    } else {
        app.listen(PORT, () => {
            console.log(`App listening on port ${PORT}`);
        });
    }
});




