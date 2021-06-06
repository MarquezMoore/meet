Feature: show and hide event details of user click

Scenario: Event details should be hidden by default
Given user is viewing home page
When Events are loaded
Then the event details should be hidden

Scenario: Events details should be displayed when use clicks show details button on event
Given Events are loaded
When clicking the toggle details button
Then the event details should be shown

Scenario: Event details should be shown when click toggle button if currently open
Given user has clicked toggle details button once
When clicking the toggle details button again
Then event details should be hidden