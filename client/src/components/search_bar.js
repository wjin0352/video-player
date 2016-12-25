import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <div id="title_container">
          <h4 id="title">Video Saver</h4>
          <p>Search for videos faster without ads then save them to a list for easy viewing later!
          </p>
        </div>
        <input
          value={this.state.term}
          placeholder=' Type in your search here '
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
