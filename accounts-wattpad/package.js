Package.describe({
  name: 'storyteller:accounts-wattpad',
  summary: 'Login service for Wattpad accounts',
  version: '1.0.0-beta.0',
  git: 'https://github.com/StorytellerCZ/meteor-accounts-wattpad'
});

Package.onUse(api => {
  api.use('ecmascript@0.10.5');
  api.use('accounts-base@1.4.2', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth@1.1.15', ['client', 'server']);
  api.use('storyteller:wattpad-oauth@1.0.0-beta.0');
  api.imply('storyteller:wattpad-oauth');

  // If users use accounts-ui but not facebook-config-ui, give them a tip.
  api.use(['accounts-ui@1.3.0', 'storyteller:wattpad-config-ui@1.0.0'], ['client', 'server'], { weak: true });
  api.addFiles('notice.js');

  api.addFiles('wattpad.js');
});
