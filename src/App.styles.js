// @flow

import styled from 'styled-components';

import type { ThemeProps } from './themes';

export const Wrapper = styled.main`
  padding: ${(p: ThemeProps) => p.theme.size.xl};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${(p: ThemeProps) => p.theme.size.s} 0;
`;
