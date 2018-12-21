// @flow

import config from '../constants/config';

const fetchPeople = async (name: string) => {
  try {
    const res = await fetch(`${config.apiUrl}?search=${name}`);

    if (res && res.ok) {
      const data = await res.json();

      return data;
    }

    return null;
  } catch (err) {
    return null;
  }
};

export default fetchPeople;
