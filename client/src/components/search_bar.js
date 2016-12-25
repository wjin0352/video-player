import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  // <button type="button"
  //   className="btn more_btn"
  //   data-toggle="popover" title="How to Start!" data-container="body" data-content="Start by typing in a Search for videos! Once you find a video you want to save, just click on the video and click the 'Save to list' button. This will save your video to a community video watch list for everyone to share! Then click on the Favorites list to be taken to the community video favorites feed."
  //   data-placement="bottom"
  //   >More Info
  // </button>

  render() {
    return (
      <div className="search-bar">
        <div id="title_container">
          <h4 id="title">Video Saver</h4>
          <p>Search your favorite YouTube videos and save them to a list for easy access later!
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
