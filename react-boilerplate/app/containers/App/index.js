/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch } from 'react-router-dom';
import CustomRoute from 'components/CustomRoute'

import LoginPage from 'containers/LoginPage/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import ProfilePage from 'containers/ProfilePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

export default function App() {
  return (
    <div>
      <Switch>
        <CustomRoute exact path="/" component={LoginPage} withHeader={false} />  
        <CustomRoute path="/HomePage" component={HomePage} withHeader />
        <CustomRoute path="/ProfilePage" component={ProfilePage} withHeader />
        <CustomRoute path="/" component={NotFoundPage} withHeader />
      </Switch>
    </div>
  );
}
