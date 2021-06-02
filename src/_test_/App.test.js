
import React from 'react';
/* 
  api via enzyme that is used to shallow/light render react components
    - renders components without a DOM or childern
*/ 
import { shallow } from 'enzyme'; 
// Components that will be tested
import App from '../App'; 
import EventList from '../components/eventList/eventList'
import CitySearch from '../components/citySearch/citySearch'
import NumOfEvents from '../components/numOfEvents/numOfEvents';

// A testing 'scope' or test 'group' has been created below via the describe api
describe('<App /> component', () => {
  let Wrapper;

  beforeAll(() => {
    // the shallow() api creates a shallow rendered version of my app
    Wrapper = shallow(<App />);
  });

  it('should render list of events', () => {
    expect(Wrapper.find(EventList)).toHaveLength(1);
  });

  it('should render CitySearch Component', () => {
    expect(Wrapper.find(CitySearch)).toHaveLength(1);
  });

  it('should contain <NumOfEvents /> component', () => {
    expect(Wrapper.find(NumOfEvents)).toHaveLength(1);
  });
});