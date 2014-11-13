module.exports = function(app) {

  function route(name) {
    return require('./controllers/'+name)(app)
  }

  var site = route('site');

  app.get('/', site.home);
  app.get('/*', function(req, res) {
    return res.render('not_found', {
      layout: false,
      status: 404
    });
  });

};
