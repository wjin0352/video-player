import React, { Component } from 'react';
import { render } from 'react-dom';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from '../modules/createVideo/video_detail';
import variables from '../utils/variables.client';

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('movie trailers');
  }

  // var results = YouTube.Search.list('id,snippet', {q: 'dogs', maxResults: 25});
  videoSearch(term) {
    YTSearch({key: variables.API_KEY, term: term, maxResults: 20}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    const { selectedVideo, videos } = this.state;

    return (
      <div className="main_page">
        <SearchBar onSearchTermChange={videoSearch} />
          <container className="videos_container z-depth-5">
            <VideoDetail video={selectedVideo} />
            <VideoList
              onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
              videos={videos} />
            <div>{this.props.children}</div>
          </container>
      </div>
    );
  }
}

export default MainPage;
