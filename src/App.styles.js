// @flow

import styled from 'styled-components';

export const Wrapper = styled.main`
  padding: ${p => p.theme.size.xl};
`;

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: ${p => p.theme.size.l} 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${p => p.theme.size.s} 0;
`;
