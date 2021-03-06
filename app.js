const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require("path");
const indexRoutes = require('./routes/indexRoutes');
const apiRoutes = require('./routes/apiRoutes')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", indexRoutes);
app.use('/api', apiRoutes);

app.use(express.static(path.join(__dirname, "/public")));

app.listen(3002, function () {
  console.log('server listening...')
});