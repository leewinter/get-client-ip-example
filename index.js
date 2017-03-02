var express = require('express');
var app = express();
var clientInfo = require('./lib/clientInfo');

app.use(express.static('public'));

app.get('/api/getClientHostname', function (req, res) {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log('ip', ip);

  clientInfo.getHostname(ip, function (clientDetails) {    
    res.setHeader('Content-Type', 'application/json');
    res.send(
        JSON.stringify(
            clientDetails
          )
      );
  });
  
});

app.listen(3000, function () {
  console.log('listening on port 3000!');
  console.log('Started - ', new Date());
})