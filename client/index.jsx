import React from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import configureStore from './store';
import routes from './routes';
import ThemeProvider from './modules/App/components/ThemeProvider';

require('./styles/main.scss');

// Load the p5 png logo, so that webpack will use it
require('./images/p5js-square-logo.png');

const history = browserHistory;
const initialState = window.__INITIAL_STATE__;

const store = configureStore(initialState);

const App = () => (
  <Provider store={store}>
    <ThemeProvider>
      <Router history={history} routes={routes(store)} />
    </ThemeProvider>
  </Provider>
);

const HotApp = hot(App);

render(
  <HotApp />,
  document.getElementById('root')
);
