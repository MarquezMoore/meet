import React from 'react';
import { shallow } from 'enzyme';

import Event from '../components/event/event'

describe('<Event /> Component', () => {
  let EventWrapper, event, showDetails, details; 

  beforeAll(() => {
    EventWrapper = shallow(<Event />);
    event = EventWrapper.find('.event');
    showDetails = event.find('.show-details');
    details = EventWrapper.find('.details');
  });
/*
  Pre User Interactions
*/ 
  it('should contain details container', () => {
    expect(EventWrapper.find('.details')).toHaveLength(1);
  });

  it('should contain show details button', () => {
    expect(event.find('.show-details')).toHaveLength(1);
  });

  it('should show details closed per default', () => {
    expect(details.prop('hidden')).toBe('');
  });
/*
  Post User Interactions
*/ 
  it('should show details when user clicks show-details button', () => {
    showDetails.simulate('click');
    expect(details.prop('hidden')).toBe('hidden');
  });
});