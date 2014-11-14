module.exports = function(app) {

  return {
    home: function (req, res) {
      return res.render('home', {
        view: 'home'
      });
    }
  }

};
