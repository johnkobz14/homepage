import React from "react";
import PropTypes from "prop-types";

import {
  Typography,
  AppBar,
  Paper,
  Tabs,
  Tab,
  Button,
  ButtonGroup,
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

import {
  createTheme,
  withStyles,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { red, blue } from "@material-ui/core/colors";
import PhoneIcon from "@material-ui/icons/Phone";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

import useStyles from "../../styles";

const Footer = (props) => {
  const classes = useStyles();

  const contacttheme = createTheme({
    palette: {
      prmary: "red",
    },
  });

  return (
    <>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={6}>
            {/* <Grid item md={12} className={classes.footeralign}>
            <ThemeProvider theme={contacttheme}>
              <Button
                className={classes.contactbutton}
                variant="contained"
                startIcon={<PhoneIcon />}
              >
                Contact Us
              </Button>
            </ThemeProvider>
          </Grid> */}
            <Grid item md={12} className={classes.footerinfo}>
              <Grid
                container
                spacing={4}
                direction="column"
                // alignItems="center"
                // justify="center"
                // style={{ minHeight: "100vh" }}
              >
                <Grid item>
                  <ButtonGroup
                    size="large"
                    aria-label="large outlined primary button group"
                    variant="text"
                  >
                    <Button>Privacy Policy</Button>
                    <Button>Legal</Button>
                    <Button>Our Location</Button>
                  </ButtonGroup>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            {/* <Grid item md={12} className={classes.footeralign}>
            <ThemeProvider theme={contacttheme}>
              <Button
                className={classes.contactbutton}
                variant="contained"
                startIcon={<PhoneIcon />}
              >
                Contact Us
              </Button>
            </ThemeProvider>
          </Grid> */}
            <Grid item md={12} className={classes.footersocial}>
              <Grid item>
                <ButtonGroup
                  size="large"
                  aria-label="large outlined primary button group"
                  variant="text"
                >
                  <Button>
                    <TwitterIcon
                      fontSize="large"
                      style={{ color: blue[400] }}
                    />
                  </Button>
                  <Button>
                    <FacebookIcon
                      fontSize="large"
                      style={{ color: blue[700] }}
                    />
                  </Button>
                  <Button>
                    <InstagramIcon
                      fontSize="large"
                      style={{ color: blue[700] }}
                    />
                  </Button>
                </ButtonGroup>
              </Grid>
              <Grid item md={12}>
                <Typography gutterBottom variant="overline">
                  〒 123-4567 東京都丸野お手町
                </Typography>
              </Grid>
              <Grid item md={12}>
                <Typography gutterBottom variant="overline">
                  EMail: business@email.com
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={12} className={classes.footeralign}>
          <Grid item md={12} className={classes.footeralign}>
            <Typography gutterBottom variant="overline">
              © 2021 ClientName
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

Footer.propTypes = {};

export default Footer;
