# Moviezz

 The Movie browsing app allows to brows the movies in varoious category & provide movie info 

### `Run app`
1 clone / download the repo
2 yarn add
3 npx react-native run-ios / npx react-native run-android

### `Packages used`

- axios -> API integration
- react-navigation -> To add screen and navigation
- redux -> To store favorite movie list
- reanimated -> To add animation

### `src folder`

- assets -> this is folter conation all the assets required for font, we can add images, video etc

- common components -> i have created some reusable common components such
    - customText -> for uniform text component and common font across the app
    - icon -> easy to add icon on page, just need to pass type (outline or solid) and name
    - navbar
    - pageWrrapper -> allows to manage page view

- contanst -> all the contant values such as color, list etc

- redux -> conatins redux store config and slice

- route -> this folder containg routing for the screen

- screen -> Incluse all component that are renders as screen
    - Flash screen
    - Home screen -> tab navigation with search, movie list and favorite tab
    - Movie details -> Stack screen to render movie details

- utils -> this consist of common reusable function for api and utility function


