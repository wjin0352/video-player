import React, { Component } from 'react';
import { connect } from 'react-redux';
import { favoritesList } from './favoritesListActions';
import ModalComponent from '../modal/ModalComponent';
import { getModalData, openModal } from '../modal/modalActions';
import { Link } from 'react-router';
import Header from '../../components/header';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Subheader from 'material-ui/Subheader';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  videosSimple: {
    width: 800,
    height: 800,
  },
  videosComplex: {
    width: 800,
    height: 800,
  },
  button: {
    marginRight: 20
  }
};

class FavoritesList extends Component {
  componentWillMount() {
    this.props.favoritesList()
  }

  handleModal(video) {
    this.props.openModal();
    this.props.getModalData(video);
  }

  simpleVideosCard(videos) {
    return (
      <div>
        <div style={styles.root}>
          <GridList
            cellHeight={320}
            style={styles.videosSimple}
          >
            <Subheader>Results: </Subheader>
            {videos.map((video) => (
              <GridTile
                onClick={() => this.handleModal(video)}
                key={video._id}
                title={video.title}
                subtitle={<span>by <b>{video.title}</b></span>}
                actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
              >
                { !video.image ? <h1>No Image</h1> : <img src={video.image} /> }
              </GridTile>
            ))}
          </GridList>
        </div>
      </div>
    );
  }

  favoriteVideosCard(videos) {
    return (
      <div style={styles.root}>
        <GridList
          cellHeight={270}
          style={styles.videosComplex}
        >
          <Subheader>Search results: </Subheader>
          {videos.map((video, idx) => (
            <GridTile
              onClick={() => this.handleModal(video)}
              key={video._id}
              title={video.title}
              subtitle={<span>by <b>{video.title}</b></span>}
              actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
              actionPosition="left"
              titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
              cols={ (idx % 3 === 0 ) ? 2 : 1}
              rows={ (idx % 3 === 0) ? 1.2 : 1}
            >
              { !video.image ? <h1 id="no_image"> No Image </h1> : <img src={video.image} />
              }
            </GridTile>
          ))}
        </GridList>
      </div>
    );  
  }

  render() {
    const videos = this.props.videos.reverse();
    return (
      <div>
      <Header />
        <div className="favorite_videos_list">
          {this.favoriteVideosCard(videos)}
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