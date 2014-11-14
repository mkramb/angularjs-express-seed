module.exports = {
  js: {
    src: [
      '<%= paths.root %>/client/library/jquery/dist/jquery.js',
      '<%= paths.root %>/client/library/bootstrap/dist/js/bootstrap.js',
      '<%= paths.root %>/client/library/angular/angular.js'
    ],
    dest: '<%= paths.root %>/public/scripts/lib.js'
  },
  css: {
    src: [
      '<%= paths.root %>/client/library/bootstrap/dist/css/bootstrap.css',
      '<%= paths.root %>/client/library/bootstrap/dist/css/bootstrap-theme.css'
    ],
    dest: '<%= paths.root %>/public/css/lib.css'
  }
};
