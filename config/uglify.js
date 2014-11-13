module.exports = {
  options: {
    except: ['jQuery', 'bootstrap', 'angular']
  },
  public: {
    files: {
      '<%= paths.root %>/public/js/app.js': [ '<%= paths.root %>/public/js/app.js' ],
      '<%= paths.root %>/public/js/lib.js': [ '<%= paths.root %>/public/js/lib.js' ]
    }
  }
};
