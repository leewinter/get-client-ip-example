const express = require('express'),
  path = require('path'),
  routes = require('./routes'),
  app = express();

// Register statics
app.use(express.static(path.join(__dirname, "../", "public")));

// Register routes
routes.init(app);

// Start app
app.listen(3000, function () {
  console.log('listening on port 3000!');
  console.log('Started - ', new Date());
});