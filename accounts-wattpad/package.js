Package.describe({
  name: 'storyteller:accounts-wattpad',
  summary: 'Login service for Wattpad accounts',
  version: '1.0.0',
  git: 'https://github.com/StorytellerCZ/meteor-accounts-wattpad',
  deprecated: 'Wattpad no longer supports OAuth'
});

Package.onUse(api => {
  api.versionsFrom(['1.9', '2.3'])
  api.use('ecmascript');
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('storyteller:wattpad-oauth@1.0.0');
  api.imply('storyteller:wattpad-oauth');

  // If users use accounts-ui but not facebook-config-ui, give them a tip.
  api.use(['accounts-ui', 'storyteller:wattpad-config-ui@1.0.5'], ['client', 'server'], { weak: true });
  api.addFiles('notice.js');

  api.addFiles('wattpad.js');
});
