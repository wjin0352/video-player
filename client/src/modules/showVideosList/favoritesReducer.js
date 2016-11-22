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
  default:
    return state;
  }
}

export default favoriteVideos;
