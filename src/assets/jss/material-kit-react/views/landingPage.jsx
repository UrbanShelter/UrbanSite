import { container, title } from "assets/jss/material-kit-react.jsx";
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme();

const landingPageStyle = {
  mainContainer: {
    backgroundColor: "white"
  },
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container,
    textAlign: "center",
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#000000",
    textDecoration: "none"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    // margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow: "0 9px 20px 0 rgba(183,183,183,0.5)"
  },
  logo :{
    height: "1.5vh",
    maxHeight: "1.5vh",
    backgroundPosition: "center center",
  },
  bootstrapRoot: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  bootstrapInput: {
    zIndex: "10",
    backgroundColor: theme.palette.common.white,
    borderRadius: "6px",
    fontSize: 16,
    padding: '10px 12px',
    height: "2vw",
    minHeight: "20px",
    maxHeight: "68px",
    width: "40vw",
    minWidth: "300px",
    maxWidth: "795px",
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: [
      'Lato',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: '0 0 0 0.1rem rgba(248,65,81,0.25)',
    },
  },
  bootstrapButton: {
    zIndex: "12",
    borderRadius: "6px",
    fontSize: 16,
    height: "3vw",
    minHeight: "20px",
    maxHeight: "68px",
    fontFamily: [
      'Lato',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(',')
  },
  bootstrapFormLabel: {
    fontSize: 18,
  },
};

export default landingPageStyle;
