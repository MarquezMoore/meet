import React from 'react';
import { shallow } from 'enzyme';
import EventList from '../components/eventList/eventList';
import Event from '../components/event/event';
import mockData from '../mock-data';

describe('<EventList /> Component', () => {
  test('Render correct number of events', () => {
    const EventListWrapper = shallow(<EventList events={mockData}  />);
    expect(EventListWrapper.find(Event)).toHaveLength(mockData.length);
  });
});




