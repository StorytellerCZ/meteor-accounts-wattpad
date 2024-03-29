Package.describe({
  name: 'storyteller:wattpad-oauth',
  summary: 'Wattpad OAuth flow',
  version: '1.0.0',
  git: 'https://github.com/StorytellerCZ/meteor-accounts-wattpad',
  deprecated: 'Wattpad no longer supports OAuth'
});

Package.onUse(api => {
  api.versionsFrom(['1.9', '2.3']);
  api.use('ecmascript', ['client', 'server']);
  api.use('oauth2', ['client', 'server']);
  api.use('oauth', ['client', 'server']);
  api.use('http', ['server']);
  api.use('random', 'client');
  api.use('service-configuration', ['client', 'server']);

  api.addFiles('wattpad_client.js', 'client');
  api.addFiles('wattpad_server.js', 'server');

  api.export('Wattpad');
});
