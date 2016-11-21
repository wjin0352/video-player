import React, { Component } from 'react';

class VideoDetail extends Component {
  constructor(props) {
    super(props);
  }

  handleClickButton(video) {
    console.log(video)
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
          <iframe className="embed-responsive-item" src={url} allowFullScreen ></iframe>
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

export default VideoDetail;
