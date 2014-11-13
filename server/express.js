module.exports = function(app) {

  var i18n = require('i18n-2');
  var express = require('express');
  var swig = require('swig');

  var port = process.env.PORT || 3000;
  process.env.NODE_ENV = process.env.NODE_ENV || 'development';

  if (process.argv.indexOf('-p') >= 0) {
    port = process.argv[process.argv.indexOf('-p') + 1];
  }

  app.configure(function() {
    i18n.expressBind(app, {
      locales: [ 'en' ],
      directory: __dirname + '/locales/',
      extension: '.js',
      cookieName: 'lang'
    });

    app.use(function(req, res, next) {
      req.i18n.setLocaleFromCookie();
      next();
    });

    swig.setDefaults({ varControls: ['<<', '>>'] })
    app.engine('html', swig.renderFile);

    app.set('view engine', 'html');
    app.set('views', __dirname + '/../client/views');
    app.set('port', port);

    app.use(express.static(__dirname + '/../public'));
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
  });

  app.configure('development', function() {
    return app.use(express.errorHandler());
  });

};
