import axios from 'axios';
import { browserHistory } from 'react-router';

const DEV_URL = "http://localhost:5000";
const PROD_URL = "https://shrouded-mesa-30974.herokuapp.com/";

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
