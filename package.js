Package.describe({
  name: 'octaviomtc:materialize-meteor-js',
  summary: 'A modern responsive front-end framework based on Material Design, Only JS and Fonts',
  version: '0.0.1',
  git: 'https://github.com/octaviomtc/materialize-meteor-js.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use('jquery');

  var path = Npm.require('path');
  var asset_path = path.join('materialize');
  api.addFiles(path.join(asset_path, 'js', 'materialize.js'), 'client');

  // fonts
  api.addFiles(path.join(asset_path, 'font/roboto', 'Roboto-Bold.ttf'), 'client');
  api.addFiles(path.join(asset_path, 'font/roboto', 'Roboto-Light.ttf'), 'client');
  api.addFiles(path.join(asset_path, 'font/roboto', 'Roboto-Medium.ttf'), 'client');
  api.addFiles(path.join(asset_path, 'font/roboto', 'Roboto-Regular.ttf'), 'client');
  api.addFiles(path.join(asset_path, 'font/roboto', 'Roboto-Thin.ttf'), 'client');

  api.addFiles(path.join(asset_path, 'font/material-design-icons', 'Material-Design-Icons.eot'), 'client');
  api.addFiles(path.join(asset_path, 'font/material-design-icons', 'Material-Design-Icons.svg'), 'client');
  api.addFiles(path.join(asset_path, 'font/material-design-icons', 'Material-Design-Icons.ttf'), 'client');
  api.addFiles(path.join(asset_path, 'font/material-design-icons', 'Material-Design-Icons.woff'), 'client');

});
