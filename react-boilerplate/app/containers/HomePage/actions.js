/*
 *
 * HomePage actions
 *
 */

import {
  DEFAULT_ACTION,NEWS_API_REQUEST,NEWS_API_RESPONSE
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

export function newsApiResponse(news) {
  return {
    type: NEWS_API_RESPONSE,
    news
  };
}
