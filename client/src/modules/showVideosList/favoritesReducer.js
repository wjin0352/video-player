import * as actions from './favoritesListActions';

const initialState = {
  videos: [],
  error: ''
}

const favoriteVideos = (state = initialState, action) => {
  switch(action.type) {
    case 'FAVORITES_SUCCESS':
      return {
        ...state,
        videos: [...action.videos]
      }
    case 'FAVORITES_ERROR':
      return {
        ...state,
        error: action.error
      }
    case 'UPDATE_FEED':
      // console.log('state.videos: ',state.videos)
      // const targetIndex = state.videos.findIndex(video => video._id === action.id);

      // return {
      //   ...state,
      //   videos: [ ...state.videos.slice(0, targetIndex), ...state.videos.slice(targetIndex +1)  ]
      // };

      return {
        ...state,
        videos: state.videos.filter(video => { return video._id !== action.id })
      }
  default:
    return state;
  }
}

export default favoriteVideos;
