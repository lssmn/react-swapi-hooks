// @flow

import React, { Component, Fragment } from 'react';
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

type State = {
  name: string,
  people: ?{
    count: number,
    results: Array<PersonData>
  },
  theme: string,
  debouncedName: string
};

class App extends Component<*, State> {
  state = {
    name: '',
    people: null,
    theme: 'dark',
    debouncedName: ''
  };

  debounceTimeout: ?TimeoutID = null;

  componentDidMount() {
    const { name } = this.state;

    fetchPeople(name).then(data =>
      this.setState({
        people: data
      })
    );
  }

  componentDidUpdate(prevProps: *, prevState: State) {
    const { name, debouncedName } = this.state;

    if (debouncedName === prevState.debouncedName) {
      if (this.debounceTimeout) {
        clearTimeout(this.debounceTimeout);
      }

      this.debounceTimeout = setTimeout(() => {
        this.setState({
          debouncedName: name
        });
      }, config.debounceDelay);
    } else {
      fetchPeople(debouncedName).then(data => {
        this.setState({
          people: data
        });
      });
    }
  }

  handleChangeTheme = (event: SyntheticInputEvent<EventTarget>) => {
    this.setState({
      theme: event.target.value
    });
  };

  handleChangeName = (event: SyntheticInputEvent<EventTarget>) => {
    this.setState({
      name: event.target.value,
      people: null
    });
  };

  render() {
    const { theme, name, people } = this.state;

    return (
      <ThemeProvider theme={themes[theme]}>
        <Fragment>
          <GlobalStyle />
          <Wrapper>
            <Header
              renderSwitch={() => (
                <SwitchTheme
                  current={theme}
                  onChange={this.handleChangeTheme}
                />
              )}
            />
            <Content>
              <Input
                placeholder="May the search be with you..."
                onChange={this.handleChangeName}
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
  }
}

export default App;
