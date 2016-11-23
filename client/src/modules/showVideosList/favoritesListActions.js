import axios from 'axios';
import { browserHistory } from 'react-router';

/* Favorites video list */
  export function favoritesList() {
    return (dispatch) => {
      axios.get('/videos')
      .then(response => {
        console.log('GET REQUEST Favorite VIDEOS: ', response.data)
        dispatch(favoritesSuccess(response.data));
      })
      .catch(err => {
        dispatch(favoritesError(err.message));
      })
    };
  }

  export function favoritesSuccess(videos) {
    return {
      type: 'FAVORITES_SUCCESS',
      videos
    };
  }

  export function favoritesError(error) {
    return {
      type: 'FAVORITES_ERROR',
      error
    };
  }

  export function updateVideoFeed(id) {
    return {
      type: 'UPDATE_FEED',
      id
    };
  }
