// @flow

import React, { Fragment, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import themes from './themes';
import config from './constants/config';
import fetchPeople from './services/fetchPeople';

import GlobalStyle from './components/utilities/GlobalStyle';
import Loader from './components/common/Loader';
import Input from './components/common/Input';
import SwitchTheme from './components/common/SwitchTheme';
import Header from './components/header/Header';
import NoResults from './components/sections/NoResults';
import Person, { type PersonData } from './components/sections/Person';

import { Wrapper, Content, Grid } from './App.styles';

const App = () => {
  const [name, setName] = useState('');
  const [people, setPeople] = useState(null);
  const [theme, setTheme] = useState('dark');
  const [debouncedName, setDebouncedName] = useState('');

  useEffect(
    () => {
      const timeout = setTimeout(() => {
        setDebouncedName(name);
      }, config.debounceDelay);

      return () => {
        clearTimeout(timeout);
      };
    },
    [name]
  );

  useEffect(
    () => {
      fetchPeople(debouncedName).then(data => setPeople(data));
    },
    [debouncedName]
  );

  const handleChangeTheme = (event: SyntheticInputEvent<EventTarget>) => {
    setTheme(event.target.value);
  };

  const handleChangeName = (event: SyntheticInputEvent<EventTarget>) => {
    setPeople(null);
    setName(event.target.value);
  };

  return (
    <ThemeProvider theme={themes[theme]}>
      <Fragment>
        <GlobalStyle />
        <Wrapper>
          <Header
            renderSwitch={() => (
              <SwitchTheme current={theme} onChange={handleChangeTheme} />
            )}
          />
          <Content>
            <Input
              placeholder="May the search be with you..."
              onChange={handleChangeName}
              value={name}
            />
            <Grid>
              {!people ? (
                <Loader />
              ) : people.count === 0 ? (
                <NoResults />
              ) : (
                people.results.map((person: PersonData, key: number) => (
                  <Person key={key} data={person} />
                ))
              )}
            </Grid>
          </Content>
        </Wrapper>
      </Fragment>
    </ThemeProvider>
  );
};

export default App;
