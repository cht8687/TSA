'use strict'

import React, {
  Component,
  StatusBarIOS
} from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux/native';
import reducers from './reducers/index';
import logger from './middleware/logger';
import thunk from 'redux-thunk';
import App from './containers/App';

const createStoreWithMW = applyMiddleware(logger, thunk)(createStore);
const store = createStoreWithMW(reducers);

export default class Root extends Component {

  componentDidMount () {
    StatusBarIOS.setHidden(true)
  }

  render () {
    return (
      <Provider store={store}>
        {() => <App />}
      </Provider>
    )
  }
}
