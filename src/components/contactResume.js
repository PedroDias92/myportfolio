import React, { Component } from "react";
import { Grid, Cell, Button } from "react-mdl";
import Pdf from "../documents/CV_PedroDias_2019.pdf";
import Pdf_EN from "../documents/CV_PedroDias_2019_EN.pdf";
import avatarImg from "../images/me2.png";

class Contact extends Component {
  sendEmail = () => {
    window.location = "mailto:pedro.dias92@hotmail.com";
  };
  call = () => {
    window.location = "tel:(+351) 932 591 098";
  };
  render() {
    return (
      <Grid style={{ width: "90%", margin: "auto" }}>
        <Cell col={8} phone={12} tablet={12} className="resume">
          <h2>Resume</h2>
          <h3>Pedro Dias</h3>
          <img
            src={avatarImg} //"https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
            alt="avatar"
            style={{ height: "100px" }}
          />
          <ul className="ulList">
            <li>
              <h5>
                <b>React Front to Back</b>
              </h5>
              <p>
                Learning from udemy course by Brad Traversy{" "}
                <a
                  style={{ color: "blue" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.udemy.com/react-front-to-back/"
                >
                  React Front to Back.
                </a>
              </p>
              <span className="gray">Skill's: React,Redux,Firebase</span>
            </li>
            <li>
              <h5>
                <b>Software Enginner - INOVRETAIL</b>
              </h5>
              <p>
                Working with python/powershell scripts to extract, transform and
                load (ETL) data from SQL and noSQL databases into a MongoDB
                database.
              </p>
              <p className="gray">
                Skill's: python,powershell,mongoDB,SQLserver,xslt
              </p>
            </li>
            <li>
              <h5>
                <b>Data wrangling with MongoDB and MongoDB Basics</b>
              </h5>
              <p>
                Courses taken in{" "}
                <a
                  style={{ color: "blue" }}
                  rel="noopener noreferrer"
                  href="https://eu.udacity.com/"
                  target="_blank"
                >
                  www.udacity.com
                </a>{" "}
                and{" "}
                <a
                  style={{ color: "blue" }}
                  rel="noopener noreferrer"
                  href="https://university.mongodb.com/"
                  target="_blank"
                >
                  university.mongo.com
                </a>{" "}
                , that help me perform better in my job.
              </p>
              <p className="gray">Skill's: MongoDB,MongoAtlas,python3</p>
            </li>
            <li>
              <h5>
                <b>Bachelor in Computer Science - University of Minho</b>
              </h5>
              <p>
                {" "}
                In University, I developed a large variety of projects involving
                Algorithms and Math, especially in Python, Java, C and C++ .
              </p>
              <p className="gray">
                Skill's: Python, C, C++, Java, ANTRL, openGL, Erlang
              </p>
            </li>
          </ul>
          {/* Colored Raised button */}
          <Button
            style={{ margin: "5px" }}
            className="resumeButton"
            /* download="cv_pedro_dias.pdf" */
            href={Pdf}
            target="_blank"
            raised
            colored
            ripple
            rel="noopener noreferrer"
          >
            Open Full Resume (PT)
          </Button>
          <Button
            style={{ margin: "5px" }}
            className="resumeButton"
            href={Pdf_EN}
            target="_blank"
            raised
            colored
            ripple
            rel="noopener noreferrer"
          >
            Open Full Resume (EN)
          </Button>
          {/* <button
            href={Pdf_EN}
            target="_blank"
            rel="noopener noreferrer"
            className="resumeButton"
          >
            Open Full Resume (EN)
          </button> */}
        </Cell>

        <Cell col={4} phone={12} tablet={8} className="contacts">
          <h2>Contacts</h2>
          <div className="card">
            <div className="social-icon marker-style" onClick={this.call}>
              <i className="fas fa-phone" />
            </div>
            <br />
            <label>(+351) 932 591 098</label>
          </div>
          <div className="card">
            <div
              className="social-icon marker-style pin"
              onClick={this.sendEmail}
            >
              <i className="fas fa-envelope-open" />
            </div>
            <br />
            <label>pedro.dias92@hotmail.com</label>
          </div>
          <div className="card">
            <div
              className="social-icon marker-style icon-bg"
              onClick={() =>
                window
                  .open("https://www.linkedin.com/in/pedro-dias92/", "_blank")
                  .focus()
              }
            >
              <i className="fab fa-linkedin" />
            </div>
            <br />
            <label>linkedin.com/in/pedro-dias92</label>
          </div>
        </Cell>
      </Grid>
    );
  }
}

export default Contact;
