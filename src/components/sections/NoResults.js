// @flow

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: ${p => p.theme.size.s} 0;
`;

const NoResults = () => <Wrapper>Nobody found in the galaxy</Wrapper>;

export default NoResults;
