# Musicelly App

> Musicelly App is a website to add your playlist song like spotify.

## Features

* Login with your spotify account
* Search song
* Create Playlist

## Tech Stacks

* [Create React App](https://create-react-app.dev/) to start the project
* [React Redux](https://react-redux.js.org/) to manage data
* [Chakra UI](https://chakra-ui.com/) to build interface in web
* [Jest](https://jestjs.io/) and [react testing library](https://testing-library.com/docs/react-testing-library/intro/) to testing the components
* deploy to [vercel](https://vercel.com/)

## How to run in your computer

* Step 1: Clone this project/git
```sh
git clone https://github.com/dwiratomo12/clone-SpotifyApp.git
```
* Step 2: Go to folder project
```sh
cd clone-SpotifyApp
```
* Step 3: Install dependencies requirements. Before install, you must have npm or nodejs. You can install [here](https://nodejs.org/en/)
```sh
npm install
```
* Step 4: Set up spotify client id. You can get client id in [Spotify Developer](https://developer.spotify.com/dashboard/login) and login with your account and create an app. After that, create file with name `.env.local` in your folder and add the contents of the following file as below.
```sh
REACT_APP_SPOTIFY_CLIENT_ID = <spotify client id>
```
you can change `<spotify client id>` with yours.
* Step 5: Run the server
```sh
npm run start
```
to see the result, you can open [http://localhost:3000](http://localhost:3000).

# Authors

#### Dwi Setyo Wiratomo

