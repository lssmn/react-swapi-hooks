// @flow

import React from 'react';
import styled from 'styled-components';

import type { ThemeProps } from '../../themes';

const Wrapper = styled.div`
  width: 100%;
`;

const Label = styled.label`
  margin-bottom: ${(p: ThemeProps) => p.theme.size.s};
`;

const StyledInput = styled.input`
  width: 100%;
  padding: ${(p: ThemeProps) => p.theme.size.s};
  border: 1px solid ${(p: ThemeProps) => p.theme.color.border};
  font-size: ${(p: ThemeProps) => p.theme.size.ms};
`;

type Props = {
  label?: string,
  value: string,
  onChange: (event: SyntheticInputEvent<EventTarget>) => void,
  placeholder?: string
};

const Input = ({ label, value, onChange = () => {}, placeholder }: Props) => (
  <Wrapper>
    {label ? <Label>{label}</Label> : null}
    <StyledInput value={value} onChange={onChange} placeholder={placeholder} />
  </Wrapper>
);

export default Input;
