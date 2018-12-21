// @flow

import base from './base';
import dark from './dark';
import light from './light';

export default {
  dark: {
    ...base,
    ...dark
  },
  light: {
    ...base,
    ...light
  }
};
