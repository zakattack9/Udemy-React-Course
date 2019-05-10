# Udemy React Course Projects

### How To Run Each Project
*Every folder is a seperate React project.*

1. Navigate to the root folder of a React project (ex. "jsx")
2. `npm i` to initialize node packages
3. `npm start` to run project on localhost:3000

### Project Takeaways

#### JSX
__Basic React component__
- using basic functional components
- introduction to JSX syntax
- special attribute names (*className*)
- using style attribute in JSX

#### Components
__Simple example of nesting components__
- nesting components
- using *props* to pass data from parent to child
- importing and exporting components to work with each other

#### Seasons
__Determines if it is summer or winter based on user's location from Geolocation API__
- combining class-based and functional components
- using `constructor` and `super()`
- utilizing *state* to render updated content (`setState()`)
- component lifecycle methods (ex. `componentDidMount()`)
- conditional rendering
- linking CSS files to a component
- creating reusable components (*Spinner.js*)
- default props for a component (`.defaultProps`)
- segmenting large dynamic code into parts

#### Pics
__Uses Unsplash API to display a grid of photos based on a search term__
- rendering content from a server
- handling user events and interaction (ex. `onChange`, `onClick`)
- using arrow functions to control the scope of `this` (eliminates need to bind `this` to class)
- handling forms in React
- using `aysnc` and `await` to handle returned data from a request
- referencing callback functions without invoking on every render
- creating *refs* to reference DOM node of JSX element
- passing data from child to parent through referencing functions
- using React `key` property for lists of elements to efficiently render
- controlled components (ensures that we store data inside the component and not in DOM)
- CSS grid
- using Axios for ajax requests

#### Videos
__Uses YouTube API to display a list of videos and a video player based on search term__
- using a callback to communicate information from child to parent components