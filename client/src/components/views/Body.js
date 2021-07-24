import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {
  Typography,
  AppBar,
  Paper,
  Tabs,
  Tab,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Hidden,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@material-ui/core";

import Carousel from "react-material-ui-carousel";
import About from "./About";
import Service from "./Service";
import Testimonials from "./Testimonials";
import Topics from "./Topics";
import Gallery from "./Gallery";

import useStyles from "../../styles";

const Body = (props) => {
  const classes = useStyles();

  const items = [
    {
      image: "https://source.unsplash.com/random",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      image: "https://source.unsplash.com/random",
      description: "Hello World!",
    },
    {
      image: "https://source.unsplash.com/random",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      image: "https://source.unsplash.com/random",
      description: "Hello World!",
    },
  ];

  function Item(props) {
    return (
      <Paper elevation={3}>
        <CardMedia className={classes.carousel} image={props.item.image} />
      </Paper>
    );
  }

  return (
    <>
      <Container maxWidth="lg" className={classes.container}>
        <Carousel
          autoPlay={true}
          interval={4000}
          animation="slide"
          fullHeightHover={false} // We want the nav buttons wrapper to only be as big as the button element is
          navButtonsProps={{
            // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
            style: {
              backgroundColor: "cornflowerblue",
              borderRadius: 1,
            },
          }}
          indicatorIconButtonProps={{
            style: {
              padding: "10px", // 1
              color: "cornflowerblue", // 3
            },
          }}
          activeIndicatorIconButtonProps={{
            style: {
              backgroundColor: "silver", // 2
            },
          }}
          indicatorContainerProps={{
            style: {
              marginTop: "10px", // 5
              textAlign: "right", // 4
            },
          }}
        >
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
      </Container>
      <About />
      <Service />
      <Topics />
      <Testimonials />
      <Gallery />
    </>
  );
};

Body.propTypes = {};

export default Body;
