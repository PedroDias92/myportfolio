import React, { Component } from "react";

import "./App.css";
import "./css/common.css";
import "./css/style.css";
import { Drawer, Layout, Header, Navigation, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
  hideToggle() {
    var selectorId = document.querySelector(".mdl-layout");
    selectorId.MaterialLayout.toggleDrawer();
  }
  render() {
    return (
      <div className="App">
        <div className="demo-big-content">
          <Layout>
            <Header className="header-color sticky" title="Pedro Dias" scroll>
              <Navigation>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contactResume">Contact/Resume</Link>
              </Navigation>
            </Header>
            <Drawer title="Portfolio">
              <Navigation>
                <Link to="/aboutme" onClick={() => this.hideToggle()}>
                  About Me
                </Link>
                <Link to="/projects" onClick={() => this.hideToggle()}>
                  Projects
                </Link>
                <Link to="/contactResume" onClick={() => this.hideToggle()}>
                  Contact/Resume
                </Link>
              </Navigation>
            </Drawer>
            <Content>
              <div className="page-content" />
              <Main />
            </Content>
          </Layout>
        </div>
      </div>
    );
  }
}

export default App;
