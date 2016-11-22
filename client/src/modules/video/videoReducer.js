import * as actions from './videoActions';

const initialState = {
  savedVideo: {
    title: '',
    description: '',
    url: ''
  },
  error: ''
}

const video = (state = initialState, action) => {
  switch(action.type) {
    case 'VIDEO_SUCCESS':
      return {
        ...state,
        savedVideo: {...action.video}
      }
    case 'VIDEO_ERROR':
      return {
        ...state,
        error: action.error
      }
  default:
    return state
  }
}

export default video;
