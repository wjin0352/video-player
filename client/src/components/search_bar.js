import React, { Component } from 'react';
import { Button } from 'react-bootstrap'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <div id="title_container">
          <h2 id="title">Video Saver</h2>
          <p>Search for videos faster without ads then save them to a list for easy viewing later!
          </p>
        </div>
        <Button className="btn btn-primary" id="search_button" onClick={event => this.onInputChange(event.target.value)}>Submit</Button>
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
