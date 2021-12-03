import React, { useState } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import { ThemeProvider, createGlobalStyle } from 'styled-components';

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Posts from './pages/Posts';
import SinglePost from './components/SinglePost';
import SingleProject from './components/SingleProject';

import Navbar from './components/Navbar';

const GlobalStyle = createGlobalStyle`
body {
  background-color: ${props => props.theme.mode === 'dark' ? '#202023' : '#f0e7db'};
  color: ${props => props.theme.mode === 'dark' ? 'white' : 'black'};
}

`

function App() {

  const [theme,setTheme] = useState({mode:'dark'})

  return (
        <ThemeProvider theme={theme}>
          <>
          <GlobalStyle />
          <Router >
            <Navbar theme={theme} toggle_function={setTheme}/>
            <Route exact path="/">
              <Home theme={theme}/>
            </Route>
            <Route path="/portfolio" exact>
              < Portfolio theme={theme}/>
            </Route>
            <Route path="/posts" exact>
              < Posts theme={theme}/>
            </Route>
            <Route path="/posts/:id" exact render={ props => (
              <SinglePost theme={theme} {...props} />
            )}>
            </Route>
            <Route path="/portfolio/:id" exact render={ props => (
              <SingleProject theme={theme} {...props} />
            )}>
            </Route>
            <div className="copyright"><span>© 2021 Angelo Rosace. All Rights Reserved.</span></div>
          </Router>
          </>
        </ThemeProvider>
  );
}

export default App;
