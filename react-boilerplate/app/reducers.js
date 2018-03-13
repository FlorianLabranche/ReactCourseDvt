/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import {GENERATE_USER_REQUEST, GENERATE_USER_RESPONSE} from 'containers/LoginPage/constants'
import languageProviderReducer from 'containers/LanguageProvider/reducer';

/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@4
 *
 */

// Initial routing state
const routeInitialState = fromJS({
  location: null,
});


/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        location: action.payload,
      });
    default:
      return state;
  }
}


const initialState = fromJS({
  name: null,
  location: null, 
  email: null,
  phone: null,
  password: null,
  picture: null,
});

function generateUserReducer(state = initialState, action) {
  switch (action.type) {
    case GENERATE_USER_REQUEST:
      return state;
    case GENERATE_USER_RESPONSE:
      return state.set("name", action.res.results[0].name)
                  .set("location",action.res.results[0].location)
                  .set("email", action.res.results[0].email)
                  .set("phone", action.res.results[0].phone)
                  .set("password", action.res.results[0].login.password)
                  .set("picture", action.res.results[0].picture.large);
    default:
      return state;
  }
}

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(injectedReducers) {
  return combineReducers({
    route: routeReducer,
    language: languageProviderReducer,
    user: generateUserReducer,
    ...injectedReducers,
  });
}
