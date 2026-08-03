# Agent Instructions

## Autonoma Test Data

Autonoma seeds realistic test data through the `/api/autonoma` endpoint's factories,
calling the app's own creation paths so side effects and validations run. When you add
or change a model (or the code that creates it), add or update the matching factory in
`pages/api/autonoma.js`.
