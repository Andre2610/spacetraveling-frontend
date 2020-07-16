import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import Image from "../../../Images/cme.gif";
import "./Weather.css";

const useStyles = makeStyles({
  media: {
    width: "100%",
  },
});

export default function Weather(props) {
  const { startTime, note, sourceLocation, link } = props.objectToShow;
  const classes = useStyles();

  return (
    <div className="WeatherContainer">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            className={classes.media}
            image={Image}
            title="Weather in space"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Weather
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {note}
            </Typography>
            <Divider />
            <List>
              <ListItem>Start Time: {startTime}</ListItem>
              <Divider />
              <ListItem>Source Location: {sourceLocation}</ListItem>
            </List>
            <Button
              variant="contained"
              component={Link}
              to={link}
              size="small"
              color="primary"
            >
              More info
            </Button>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
