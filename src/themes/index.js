// @flow

import base from './base';
import dark from './dark';
import light from './light';

const theme = {
  dark: {
    ...base,
    ...dark
  },
  light: {
    ...base,
    ...light
  }
};

export type Theme = typeof base & (typeof dark | typeof light);

export type ThemeProps = {
  theme: Theme
};

export default theme;
