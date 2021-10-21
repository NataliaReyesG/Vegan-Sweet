const express = require('express');
const cors = require('cors');
const morgan = require("morgan");


const app = express()

const db = require('./database');
const bodyParser = require('body-parser');

const port = (process.env.PORT || 5000)

//Midlewares
app.use(morgan('dev'))
app.use(bodyParser.json({limit: '50mb'}));
app.use(cors())
app.use(bodyParser.urlencoded({limit: '50mb',extended:true}))



//routes
app.use('/auth', require('./routes/user.routes'))
app.use('/menu', require('./routes/menu.routes'))
app.use('/Product', require('./routes/product.routes'))

app.listen(port, () => console.log("App conectada correctamente en el puerto", port))