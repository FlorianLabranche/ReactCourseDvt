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

const selectUserBasics = () => createSelector(
  selectProfileUserDomain,
  selector => selector.toJS().user,
  (a, b) => ({
    displayName: b.name.first + ' ' + b.name.last,
    email: b.email,
    img: b.picture,
    phone: b.phone
  })
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
  selectUserBasics
};
