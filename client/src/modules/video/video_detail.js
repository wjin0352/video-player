import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveVideo } from  './videoActions';

class VideoDetail extends Component {
  constructor(props) {
    super(props);
  }

  handleClickButton(video) {
    var title = video.snippet.title;
    var description = video.snippet.description;
    var url = video.id.videoId;
    var image = video.snippet.thumbnails.high.url;
    var publishedAt = video.snippet.publishedAt;
    const videoInfo = {
      title,
      description,
      url,
      image,
      publishedAt
    }
    this.props.saveVideo(videoInfo);
  }

  render() {
    const video = this.props.video;
    if (!video) {
      return <div>Loading...</div>;
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
      <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item main_video" src={url} allowFullScreen ></iframe>
        </div>
        <div className="details">
          <div>{video.snippet.title}</div>
          <div>{video.snippet.description}</div>
          <button className="btn btn-primary" onClick={() => this.handleClickButton(video)} >Save to list</button>
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    savedVideo: state.savedVideo
  };
}

export default connect(mapStateToProps , { saveVideo })(VideoDetail);
