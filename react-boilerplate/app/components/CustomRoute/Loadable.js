/**
 *
 * Asynchronously loads the component for CustomRoute
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
