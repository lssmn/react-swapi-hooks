// @flow

import React from 'react';
import styled from 'styled-components';

import type { ThemeProps } from '../../themes';

const Wrapper = styled.div`
  width: 100%;
`;

const Select = styled.select`
  margin: 0 ${(p: ThemeProps) => p.theme.size.s};
  padding: ${(p: ThemeProps) => p.theme.size.xs} ${p => p.theme.size.s};
  border: 1px solid ${(p: ThemeProps) => p.theme.color.border};
`;

type Props = {
  current?: string,
  onChange: (event: SyntheticInputEvent<EventTarget>) => void
};

const SwitchTheme = ({ current = 'light', onChange }: Props) => (
  <Wrapper>
    <label>Theme</label>
    <Select onChange={onChange} value={current}>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </Select>
  </Wrapper>
);

export default SwitchTheme;
