const express = require('express');
const routers = require('./routers.js');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(routers);


app.listen(3000);
