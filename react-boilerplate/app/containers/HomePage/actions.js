/*
 *
 * HomePage actions
 *
 */

import {
  DEFAULT_ACTION,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function newsApiRequest() {
  return {
    type: NEWS_API_REQUEST,
  };
}

export function newsApiAction(news) {
  return {
    type: NEWS_API_RESPONSE,
    news
  };
}
