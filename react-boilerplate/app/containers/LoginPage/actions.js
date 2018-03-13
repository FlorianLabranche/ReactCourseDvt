/*
 *
 * LoginPage actions
 *
 */

import {
  DEFAULT_ACTION,GENERATE_USER_REQUEST,GENERATE_USER_RESPONSE,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function generateUserRequest() {
  return {
    type: GENERATE_USER_REQUEST,
  };
}

export function generateUserResponse(res) {
  return {
    type: GENERATE_USER_RESPONSE,
    res
  };
}
