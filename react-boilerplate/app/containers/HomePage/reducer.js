/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  data:""
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;

    case NEWS_API_REQUEST:
      return state;

    case NEWS_API_ACTION:
      return state.set("data",action.rep);

    default:
      return state;
  }
}

export default homePageReducer;
