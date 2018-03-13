/**
*
* Footer
*
*/

import React from 'react';
import { Segment, Container, Grid, Header, List, Divider, Image } from 'semantic-ui-react'

import logo from './logo.png'
// import styled from 'styled-components';


class Footer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Segment
      inverted
      vertical
      style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
    >
      <Container textAlign='center'>
        <Image
          centered
          size='mini'
          src={logo}
        />
        <List horizontal inverted divided link>
          <List.Item as='a' href='#'>Site Map</List.Item>
          <List.Item as='a' href='#'>Contact Us</List.Item>
          <List.Item as='a' href='#'>Terms and Conditions</List.Item>
          <List.Item as='a' href='#'>Privacy Policy</List.Item>
        </List>
      </Container>
</Segment>
    );
  }
}

Footer.propTypes = {

};

export default Footer;
