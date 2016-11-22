import { combineReducers } from 'redux';
import video from '../modules/createVideo/videoReducer';
import favorites from '../modules/showVideosList/favoritesReducer';
import modalReducer from '../modules/modal/modalReducer';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

const allReducers = combineReducers({
  video,
  favorites,
  modalReducer,
  routing: routerReducer
});

export default allReducers;
