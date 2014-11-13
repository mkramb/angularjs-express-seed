var http = require('http');
var app = require('express')();

require('./server/express')(app);
require('./server/routes')(app);

app.listen(app.get('port'), function() {
  return console.log([
    'Express server listening on port', (app.get('port')),
    'in', app.settings.env, 'mode'].join(' ')
  );
});
