import React from "react";
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

import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import StarBorderIcon from "@material-ui/icons/StarBorder";
// import itemData from "./itemData";

import useStyles from "../../styles";

const Gallery = (props) => {
  const classes = useStyles();

  const itemData = [
    {
      img: "https://source.unsplash.com/random",
      title: "Image",
      author: "author",
    },
    {
      img: "https://source.unsplash.com/random",
      title: "Image",
      author: "author",
    },
    {
      img: "https://source.unsplash.com/random",
      title: "Image",
      author: "author",
    },
    {
      img: "https://source.unsplash.com/random",
      title: "Image",
      author: "author",
    },
    {
      img: "https://source.unsplash.com/random",
      title: "Image",
      author: "author",
    },
  ];

  return (
    <>
      <Container maxWidth="lg" className={classes.containerabout}>
        <Typography
          variant="h4"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Gallery
        </Typography>
        <div className={classes.root}>
          <ImageList className={classes.imageList} cols={2.5}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img src={item.img} alt={item.title} />
                <ImageListItemBar
                  title={item.title}
                  classes={{
                    root: classes.titleBar,
                    title: classes.title,
                  }}
                  actionIcon={
                    <IconButton aria-label={`star ${item.title}`}>
                      {/* <StarBorderIcon className={classes.title} /> */}
                      <Button size="medium" color="primary">
                        More
                      </Button>
                    </IconButton>
                  }
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </Container>
    </>
  );
};

Gallery.propTypes = {};

export default Gallery;
