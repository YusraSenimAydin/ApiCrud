var express = require('express'),
    dotenv = require("dotenv"),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    path = require('path'),
    connectDatabase = require("./db/connetDatabase");


// Environment Variables
dotenv.config({
    path: "./config/config.env"
});


// MongoDb Connection
connectDatabase();

var app = express();
var port= process.env.PORT || 3000;


app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors());


app.get('/', (req, res) => {
  res.send('Hello World!')
});



app.listen( port, () => {
    console.log(`App Started on ${port} : ${process.env.NODE_ENV}`);
});