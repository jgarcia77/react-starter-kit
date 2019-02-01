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
import PageLoading from './components/spinners/PageLoading';

const myEnv = dotenv.config();
dotenvExpand(myEnv);

const history = createHistory();

class App extends Component {
  state = {
    loading: true,
    theme: themes.default
  };

  componentDidMount() {
    this.handleTimeout();
  }

  handleTimeout = () => {
    setTimeout(() => {
      this.setState({loading: false});
    }, 3000);
  }

  handleThemeChange = (themeName) => {
    this.setState({ theme: themes[themeName] });
    this.setState({loading: true});
    this.handleTimeout();
  };

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <PageLoading loading={this.state.loading}></PageLoading>
        <Header/>
        <Main>
          <ThemeChanger
          onChangeTheme={this.handleThemeChange}
          themes={Object.keys(themes)}/>
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
