module.exports = {
  client: {
    files: [
      {
        '<%= paths.root %>/public/css/app.css': [
          '<%= paths.root %>/client/css/app.less'
        ]
      }
    ]
  }
};
