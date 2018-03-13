/**
*
* CustomRoute
*
*/

import React from 'react';
import { Route } from 'react-router-dom';
import Header from 'components/Header'
import Footer from 'components/Footer'
import Container from 'components/StyledContainer'
import { height } from 'window-size';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import {defaultAction} from "./actions"
// import styled from 'styled-components';


class CustomRoute extends React.Component { // eslint-disable-line react/prefer-stateless-function
  logout  = () => this.props.logoutConnexion();
  render() {
    const { path, component, withHeader, exact } = this.props;
    return (
      <div>
        {withHeader && <Header handleLogOut={this.logout}/>}
        <Container text>
          <Route exact={exact} path={path} component={component} />
        </Container>
        <Footer />
      </div>
    );
  }
}

CustomRoute.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    logoutConnexion : () => dispatch(defaultAction()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(CustomRoute);
