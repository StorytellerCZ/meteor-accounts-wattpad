Package.describe({
  name: 'storyteller:wattpad-config-ui',
  summary: 'Blaze configuration templates for Wattpad OAuth.',
  version: '1.0.4',
  git: 'https://github.com/StorytellerCZ/meteor-accounts-wattpad',
  deprecated: true
});

Package.onUse(api => {
  api.use('ecmascript@0.15.0', 'client');
  api.use('templating@1.3.2', 'client');

  api.addFiles('wattpad_login_button.css', 'client');
  api.addFiles(['wattpad_configure.html', 'wattpad_configure.js'], 'client');
});
