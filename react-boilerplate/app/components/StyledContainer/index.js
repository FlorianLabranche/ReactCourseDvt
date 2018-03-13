/**
*
* StyledContainer
*
*/

import React from 'react';
import styled from 'styled-components';
import { Container } from 'semantic-ui-react'



const StyledContainer = styled(Container)`
    padding-top: 7em;
    min-height: calc(100vh - 199.8px - 70px);
`;

StyledContainer.propTypes = {

};

export default StyledContainer;
