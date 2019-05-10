import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

// class-based component
class App extends React.Component {
  /*
  constructor(props) {
    super(props);
    // this is the only time we do direct assignment to this.state
    this.state = {lat: null, errorMessage: ''};
  }
  */
  
  // alternate way to intialize state (equivalent to using constructor)
  state = {lat: null, errorMessage: ''};

  // called when component is first created
  // put all data-loading code in componentDidMount method instead of constructor
  componentDidMount () {
    window.navigator.geolocation.getCurrentPosition(
      // callback function that updates state with current position
      // only way to update state using setState() method AFTER being instantiated; pass in object with updated property
      position => this.setState({lat: position.coords.latitude}),
      err => this.setState({errorMessage: err.message})
    );
    console.log('Component was rendered to the screen'); 
  }

  // called when component is rendered after creation
  componentDidUpdate () {
    console.log('Component was just updated - it rerendered!');
  }

  renderContent () {
    // conditional rendering
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }
    
    if (this.state.lat && !this.state.errorMessage) {
      // takes property from state and passes it in as a prop to component
      return <SeasonDisplay lat={this.state.lat} />
    }
    
    return <Spinner message="Please accept location request" />;
  }

  // need to define render method 
  render () {
    // a helper method should be used to help conditionally render content (keeps conditionals OUTSIDE render method)
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    );
  };
};

ReactDOM.render(<App />, document.querySelector('#root'));