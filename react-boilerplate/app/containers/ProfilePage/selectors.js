import { createSelector } from 'reselect';

/**
 * Direct selector to the profilePage state domain
 */
const selectProfilePageDomain = (state) => state.get('profilePage');

/**
 * Direct selector to the globalUser state domain
 */
const selectProfileUserDomain = (state) => state.get('user');

/**
 * Other specific selectors
 */

const selectUserName = () => createSelector(
  selectProfileUserDomain,
  (substate) => substate.toJS(),
  (name) => ({ name: name })
);


/**
 * Default selector used by ProfilePage
 */

const makeSelectProfilePage = () => createSelector(
  selectProfilePageDomain,
  (substate) => substate.toJS()
);

export default makeSelectProfilePage;
export {
  selectProfilePageDomain,
};
