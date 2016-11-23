import axios from 'axios';
import { browserHistory } from 'react-router';

/* VIDEO ACTIONS */
  export function saveVideo(video) {
    return (dispatch) => {
      axios.post('/videos', {...video})
      .then(response => {
        console.log('the RESPONSE>JSON: ',response.data)
        dispatch(videoSuccess(response.data));
      })
      .catch(err => {
        dispatch(videoError(err.message));
      })
    };
  }

  export function videoSuccess(video) {
    return {
      type: 'VIDEO_SUCCESS',
      video
    };
  }

  export function videoError(error) {
    return {
      type: 'VIDEO_ERROR',
      error
    };
  }
