Package.describe({
  name: 'storyteller:wattpad-oauth',
  summary: 'Wattpad OAuth flow',
  version: '1.0.0-beta.2',
  git: 'https://github.com/StorytellerCZ/meteor-accounts-wattpad',
  deprecated: true
});

Package.onUse(api => {
  api.use('ecmascript@0.15.0', ['client', 'server']);
  api.use('oauth2@1.3.0', ['client', 'server']);
  api.use('oauth@1.3.2', ['client', 'server']);
  api.use('http@1.4.3', ['server']);
  api.use('random@1.2.0', 'client');
  api.use('service-configuration@1.0.11', ['client', 'server']);

  api.addFiles('wattpad_client.js', 'client');
  api.addFiles('wattpad_server.js', 'server');

  api.export('Wattpad');
});
