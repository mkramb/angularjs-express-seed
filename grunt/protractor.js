module.exports = {
  run: {
    options: {
      configFile: '<%= paths.root %>/tests/conf.js',
      keepAlive: true,
      noColor: false
    }
  },
  debug: {
    options: {
      configFile: '<%= paths.root %>/tests/conf.js',
      keepAlive: true,
      noColor: false,
      debug: true
    }
  }
};
