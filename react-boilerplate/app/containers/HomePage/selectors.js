import { createSelector } from 'reselect';

/**
 * Direct selector to the homePage state domain
 */
const selectHomePageDomain = (state) => state.get('homePage');

const selectNewsData = () => createSelector(
  selectHomePageDomain,
  (substate) => substate.get("data")
);

const makeSelectHomePage = () => createSelector(
  selectHomePageDomain,
  (substate) => substate.toJS()
);


export default makeSelectHomePage;
export {
  selectHomePageDomain,
  selectNewsData
};
