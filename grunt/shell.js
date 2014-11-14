const SHELL_OPTIONS = {
  stdout: true,
  stderr: true,
  stdin: true
};

module.exports = {
  install: {
    options: SHELL_OPTIONS,
    command: function() {
      return [
        'cd app',
        'bower cache clean',
        'bower install'
      ].join(' && ');
    }
  },
  webdriver: {
    options: SHELL_OPTIONS,
    command: function() {
      return 'webdriver-manager start';
    }
  }
};
