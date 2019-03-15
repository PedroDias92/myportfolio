import React from "react";
import { Card, CardTitle, CardActions, CardText, Button } from "react-mdl";

const Project = props => {
  console.log(props);
  return (
    <div className="column">
      <Card
        shadow={0}
        style={{ width: "100%", height: "100%", margin: "auto" }}
      >
        <CardTitle
          style={{
            color: "black",
            height: "176px",
            background: "url(" + props.url + ") center / cover"
          }}
        >
          {props.cardTitle}
        </CardTitle>
        <CardText>{props.cardText}</CardText>
        <CardActions border>
          <Button href={props.github} target="_blank" colored>
            GitHub
          </Button>
          <Button href={props.demo} target="_blank" colored>
            Demo
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Project;
