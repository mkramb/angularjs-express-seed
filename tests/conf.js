exports.config = {

  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:3000',
  specs: [
    './specs/home.js'
  ],

  jasmineNodeOpts: {
    showColors: true,
    isVerbose: true,
    includeStackTrace: true
  }

};
