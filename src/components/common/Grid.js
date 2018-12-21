// @flow

import styled from 'styled-components';

import type { ThemeProps } from '../../themes';

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: ${(p: ThemeProps) => p.theme.size.l} 0;
`;

export default Grid;
