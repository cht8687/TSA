'use strict'

import { combineReducers } from 'redux';
import { default as home } from './home';

const reducers = combineReducers({
  home
});

export default reducers;
