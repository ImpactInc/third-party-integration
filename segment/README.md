# Segment Integration<br>![ES: 6](https://img.shields.io/badge/ES-6-green.svg) ![NodeJS: 16.14.0](https://img.shields.io/badge/NodeJS-16.14.0-blue.svg)

Over here we house all the iterations of our Segment.io function. We encourage
only using the latest versions, however we do keep older versions here for
historical context.

## Latest version

- [Packed](./dist/impactSegmentFunction-latest.js)
- [Minified](./dist/impactSegmentFunction-latest.min.js)

## Changelog

- [./CHANGELOG.md](./CHANGELOG.md)

## Implementation

This function will run as is on Segment.io.

***Note:** the way Segment.io is set up is that supported events are expected to
be globally defined. That means that our function defines implemented endpoints
such as `onTrack = implemented();` in our code.*

## Supported events

Below are the supported events we can attach our function to and our current
status.

| Event Endpoint | Implemented | Description                                                                                        |
|----------------|-------------|----------------------------------------------------------------------------------------------------|
| onTrack        | `YES`       | More complex events, these include Application Installed and Order Completed.                      |
| onPage         | `YES`       | Simple Page Load event coming in from a web browser.                                               |
| onScreen       | `YES`       | Simple Page Load event coming in from a mobile app.                                                |
| onIdentify     | `YES`       | Events related to customer identifying data changes such as a login or changing a profile setting. |
| onGroup        | `NO`        | Events that relate to a customer and a specific group, such as joining or leaving a group.         |
