// @flow

import React from 'react';
import styled from 'styled-components';

import type { ThemeProps } from '../../themes';

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  padding: ${(p: ThemeProps) => p.theme.size.s} 0;
  margin: ${(p: ThemeProps) => p.theme.size.xs};
`;

const Heading = styled.span`
  border-bottom: 1px solid ${(p: ThemeProps) => p.theme.color.border};
  padding-bottom: ${(p: ThemeProps) => p.theme.size.xs};
  margin-bottom: ${(p: ThemeProps) => p.theme.size.s};
`;

const Row = styled.div`
  margin-bottom: ${(p: ThemeProps) => p.theme.size.xs};
`;

const Label = styled.span`
  margin-right: ${(p: ThemeProps) => p.theme.size.xs};
  font-weight: 400;
  color: #999;
`;

export type PersonData = {
  [key: string]: string
};

type Props = {
  data: PersonData
};

const Person = ({ data }: Props) => {
  const { name, height, mass } = data;

  return (
    <Wrapper>
      <Heading>{name}</Heading>
      <Row>
        <Label>Mass</Label>
        <span>{mass}</span>
      </Row>
      <Row>
        <Label>Height</Label>
        <span>{height}</span>
      </Row>
    </Wrapper>
  );
};

export default Person;
