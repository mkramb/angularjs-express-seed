module.exports = {
  client: {
    files: [
      {
        '<%= paths.root %>/public/css/app.css': [
          '<%= paths.root %>/client/assets/css/app.less'
        ]
      }
    ]
  }
};
