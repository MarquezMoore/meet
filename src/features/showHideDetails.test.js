import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { shallow } from 'enzyme';
import mockData from '../mock-data';
import Event from '../components/event/event';

const feature = loadFeature('./src/features/showHideDetails.feature');

defineFeature(feature, test => {

  let EventWrapper;
  test('Event details should be hidden by default', ({ given, when, then }) => {
      given('user is viewing home page', () => {
      });

      
      when('Events are loaded', () => {
        EventWrapper = shallow(<Event event={mockData[0]} />)
      });

      then('the event details should be hidden', () => {
        expect(EventWrapper.find('.details').prop('hidden')).toEqual('hidden');
      });
  });

  test('Events details should be displayed when use clicks show details button on event', ({ given, when, then }) => {
      given('Events are loaded', () => {
        EventWrapper = shallow(<Event event={mockData[0]} />)
      });

      when('clicking the toggle details button', () => {
        EventWrapper.find('.event .toggle-details').simulate('click');
      });

      then('the event details should be shown', () => {
        expect(EventWrapper.find('.details').prop('hidden')).toBeNull();
      });
  });

  test('Event details should be shown when click toggle button if currently open', ({ given, when, then }) => {
      given('user has clicked toggle details button once', () => {
        EventWrapper = shallow(<Event event={mockData[0]} />)
        EventWrapper.find('.event .toggle-details').simulate('click');
      });

      when('clicking the toggle details button again', () => {
        EventWrapper.find('.event .toggle-details').simulate('click');
      });

      then('event details should be hidden', () => {
        expect(EventWrapper.find('.details').prop('hidden')).toBe('hidden');
      });
  });
})