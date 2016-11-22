import { combineReducers } from 'redux';
import video from '../modules/video/videoReducer';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

const allReducers = combineReducers({
  video,
  routing: routerReducer
});

export default allReducers;
