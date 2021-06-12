
import React from 'react';
/* 
  api via enzyme that is used to shallow/light render react components
    - renders components without a DOM or childern
*/ 
import { shallow, mount } from 'enzyme'; 
// Components that will be tested
import App from '../App'; 
import EventList from '../components/eventList/eventList'
import CitySearch from '../components/citySearch/citySearch'
import NumOfEvents from '../components/numOfEvents/numOfEvents';

import mockData from '../mock-data'
import { extractLocations, getEvents } from '../api'

// A testing 'scope' or test 'group' has been created below via the describe api
describe('<App /> component', () => {
  let AppWrapper;

  beforeAll(() => {
    // the shallow() api creates a shallow rendered version of my app
    AppWrapper = shallow(<App />);
  });

  it('should render list of events component', () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });

  it('should render CitySearch Component', () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });

  it('should contain <NumOfEvents /> component', () => {
    expect(AppWrapper.find(NumOfEvents)).toHaveLength(1);
  });

});

describe('<App /> integration', () => {
  let AppWrapper, AppEventsState, AppLocationsState, CitySearchWrapper, locations, AppNumOfEventsState, NumOfEventsWrapper, EventListWrapper;

  beforeEach(() => {
    // const locations = extractLocations();
    AppWrapper = mount(<App />);
    AppEventsState = AppWrapper.state('events');
    AppLocationsState = AppWrapper.state('locations');
    AppNumOfEventsState = AppWrapper.state('numOfEvents');
    CitySearchWrapper = AppWrapper.find(CitySearch); 
    EventListWrapper = AppWrapper.find(EventList);
    NumOfEventsWrapper = AppWrapper.find(NumOfEvents);
    locations = extractLocations(mockData);
  });

  afterEach(() => {
    AppWrapper.unmount();
  })

  

  it('should pass events state to EventList as prop', () => {
    expect(AppEventsState).not.toEqual(undefined);
    expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
  });

  it('should pass locations state to CitySearc as prop', () => {
    expect(AppLocationsState).not.toEqual(undefined);
    expect(AppWrapper.find(CitySearch).props().locations).toEqual(AppLocationsState);
  });

  it('get list of events matching the city selected by the user', async () => {
    CitySearchWrapper.setState({ suggestions: locations });
    const suggestions = CitySearchWrapper.state('suggestions');
    // Simulate random selection of a suggestion 
    const selectedIndex = Math.floor(Math.random() * (suggestions.length));
    const selectedCity = suggestions[selectedIndex];
    // Simulate click on that suggestion
    await CitySearchWrapper.instance().handleClick(selectedCity);
    const allEvents = await getEvents();
    const eventsToShow = allEvents.filter(event => event.location === selectedCity);
    expect(AppWrapper.state('events')).toEqual(eventsToShow);
  });

  test('get list of all events when user selects "See all cities"', async () => {
    const AppWrapper = mount(<App />);
    const suggestionItems = AppWrapper.find(CitySearch).find('.suggestions li');
    await suggestionItems.at(suggestionItems.length - 1).simulate('click');
    const allEvents = await getEvents();
    expect(AppWrapper.state('events')).toEqual(allEvents);
  });

  it('should pass updateNumOfEvents method to numOfEvents component as prop/callback', () => {
    expect(AppWrapper.instance().updateEvents).toBeTruthy();
  })

  it('should contain numOfEventsState that matchs num passed from numOfEvents component', () => {
    NumOfEventsWrapper.find('.numOfEvents').simulate('change', {
      target: { value: 1}
    });
    expect(AppWrapper.state('numOfEvents')).toEqual(1);
  });

  it('should have the same events state length as numOfevents state', () => {
    NumOfEventsWrapper.find('.numOfEvents').simulate('change', {
      target: { value: 1}
    });
    expect(AppWrapper.state('events').length).toEqual(AppWrapper.state('numOfEvents'));
  });
});