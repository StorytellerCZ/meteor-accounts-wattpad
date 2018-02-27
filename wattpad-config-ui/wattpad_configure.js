Template.configureLoginServiceDialogForWattpad.helpers({
  siteUrl: () => Meteor.absoluteUrl()
});

Template.configureLoginServiceDialogForWattpad.fields = () => [
  { property: 'apiKey', label: 'API key' },
  { property: 'secret', label: 'Secret' }
];
