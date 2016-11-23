import axios from 'axios';
import { closeModal } from '../modal/modalActions';
import { updateVideoFeed } from '../showVideosList/favoritesListActions';
import { browserHistory } from 'react-router';

// delete video from favorites list
  export const deleteVideo = (id) => {
    return (dispatch) => {
      axios.delete(`/videos/${id}`)
      .then(response => {
        dispatch(closeModal())
        dispatch(updateVideoFeed(id))
        browserHistory.push('/favorites-list')
      })
      .catch(err => console.log(err.message));
    };
  }
