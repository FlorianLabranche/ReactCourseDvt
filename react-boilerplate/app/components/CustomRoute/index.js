/**
*
* CustomRoute
*
*/

import React from 'react';
import {Route} from 'react-router-dom';
// import styled from 'styled-components';


class CustomRoute extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {path, component, withHeader } = this.props;
    return (
      <div>
        {withHeader && <Header />}
        <Route exact path={path} component={component} />
        <Footer />
      </div>
    );
  }
}

CustomRoute.propTypes = {

};

export default CustomRoute;
