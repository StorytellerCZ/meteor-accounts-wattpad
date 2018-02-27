Wattpad = {};
// Request Wattpad credentials for the user
// @param options {optional}
// @param credentialRequestCompleteCallback {Function} Callback function to call on
//   completion. Takes one argument, credentialToken on success, or Error on
//   error.
Wattpad.requestCredential = (options, credentialRequestCompleteCallback) => {
  // support both (options, callback) and (callback).
  if (!credentialRequestCompleteCallback && typeof options === 'function') {
    credentialRequestCompleteCallback = options;
    options = {};
  }

  const config = ServiceConfiguration.configurations.findOne({ service: 'wattpad' });
  if (!config) {
    credentialRequestCompleteCallback && credentialRequestCompleteCallback(new ServiceConfiguration.ConfigError());
    return;
  }

  const credentialToken = Random.secret();

  const loginStyle = OAuth._loginStyle('wattpad', config, options);

  const loginUrl =
    'https://www.wattpad.com/oauth/code' +
    `?api_key=${config.apiKey}` +
    `&scope=read` +
    `&redirect_uri=${OAuth._redirectUri('wattpad', config)}`;

  OAuth.launchLogin({
    loginService: 'wattpad',
    loginStyle,
    loginUrl,
    credentialRequestCompleteCallback,
    credentialToken
  });
};
