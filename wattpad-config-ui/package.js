Package.describe({
  name: 'storyteller:wattpad-config-ui',
  summary: 'Blaze configuration templates for Wattpad OAuth.',
  version: '1.0.2',
  git: 'https://github.com/StorytellerCZ/meteor-accounts-wattpad'
});

Package.onUse(api => {
  api.use('ecmascript@0.10.5', 'client');
  api.use('templating@1.2.13', 'client');

  api.addFiles('wattpad_login_button.css', 'client');
  api.addFiles(['wattpad_configure.html', 'wattpad_configure.js'], 'client');
});
