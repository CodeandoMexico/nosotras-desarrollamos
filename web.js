var gzippo = require('gzippo');
var express = require('express');
var morgan = require('morgan');
var app = express();
 
app.use(morgan());
app.use(gzippo.staticGzip("" + __dirname + "/app"));
app.listen(process.env.PORT || 5000);
