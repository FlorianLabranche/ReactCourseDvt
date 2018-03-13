/**
*
* CustomCard
*
*/

import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import styled from 'styled-components';

const StyledImg  = styled(Image)`
width: 100%;
height: auto;
`;

class CustomCard extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {user} = this.props;
    return (
      <Card>
        <StyledImg src={user.img} />
        <Card.Content>
          <Card.Header>
            {user.displayName}
      </Card.Header>
          <Card.Meta>
            <span className='phone'>
              {user.phone}
        </span>
          </Card.Meta>
          <Card.Description>
            
      </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href={`mailto:${user.email}`}>
            <Icon name='mail' />
      </a>
        </Card.Content>
      </Card>
    );
  }
}

CustomCard.propTypes = {

};

export default CustomCard;
