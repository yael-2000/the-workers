const express = require("express");
const mongoose = require('mongoose');
const router = require('./Routes/api');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

const connectionParams = {
    newUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true/*,
    useFindAndModify:false*/
}
mongoose.connect(process.env.DB_CONNECT, connectionParams)
    .then(() => {
        console.log("connected successfuly!!")
    }).catch((err) => {
        console.log("error connection")
    })

app.use(express.json());
app.use('/', router);
app.listen(4000, () => {
    console.log("listening on port 4000!!")
})
