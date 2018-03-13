/**
 *
 * Asynchronously loads the component for StyledContainer
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
