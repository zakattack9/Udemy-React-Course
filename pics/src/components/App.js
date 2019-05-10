import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
  state = { images: [] };

  // use async keyword to allow us to use "await" keyword on network request to store result in variable
  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term }
    })
    /*
    // could use promise to handle data after request
    .then((res) => {
      console.log(res.data.results);
    });
    */

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        {/* because <SearchBar /> is a component and not JSX, we can name the prop name for the "onSearchSubmit" function, anything we want, in this case, "onSubmitForm" */}
        <SearchBar onSubmitForm={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  };
};

export default App;