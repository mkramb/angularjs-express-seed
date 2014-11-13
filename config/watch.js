module.exports = {
  scripts: {
    files: [ '<%= paths.root %>/client/**', '<%= paths.root %>/server/**' ],
    tasks: [ 'dev-compile' ],
    options: {
      livereload: true,
      nospawn: true,
      atBegin: true
    }
  }
};
