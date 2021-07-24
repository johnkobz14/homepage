import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  //   root: {
  //     flexGrow: 1,
  //     padding: theme.spacing(3, 0, 2),
  //   },
  root: {
    flexGrow: 1,
    padding: theme.spacing(3, 0, 2),
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  container: {
    // backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 3),
    flexGrow: 1,
  },
  containerabout: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 3),
    flexGrow: 1,
  },
  carousel: {
    width: "auto",
    height: "350px",
  },
  cardMedia: {
    flexGrow: 1,
    paddingTop: "42.85%", //21:9
  },
  cardGrid: {
    padding: "20px 5px",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardContent: {
    flexGrow: 1,
  },
  cardMediaCircle: {
    paddingTop: "42.85%", //21:9
    borderRadius: "75%",
  },
  imageList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  testiroot: {
    width: "100%",
    maxWidth: "50ch",
    backgroundColor: theme.palette.background.paper,
  },
  testiinline: {
    display: "inline",
    textAlign: "left",
    padding: "5px",
  },
  avatarlarge: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  contactbutton: {
    borderRadius: 35,
    backgroundColor: "#d50000",
    padding: "10px 20px",
  },
  footerinfo: {
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
    },
  },
  footersocial: {
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "right",
    },
  },
  footeralign: {
    padding: theme.spacing(2),
    textAlign: "center",
    // color: theme.palette.text.secondary,
  },
}));

export default useStyles;
