## Segment Integration

Welcome to Impact's segment integration. The latest version of our segment function can be found at `segment/dist/impactSegmentFunction-latest.js`, while any particular version of our segment function can be found at `segment/dist/version/impactSegmentFunction-version.js`. We also provide minified versions of our segment function which end in `.min.js`.

### Directory

* [Main](../README.md)

### Support


Below are the supported events we can attach our function to and our current status.

| Event Endpoint | Implemented | Description                                                                                        |
|----------------|-------------|----------------------------------------------------------------------------------------------------|
| onTrack        | `YES`       | More complex events, these include Application Installed and Order Completed.                      |
| onPage         | `YES`       | Simple Page Load event coming in from a web browser.                                               |
| onScreen       | `YES`       | Simple Page Load event coming in from a mobile app.                                                |
| onIdentify     | `YES`       | Events related to customer identifying data changes such as a login or changing a profile setting. |
| onGroup        | `NO`        | Events that relate to a customer and a specific group, such as joining or leaving a group.         |
