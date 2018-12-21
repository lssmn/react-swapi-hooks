// @flow

import React, { type Node } from 'react';
import styled from 'styled-components';
import Logo from './Logo';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  text-align: center;
`;

export const Switch = styled.div`
  width: 100%;
`;

type Props = {
  renderSwitch: () => Node
};

const Header = ({ renderSwitch }: Props) => (
  <Wrapper>
    <Switch>{renderSwitch && renderSwitch()}</Switch>
    <Logo>Star Wars</Logo>
  </Wrapper>
);

export default Header;
