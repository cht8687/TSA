'use strict'

import createReducer from '../utils/createReducer';
import {
  GET_DIRECTION,
  HIDE_TAP_TEXT,
  SHOW_TAP_TEXT,
  HIDE_DIRECTION
} from '../constant/ActionType';
import {
  UP,
  DOWN
} from '../constant/home';
import { Record } from 'immutable';

class State extends Record({
  currentDirection: '',
  tapTextShow: true

}){

}

const actionHandler = {

  [GET_DIRECTION](state) {

    let nextNumber = Math.floor((Math.random() * 2) + 0);
    console.log(nextNumber);
    const nextDirection = nextNumber == 0 ? UP : DOWN;

    return state.set('currentDirection', nextDirection);
  },

  [HIDE_DIRECTION](state) {

    return state.set('currentDirection', '');
  },

  [HIDE_TAP_TEXT](state) {
    return state.set('tapTextShow', false);
  },

  [SHOW_TAP_TEXT](state) {
    return state.set('tapTextShow', true);
  }


}

export default createReducer(new State(), actionHandler);
