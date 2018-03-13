import { createSelector } from 'reselect';

/**
 * Direct selector to the loginPage state domain
 */
const selectLoginPageDomain = (state) => state.get('loginPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by LoginPage
 */

const makeSelectLoginPage = () => createSelector(
  selectLoginPageDomain,
  (substate) => substate.toJS()
);

const selectUser = (state) => state.get('user');
const selectUserData = () => createSelector(
  selectUser,
  (substate) => ({
    email: substate.get('email'),
    password: substate.get('password')
    })
);


export default makeSelectLoginPage;
export {
  selectLoginPageDomain,
  selectUserData,
};
