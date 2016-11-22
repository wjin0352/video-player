import React, { Component } from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
        <Link className="favorites-list-link" to="/favorites-list">
          <Button bsStyle="default">Favorites List</Button>
        </Link>
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
