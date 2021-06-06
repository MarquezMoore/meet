Feature: allow users to specify number of events they want to view

Scenario: should contain input for num of events specification
Given user is viewing home page
When user enter num of events into num of event input
Then eventList component display that num of events live