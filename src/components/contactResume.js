import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent, Button } from "react-mdl";
import Pdf from "../documents/CV_PedroDias_2019.pdf";
import Pdf_EN from "../documents/CV_PedroDias_2019_EN.pdf";
import avatarImg from "../images/me2.png";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={8}>
            <h3>Resume</h3>
            <h2>Pedro Dias</h2>
            <img
              src={avatarImg} //"https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="avatar"
              style={{ height: "100px" }}
            />

            <List>
              <ListItem fourLine>
                <ListItemContent>
                  <b>React Front to Back</b>
                  <p>
                    Learning from udemy course by Brad Traversy{" "}
                    <a
                      style={{ color: "blue" }}
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.udemy.com/react-front-to-back/"
                    >
                      React Front to Back.
                    </a>{" "}
                    {" "}
                    Skills's: React,Redux,Firebase
                  </p>
                </ListItemContent>
              </ListItem>
              <ListItem fourLine>
                <ListItemContent>
                  <b>Software Enginner - INOVRETAIL</b>
                  <p>
                    Working with python/powershell scripts to extract, transform
                    and load (ETL) data from SQL and noSQL databases into a
                    MongoDB database. Skills's:
                    python,powershell,mongoDB,SQLserver,xslt
                  </p>
                </ListItemContent>
              </ListItem>

              <ListItem fourLine>
                {/* <ListItemAction><a><Icon name="star" /></a></ListItemAction> */}
                <ListItemContent>
                  <b>Data wrangling with MongoDB and MongoDB Basics</b>
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
                    , that help me perform better in my job. Skills's:
                    MongoDB,MongoAtlas,python3
                  </p>
                </ListItemContent>
              </ListItem>
              <ListItem fourLine>
                <ListItemContent>
                  <b>Bachelor in Computer Science - University of Minho</b>
                  <p>
                    {" "}
                    In University, I developed a large variety of projects
                    involving Algorithms and Math, especially in Python, Java, C
                    and C++ . Skills: Python, C, C++, Java, ANTRL, openGL,
                    Erlang
                  </p>
                </ListItemContent>
              </ListItem>
            </List>

            {/* Colored Raised button */}
            <Button
              style={{ margin: "5px" }}
              /* download="cv_pedro_dias.pdf" */
              href={Pdf}
              target="_blank"
              raised
              colored
              rel="noopener noreferrer"
            >
              Open Full Resume (PT)
            </Button>
            <Button
              style={{ margin: "5px" }}
              href={Pdf_EN}
              target="_blank"
              raised
              colored
              rel="noopener noreferrer"
            >
              Open Full Resume (EN)
            </Button>
          </Cell>

          <Cell col={4}>
            <h3>Contacts</h3>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "15px", fontFamily: "Josefin Sans" }}
                  >
                    <i className="fa fa-phone-square" />
                    <a href="tel:(+351) 932 591 098">(+351) 932 591 098</a>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "15px", fontFamily: "Josefin Sans" }}
                  >
                    <i className="fas fa-envelope-square" />
                    <a href="mailto:pedro.dias92@hotmail.com">
                      pedro.dias92@hotmail.com
                    </a>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "15px", fontFamily: "Josefin Sans" }}
                  >
                    <i className="fab fa-linkedin" />
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/pedro-dias92/"
                      rel="noopener noreferrer"
                    >
                      linkedin.com/in/pedro-dias92/
                    </a>
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
