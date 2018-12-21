// @flow

import React from 'react';
import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  0% {
    transform: translate3d(-50%, -50%, 0) rotate(0deg);
  }
  100% {
    transform: translate3d(-50%, -50%, 0) rotate(360deg);
  }
`;

const Spinner = styled.div`
  position: relative;
  padding: ${p => p.theme.size.xl};
  transition: opacity linear 0.1s;
  opacity: 1;

  &::before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    width: ${p => p.theme.size.l};
    height: ${p => p.theme.size.l};
    border: solid ${p => p.theme.size.xs} ${p => p.theme.color.border};
    border-bottom-color: ${p => p.theme.color.logo};
    border-radius: 50%;
    content: '';
    animation: 0.8s linear infinite ${animation};
    will-change: transform;
  }
`;

const Loader = () => <Spinner />;

export default Loader;
