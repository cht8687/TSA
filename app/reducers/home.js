'use strict'

import createReducer from '../utils/createReducer';
import {
  GET_DIRECTION,
  HIDE_TAP_TEXT,
  SHOW_TAP_TEXT
} from '../constant/ActionType';
import {
  LEFT,
  RIGHT
} from '../constant/home';
import { Record } from 'immutable';

class State extends Record({
  currentDirection: '',
  tapTextShow: true

}){

}

const actionHandler = {

  [GET_DIRECTION](state) {

    let nextNumber = random.nextInt(2);
    nextDirection = nextNumber == 0 ? LEFT : RIGHT;

    return state.set('currentDirection', data);
  },

  [HIDE_TAP_TEXT](state) {
    return state.set('tapTextShow', false);
  },

  [SHOW_TAP_TEXT](state) {
    return state.set('tapTextShow', true);
  }


}

export default createReducer(new State(), actionHandler);
