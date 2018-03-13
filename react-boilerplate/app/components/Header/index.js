/**
*
* Header
*
*/

import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Image, Menu } from 'semantic-ui-react'

import logo from './logo.png'
// import styled from 'styled-components';


class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item as={Link} to='/HomePage' header>
            <Image
              size='mini'
              src={logo}
              style={{ marginRight: '1.5em' }}
            />
            Cool Beaver
          </Menu.Item>
          <Menu.Item as={Link} to='ProfilePage'>Profile</Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item as={Link} to='/' name='logout' onClick={this.props.handleLogOut} />
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}

Header.propTypes = {

};

export default Header;
