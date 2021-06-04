import mockData from './mock-data'
export const numOfEvents = events => {
  return events.length();
}

export const extractLocations = events => {
 let extractLocations = events.map( e => e.location);
 var locations = [...new Set(extractLocations)];
 return locations;
}

export const getEvents = async () => {
  return mockData;
};
