import React, { Component } from 'react';

import './App.css';
import {Drawer,Layout,Header,Navigation,Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="demo-big-content">
          <Layout>
              <Header className="header-color" title="Portfolio" scroll>
                  <Navigation>
                      <Link to="/aboutme">About Me</Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="/contactResume">Contact/Resume</Link>
                  </Navigation>
              </Header>
              <Drawer title="Portfolio">
                  <Navigation>
                      <Link to="/aboutme">About Me</Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="/contactResume">Contact/Resume</Link>
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content" />
                  <Main></Main>
              </Content>
          </Layout>
      </div>
      
      
      </div>
    );
  }
}

export default App;
