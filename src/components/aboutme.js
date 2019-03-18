import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import avatarImg from "../images/me.png";

class Aboutme extends Component {
  render() {
    return (
      <div className="landingpageGrid">
        <Grid>
          <Cell col={4}>
            <img alt="avatar img" className="avatar-img" src={avatarImg} />
            <div className="banner-text">
              <div className="text-card">
                <h1>Full Stack Web Developer</h1>
                <hr />
                <p>
                  HTML | JavaScript | React | NodeJS | Express | MongoDB |
                  Python3 | SQL
                </p>
              </div>
              <div className="socialLinks">
                {/* linkedIn */}
                <a
                  href="https://www.linkedin.com/in/pedro-dias92/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-linkedin" />
                </a>
                {/* github */}
                <a
                  href="https://github.com/PedroDias92"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-github-square" />
                </a>
                {/* instagram */}
                {/* <a href="https://www.instagram.com/pedrodiaszargas/" rel="noopener noreferrer" target="_blank">
                                <i className="fab fa-instagram"></i>
                            </a>  */}
              </div>
            </div>
          </Cell>
          <Cell col={8} className="aboutMe">
            <h1>Me talking about myself</h1>
            <span className="question">
              Why is the ‘About Me’ page the 'Home' page ?
            </span>
            <p>
              Why not? My name is Pedro and I’m in a journey to become a Full
              Stack Web Developer.{" "}
            </p>
            <span className="question">Why not just front-end developer? </span>
            <p>
              Because I like to know how stuff are built behind the scenes and
              know how to built them as well.
            </p>
            <span className="question">Why not just back-end developer?</span>
            <p>
              Because I like visual stuff too and I want to develop beautiful,
              interactive and intuitive interfaces. Check{" "}
              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=5lJpVnpKCwA"
              >
                this
              </a>
            </p>
            <span className="question">What I did I learn so far ?</span>
            <p>
              From my previous job as a software integration engineer, I learned
              how to extract, transform and load (ETL) data from data's
              warehouses using python, powershell, xslt/xsd , mongoDB and SQL.
              In my journey, I have also developed skills in HTML/CSS,
              Javascript, React (a little bit of VueJs) and I'm also starting to
              interact with NodeJs and Express .
            </p>
            <span className="question">Besides coding, what do I like ?</span>
            <p>Basketball, a lot of that 🏀</p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Aboutme;
