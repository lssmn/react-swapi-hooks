// @flow

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  padding: ${p => p.theme.size.xs} 0;
  margin: ${p => p.theme.size.xs};
`;

const Heading = styled.span`
  border-bottom: 1px solid ${p => p.theme.color.border};
  padding-bottom: ${p => p.theme.size.xs};
  margin-bottom: ${p => p.theme.size.s};
`;

const Row = styled.div`
  margin-bottom: ${p => p.theme.size.xs};
`;

const Label = styled.span`
  margin-right: ${p => p.theme.size.xs};
  font-weight: 400;
  color: #999;
`;

const Value = styled.span`
  font-weight: normal;
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
        <Value>{mass}</Value>
      </Row>
      <Row>
        <Label>Height</Label>
        <Value>{height}</Value>
      </Row>
    </Wrapper>
  );
};

export default Person;
