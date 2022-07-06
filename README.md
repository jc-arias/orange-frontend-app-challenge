# frontend-app-challenge
Frontend App Challenge for Orange Spain

Application that lists graphics cards and allows a detail view.

## How to run:
- Clone repo
- On 'Client' folder
  - Install dependencices (npm install)
  - Generate a build (npm run build)
- On 'Server' folder
  - Install dependencices (npm install)
  - Deploy the image (docker-compose up)
- App will be served on http://localhost:5080
- For more details, refer to 'Client' and 'Server' readme

## Backend (Server folder)
Api built with Express
- Server: interface that listens from api implementation
- Routes: implements api methods
- Data: generates random data based on a model with 'mocker-data-generator'
- Docker: creates a container that uploads the api on localhost.

## Frontend (Client folder)

SPA created with React and typescript
- Services: interface for accessing api methods
- Store: implemented with react-redux for state management
- Components:
  - List container: main view, with a search bar and a list of items. Clicking opens detail view
  - List item: each of the items represented on the list
    - Info and image are inner components
  - Detail: a bit more detailed view of item specs. Clicking on the cross takes you back to list view
    - Info and image are inner components
  - Search bar: allows the user to filter items by model or manufacturer. 
  - Spinner: displayed while fetching data
- Data is fetched by rxjs observables
