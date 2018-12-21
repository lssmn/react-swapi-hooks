// @flow

import React from 'react';
import styled from 'styled-components';

import type { ThemeProps } from '../../themes';

const Wrapper = styled.div`
  padding: ${(p: ThemeProps) => p.theme.size.s} 0;
`;

const NoResults = () => <Wrapper>Nobody found in the galaxy</Wrapper>;

export default NoResults;
