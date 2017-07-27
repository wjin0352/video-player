//@flow 

import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <div id="title_container" className="">
          <h2 id="title">Video Saver</h2>
          <p>Search for videos faster without ads then save them to a list for easy viewing later!
          </p>
        </div>
        <div className="divider"></div>
        <div className="input_container">
          <input 
            id="search_input"
            value={this.state.term}
            placeholder=' Type in your search here '
            onChange={event => this.onInputChange(event.target.value)}
          />
        </div>
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
