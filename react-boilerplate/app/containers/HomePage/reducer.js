/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,NEWS_API_RESPONSE,NEWS_API_REQUEST
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

    case NEWS_API_RESPONSE:
      return state.set("data",action.news);

    default:
      return state;
  }
}

export default homePageReducer;
