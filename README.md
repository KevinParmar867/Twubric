# Twubric page

## Overview

Twubric page is a React application designed to display a list of followers fetched from a remote API. It allows users to filter followers based on join dates, remove followers, and sort followers based on different criteria such as Twubric score, friends count, influence, and chirpiness.

## Installation

Clone the repository: git clone "https://github.com/KevinParmar867/Twubric.git"
Navigate to the project directory: cd Twubric
Install dependencies: npm install

## Usage

Start the development server: npm start
Open your browser and go to http://localhost:3000 to view the app.

## Features

Filtering: Users can filter followers based on their join dates using the date filter inputs and apply filter button.

Sorting: Followers can be sorted based on different criteria by clicking on the sort buttons provided.

Removing: Users can remove followers from the list by clicking on the "Remove" button next to each follower.

Loading Skeletons: While fetching data, loading skeleton components are displayed to provide a smooth loading experience to users.

Responsive Design: The app is designed to be responsive and works well on different screen sizes.

## Project Structure

## .env : secure confidential data
  REACT_APP_API_KEY = "API Link"

## src/
App.js: Main component that renders the application layout.
Home.js: Component responsible for fetching data, handling user interactions, and rendering follower list.

## utils/: 
convertTimestamp.js :Contains utility functions used for converting timestamps into day ,month and year.

## components/: 
UserList.js: Component responsible for rendering individual follower items.
Skeleton.js: Component for displaying loading skeletons.
SortButtons.js: Component for rendering sorting buttons.
ConformationModel.js : Component for delete confirmation.

## Dependencies

axios: For making HTTP requests to fetch data from the remote API.
react: JavaScript library for building user interfaces.
react-dom: Provides DOM-specific methods that can be used at the top level of a web app to enable React components.
react-scripts: Configuration and scripts for Create React App.

## License
This project is licensed under the MIT License.
