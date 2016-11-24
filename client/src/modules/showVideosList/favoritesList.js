import React, { Component } from 'react';
import { connect } from 'react-redux';
import { favoritesList } from './favoritesListActions';
import ModalComponent from '../modal/ModalComponent';
import { getModalData, openModal } from '../modal/modalActions';
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import Header from '../../components/header';

class FavoritesList extends Component {
  componentWillMount() {
    this.props.favoritesList()
  }

  handleModal(video) {
    this.props.openModal();
    this.props.getModalData(video);
  }

  renderVideos(video) {
    return (
        <Col xs={4} md={3} className="video_single_feed" key={video._id}>
          <Thumbnail src={video.image} alt="242x200" className="video_image_thumbnail">
            <h3>{video.title}</h3>
            <p>
              {video.description}
            </p>
            <Button bsStyle="primary" onClick={
              () => this.handleModal(video)}
              >Watch</Button>&nbsp;
          </Thumbnail>
        </Col>
    );
  }

  render() {
    const videos = this.props.videos
    return (
      <div>
      <Header />
        <div className="videos_feed">
          {videos.map(video => this.renderVideos(video))}
        </div>
        <ModalComponent />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    videos: state.favorites.videos
  };
}

export default connect(mapStateToProps, { favoritesList, getModalData, openModal })(FavoritesList);
