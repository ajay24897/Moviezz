# Moviezz

The movie browsing app allows users to browse movies in various categories and provides movie information.

Note - (Task to be implement are Search movies , Adding the toast message, unit testing, ui update ) 

### `Run app`
- Clone or download the repo.
- Install dependencies: yarn add
- Run the app:
    - iOS: npx react-native run-ios
    - Android: npx react-native run-android

### `Packages used`

- axios -> API integration
- react-navigation -> For screen and navigation
- redux -> To store favorite movie list
- reanimated ->  For animations

### `src folder`

- assets -> Contains all the assets required for fonts, images, videos, etc.

- common components -> Reusable common components:

    - customText -> For uniform text components and a common font across the app
    - icon -> To add icons, just need to pass type (outline or solid) and name
    - navbar
    - pageWrrapper -> Manages page view

- contanst -> Contains all constant values such as colors, lists, etc.

- redux -> Contains redux store configuration and slices

- route -> Contains routing for the screens

- screen -> Includes all components rendered as screens:

    - Flash screen
    - Home screen -> Tab navigation with search, movie list, and favorite tabs
    - Movie details -> Stack screen to render movie details

- utils -> Consists of common reusable functions for API and utility functions


