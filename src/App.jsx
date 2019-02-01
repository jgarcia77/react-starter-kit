import React, { Component } from 'react';
import {Router} from "react-router-dom";
import Routes from "./Routes";
import createHistory from 'history/createBrowserHistory';
import dotenv from 'dotenv';
import dotenvExpand  from 'dotenv-expand';
import { ThemeProvider } from "@callstack/react-theme-provider";
import { themes } from "./themes";
import Header from './components/layout/Header';
import ThemeChanger from './components/layout/ThemeChanger';
import Main from './components/layout/Main';
import Footer from './components/layout/Footer';

const myEnv = dotenv.config();
dotenvExpand(myEnv);

const history = createHistory();

class App extends Component {
  state = {
    theme: themes.default
  };

  handleThemeChange = (themeName) => {
    this.setState({ theme: themes[themeName] });
  };

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <Header/>
        <ThemeChanger
          onChangeTheme={this.handleThemeChange}
          themes={Object.keys(themes)}/>
        <Main>
          <Router history={history}>
            <Routes />
          </Router>
        </Main>
        <Footer/>
      </ThemeProvider>
    );
  }
}

export default App;
