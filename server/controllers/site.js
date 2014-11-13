module.exports = function(app) {

  return {
    home: function (req, res) {
      return res.render('site_home', {
        view: 'home'
      });
    }
  }

};
