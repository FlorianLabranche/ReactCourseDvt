/**
*
* CustomRoute
*
*/

import React from 'react';
import { Route } from 'react-router-dom';
import Header from 'components/Header'
import Footer from 'components/Footer'
import { Container } from 'semantic-ui-react'
import { height } from 'window-size';
// import styled from 'styled-components';


class CustomRoute extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { path, component, withHeader, exact } = this.props;
    console.log(path)
    console.log(component)
    console.log(withHeader)
    return (
      <div>
        {withHeader && <Header />}
        <Container text style={{ marginTop: '7em', minHeight: '100vh' }}>
          <Route exact={exact} path={path} component={component} />
        </Container>
        <Footer />
      </div>
    );
  }
}

CustomRoute.propTypes = {

};

export default CustomRoute;
