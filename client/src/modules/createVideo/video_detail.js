import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveVideo } from  './videoActions';
import { Link } from 'react-router';
import { Button, OverlayTrigger, ButtonToolbar, Popover } from 'react-bootstrap'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

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

  videoDetailCardBootStrap(video, url, popoverFocus) {
    return (
      <div className="video-detail col-md-7 col-lg-8 z-depth-2">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url} allowFullScreen ></iframe>
        </div>
        <div className="details">
          <div>{video.snippet.title}</div>
          <div>{video.snippet.description}</div>
          <OverlayTrigger trigger="focus" placement="top"  overlay={popoverFocus}>
             <Button className="btn save_btn deep-purple accent-1 waves-effect waves-orange" id="popover" onClick={() => this.handleClickButton(video)}>Save to list</Button>
           </OverlayTrigger>
          <Link className="favorites-list-link" to="/favorites-list">
            <Button id="details_btn" className="list_btn blue accent-1">Favorites List</Button>
          </Link>
        </div>
      </div>
    );
  }

  render() {
    const video = this.props.video;
    if (!video) {
      return <div>Loading...</div>;
    }
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    const popoverFocus = (
      <Popover id="popover-trigger-focus" title="Thanks">
        <strong>Your video was successfully saved to the list!</strong>
      </Popover>
    );
    return (
      this.videoDetailCardBootStrap(video, url, popoverFocus)
    );
  }
};

function mapStateToProps(state) {
  return {
    savedVideo: state.savedVideo
  };
}

export default connect(mapStateToProps , { saveVideo })(VideoDetail);
