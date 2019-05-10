import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  // using an arrow function, fixes the scope of "this" (automatically binds "this" to class)
  onFormSubmit = event => {
    // prevents page from refreshing itself upon submission of form
    event.preventDefault();

    // because this is a class-based component, we reference props with "this.props"
    // this call references the "onSearchSubmit" function in App.js
    this.props.onSubmitForm(this.state.term);
  };

  render () {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input type="text" value={this.state.term} onChange={(e) => this.setState({term: e.target.value})} />
          </div>
        </form>
      </div>
    );
  };
};

export default SearchBar;