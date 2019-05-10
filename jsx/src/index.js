// import React and ReactDOM files
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
  return 'Click on me!';
}

// create React component function
const App = () => {
  const buttonText = 'Click Me!';

  return (
    <div>
      <label className="label" htmlFor="name">Enter name:</label>
      <input id="name" type="text" />
      <button style={{backgroundColor: 'blue', color: 'white'}}>
        {getButtonText()}
      </button>
    </div>
  )
};

// use console to figure out JSX specific attributes
// JSX cannot turn JS objects into text
// traditionally double-quotes are used for any JSX properties, everything else should be put in single quotes

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
