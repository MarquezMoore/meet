
# Meet App

<div align="center">
  <a href="https://marquezmoore.github.io/meet/" alt="View in browser">View in Browser</a>
</div>


- [Objective](#Objective)
- [Technologies](#Technologies)
- [User-Stories](#User-Stories)
- [Requirements](#Requirements)

## Demo
![See in action!](./assets/meetDEMO.gif)

## Objective
To build a serverless, progressive web application (PWA) with React using a test-driven
development (TDD) technique. The application uses the Google Calendar API to fetch
upcoming events.

## Technologies
- Node.js
- React
- Axios
- Recharts
- Atatus for performance monitoring
- AWS Lambda for hosting serverless functions for authoruzation
- OAuth via Google Cloud Console
- Googel Calendar API


## Use-Stroies

Features | User Story | Gherkin Syntax
----------- | ------------ | -----------
Show and hide an events details | **As a** user, **I should be able to** to show/hide event details **so that I can** see the details related to each event. | **Given** an event is displayed, **when** a user clicks, **then** the event details should show or hide in open prior to click
Specify number of events | **As a** user, **I should be able to** specify number of events shown **so that I can** so that I can see more or fewer events in the events list at once | **Given** that there are events, **when** a user logs in, **then** they should be able to see total number of events 
Use the app offline | **As a** user, **I should be able to** use app offline, **so that I can** see the events I lasted viewed while offline | **Given** no internet connection **when** a user is using app, **then** they used be able to use the app based on cached data
Data Visualization |**As a** user, **I should be able to** see charts displaying upcoming event in a city, **so that I can** have a more tailored experience | **Given** there are event in a given city **when** when user logs in **then** city could see chart with number of event in that city

## Technical-Specks
- Application is built with React.
- Applicaiton was built using test driven approach.
- Application uses the Google Calendar API and OAuth.
- Application uses serverless functions via AWS Lambda.
- Application built with responsive design.
- Application is a Progressive Web App base of lighthouse guidelines.
- Application work offline with must recent loaded data via service workers. 
- Application can be downloaded onto desktops and moibile devices.
- Application is deployed via gh-pages.
- Application use axios for http request.
- Application uses data visulazation UI via recharts.
- Application has test pass-rate of >90%.
- Application using Atatus for performance monitoring.


