if (
  Package['accounts-ui'] &&
  !Package['service-configuration'] &&
  !Object.prototype.hasOwnProperty.call(Package, 'wattpad-config-ui')
) {
  console.warn(
    "Note: You're using accounts-ui and accounts-wattpad,\n" +
      "but didn't install the configuration UI for Wattpad\n" +
      'OAuth. You can install it with:\n' +
      '\n' +
      '    meteor add wattpad-config-ui' +
      '\n'
  );
}
