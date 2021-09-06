const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()

require('dotenv').config()
const port = process.env.DB_PORT
const user = process.env.DB_USER
const pass = process.env.DB_PASS

const apiRoutes = require("./src/modules/routes/routes")

app.use(cors())
app.use(bodyParser.json())
app.use('/', apiRoutes)

try {
    mongoose.connect(
        'mongodb+srv://' + user + ':' + pass + '@cluster0.4oc1c.mongodb.net/myFirstDatabase',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        }
    )
    app.listen(port, () => {
        console.log("Сервер был подключен...");
    })
} catch (err) {
    console.log(err);
}