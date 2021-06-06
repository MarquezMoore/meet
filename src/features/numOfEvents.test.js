import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

const feature = loadFeature('./src/features/numOfEvents.feature');

defineFeature(feature, test => {
  test('should contain input for num of events specification', ({ given, when, then }) => {
    let AppWrapper;
    given('user is viewing home page', () => {
      AppWrapper = mount(<App />);
    });

    when('user enter num of events into num of event input', () => {
      AppWrapper.find('.numOfEvents').simulate('change', {
        target: { value: 1}
      });
    });

    then('eventList component display that num of events live', () => {
      expect(AppWrapper.state('events').length).toBe(AppWrapper.state('numOfEvents'));
    });
});
})

