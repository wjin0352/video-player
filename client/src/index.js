import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './modules/createVideo/video_detail';
import App from './components/app';
import FavoritesList from './modules/showVideosList/favoritesList';
import MainPage from './components/main_page';

import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './redux/store';

// creates enhanced history that syncs navigation events with store
const history = syncHistoryWithStore(browserHistory, store);

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={MainPage} />
        <Route path="favorites-list" component={FavoritesList} />
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('app'));
