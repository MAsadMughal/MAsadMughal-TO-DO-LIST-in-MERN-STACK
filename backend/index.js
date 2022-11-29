const express = require('express');
const router = require('./router/router');
require("./config/mongo");
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(router);
app.use(cors);
app.listen(port, (err) => {
    if (err) console.log("Error in server setup")
    console.log(`app is listening on port ${port}`);
})