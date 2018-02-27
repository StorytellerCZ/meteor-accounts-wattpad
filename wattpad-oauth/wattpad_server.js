Wattpad = {};

OAuth.registerService('wattpad', 2, null, query => {
  const response = getAccessToken(query);
  const accessToken = response.token;
  const expiresAt = +new Date() + 1000 * response.expires_in;
  const identity = response.username;

  return {
    serviceData: {
      id: identity.id,
      accessToken,
      expiresAt
    },
    options: { profile: { name: response.username } }
  };
});

const getAccessToken = query => {
  const config = ServiceConfiguration.configurations.findOne({ service: 'wattpad' });
  if (!config) throw new ServiceConfiguration.ConfigError();

  let response;
  try {
    response = HTTP.post('https://api.wattpad.com/v4/auth/token?grantType=authorizationCode', {
      headers: { Accept: 'application/json' },
      params: {
        authCode: query.code,
        apiKey: config.clientId,
        secret: OAuth.openSecret(config.secret),
        redirect_uri: OAuth._redirectUri('wattpad', config),
        state: query.state
      }
    });
  } catch (err) {
    throw Object.assign(new Error(`Failed to complete OAuth handshake with Wattpad. ${err.message}`), {
      response: err.response
    });
  }

  if (response.data.error) {
    // if the http response was a json object with an error attribute
    throw new Error(`Failed to complete OAuth handshake with Wattpad. ${response.data.error}`);
  } else {
    return response.data;
  }
};

Wattpad.retrieveCredential = (credentialToken, credentialSecret) =>
  OAuth.retrieveCredential(credentialToken, credentialSecret);
