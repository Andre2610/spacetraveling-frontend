import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Link from "@material-ui/core/Link";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import Image from "../../../Images/cme.gif";

const useStyles = makeStyles({
  title: {
    fontWeight: "bold",
    marginLeft: "1vw",
    marginBottom: "-0.5vh",
  },
  media: {
    width: "100%",
  },
  text: {
    padding: "1vw",
  },
  btn: {
    marginLeft: "1vw",
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
            <Typography
              className={classes.title}
              gutterBottom
              variant="h5"
              component="h2"
            >
              Weather
            </Typography>
            <Typography
              className={classes.text}
              variant="body2"
              color="textPrimary"
              component="p"
            >
              {note}
            </Typography>
            <Divider />
            <List>
              <ListItem>Start Time: {startTime}</ListItem>
              <Divider />
              <ListItem>Source Location: {sourceLocation}</ListItem>
            </List>
            <Button
              className={classes.btn}
              component={Link}
              href={link}
              variant="contained"
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
