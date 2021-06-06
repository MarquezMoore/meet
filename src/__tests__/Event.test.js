import React from 'react';
import { shallow } from 'enzyme';

import Event from '../components/event/event';

describe('<Event /> Component', () => {
  let EventWrapper, event, toggleDetails, details; 

  beforeAll(() => {
    EventWrapper = shallow(<Event event={{summary: 'test'}}/>);
    event = EventWrapper.find('.event');
    toggleDetails = event.find('.toggle-details');
    details = EventWrapper.find('.details');
  });
/*
  Pre User Interactions
*/ 
  it('should contain details container', () => {
    expect(EventWrapper.find('.details')).toHaveLength(1);
  });

  it('should contain toggle details button', () => {
    expect(event.find('.toggle-details')).toBeTruthy();
  });

  it('should toggle details closed per default', () => {
    expect(details.prop('hidden')).toEqual('hidden');
  });

/*
  Post User Interactions
*/ 
  it('should show details when user clicks toggle-details button', () => {
    toggleDetails.simulate('click');
    expect(EventWrapper.state('detailStatus')).toEqual(null);
  });
});