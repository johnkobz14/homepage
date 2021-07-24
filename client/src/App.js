import React, { Fragment } from "react";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@material-ui/core";

import Navbar from "./components/views/Navbar";
import Body from "./components/views/Body";
import Footer from "./components/views/Footer";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <main>
        <div>
          <Body />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
