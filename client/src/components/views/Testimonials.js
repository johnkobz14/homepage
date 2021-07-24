import React, { Fragment } from "react";
import PropTypes from "prop-types";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

import {
  Typography,
  Button,
  Link,
  IconButton,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Paper,
} from "@material-ui/core";

import useStyles from "../../styles";

const Testimonials = (props) => {
  const classes = useStyles();

  const itemData = [
    {
      name: "Utada Hikaru",
      image: "https://source.unsplash.com/random",
      description: "Very good working experience!",
    },
    {
      name: "Justin Bieber",
      image: "https://source.unsplash.com/random",
      description: "Friendly and supportive staff.",
    },
    {
      name: "Bill Gates",
      image: "https://source.unsplash.com/random",
      description: "Good clients, good working environment.",
    },
  ];

  function Item(props) {
    return (
      <Paper elevation={2}>
        {itemData.map((item) => (
          <List key={item.name} className={classes.testiroot}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt={item.name}
                  src={item.image}
                  className={classes.avatarlarge}
                />
              </ListItemAvatar>
              <ListItemText
                className={classes.testiinline}
                primary={item.name}
                secondary={
                  <Fragment>
                    <Link
                      className={classes.testiinline}
                      component="button"
                      variant="string"
                      onClick={() => {
                        console.info("I'm a button.");
                      }}
                    >
                      {item.description}
                    </Link>
                  </Fragment>
                }
              />
            </ListItem>
          </List>
        ))}
      </Paper>
    );
  }

  return (
    <>
      <Container maxWidth="lg" className={classes.containerabout}>
        <Typography
          variant="h4"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Testimonials
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={6}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://source.unsplash.com/random"
                title="Image Title"
              />
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Item />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

Testimonials.propTypes = {};

export default Testimonials;
