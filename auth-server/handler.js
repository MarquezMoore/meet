const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;
const calendar = google.calendar('v3');

// Scope within the google calendar API allow you to set access level for a particular servie
// https://developers.google.com/identity/protocols/oauth2/scopes
const SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"];

// Below are the credentials needed to gain access to the Google Calendar API
const credentials = {
  client_id: process.env.CLIENT_ID,
  project_id: process.env.PROJECT_ID,
  client_secret: process.env.CLIENT_SECRET,
  calendar_id: process.env.CALENDAR_ID,
  auth_uri:"https://accounts.google.com/o/oauth2/auth",
  token_uri:"https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url:"https://www.googleapis.com/oauth2/v1/certs",
  redirect_uris:["https://MarquezMoore.github.io/meet"],
  javascript_origins:["https://MarquezMoore.github.io", "http://localhost:3000"]
}

const { client_secret, client_id, redirect_uris, calendar_id } = credentials; 
const oAuth2Client = new OAuth2(
  client_id,
  client_secret,
  redirect_uris[0]
)

module.exports.getAuthURL = async () => {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
  });

  return {
    statusCoe: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      authUrl: authUrl,
    }),
  };
};

module.exports.getAccessToken = async event => {
  // Instance of the Oauth Client most be instantiated
  // How is a oAuthClient instaintiated - dont really understand
  const oAuthClient = new OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );

  // Decode the URL parameter from the URL
  // Read more https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent
  const code = decodeURIComponent(`${event.pathParametes.code}`);

  // Return Promise ?
  return new Promise( (resolve, reject) => {
    oAuthClient.getToken(code, (err, token) => {
      return err 
      ? reject(err)
      : resolve(token)
    });
  })
    .then( token => {
      // Send token in response body
      return {
        statusCode: 200,
        body: JSON.stringify(token),
      }
    })
    .catch( err => {
      return {
        statusCode: 500,
        body: JSON.stringify(err),
      }
    })
}