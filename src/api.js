import mockData from './mock-data';
import axios from 'axios';
import NProgress from 'nprogress';

export const checkToken = async (access_token) => {
  // Try to access the google calendar API with the access_token
  const result = await fetch(
    `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${access_token}`
  )
    .then((res) => res.json())
    .catch((error) => error.json());
  // result should be the list of events return from the google API
  return result;
};

export const getAccessToken = async () => {
  // Check the local storage for access token
  const access_token = localStorage.getItem('access_token');
  // Check if the access_token was found in localStorage and that it is still valid
  // access_token must be true before checkToken runs (Short curcit)
  const tokenCheck = access_token && (await checkToken(access_token));
  // If the access_token is not found in localStorage or the token is invalidated through the checktTokeb API then run the following statements
  if (!access_token || tokenCheck.error) {
    await localStorage.removeItem("access_token");
    const searchParams = new URLSearchParams(window.location.search);
    const code = await searchParams.get("code");
    if (!code) {
      const results = await axios.get(
        'https://pu8n39of9l.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url'
      );
      const { authUrl } = results.data;
      return (window.location.href = authUrl);
    }
    // Refresh browers using auth url for user authorization
    return code && getToken(code);
  }
  return access_token;
}

export const extractLocations = events => {
 let extractLocations = events.map( e => e.location);
 var locations = [...new Set(extractLocations)];
 return locations;
}

export const getEvents = async () => {
  NProgress.start();

  if (window.location.href.startsWith("http://localhost")) {
    NProgress.done();
    return mockData;
  }

  if (!navigator.onLine) {
    const data = localStorage.getItem("lastEvents");
    NProgress.done();
    return data
            ? JSON.parse(data).events
            :[];
  }


  const token = await getAccessToken();

  if (token) {
    removeQuery();
    const url = `https://pu8n39of9l.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/${token}`;
    const result = await axios.get(url);
    if (result.data) {
      var locations = extractLocations(result.data.events);
      localStorage.setItem("lastEvents", JSON.stringify(result.data));
      localStorage.setItem("locations", JSON.stringify(locations));
    }
    NProgress.done();
    return result.data.events;
  }
};
// Removes code from the URL when no longer needed
const removeQuery = () => {
  if (window.history.pushState && window.location.pathname) {
    var newurl =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname;
    window.history.pushState("", "", newurl);
  } else {
    newurl = window.location.protocol + "//" + window.location.host;
    window.history.pushState("", "", newurl);
  }
};

const getToken = async (code) => {
  const encodeCode = encodeURIComponent(code);
  const { access_token } = await fetch(
    `https://pu8n39of9l.execute-api.eu-central-1.amazonaws.com/dev/api/token/${encodeCode}`
  )
    .then((res) => {
      return res.json();
    })
    .catch((error) => error);

  access_token && localStorage.setItem("access_token", access_token);

  return access_token;
};

