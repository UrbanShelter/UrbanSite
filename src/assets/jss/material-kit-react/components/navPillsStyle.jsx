import {
  roseColor,
  primaryColor,
  infoColor,
  successColor,
  warningColor,
  dangerColor
} from "assets/jss/material-kit-react.jsx";

const navPillsStyle = theme => ({
  root: {
    marginTop: "0px",
    paddingLeft: "0",
    marginBottom: "0",
    overflow: "visible !important",
  },
  flexContainer: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexGrow: 1,
    }
  },
  displayNone: {
    display: "none !important"
  },
  fixed: {
    overflowX: "visible"
  },
  horizontalDisplay: {
    display: "block"
  },
  pills: {
    float: "left",
    position: "relative",
    display: "block",
    borderRadius: "30px",
    textAlign: "center",
    transition: "all .3s",
    padding: "10px 15px",
    color: "#555555",
    height: "auto",
    opacity: "1",
    maxWidth: "100%",
    margin: "0 5px",
    textTransform: 'none',
    letterSpacing: 0.24,
  },
  pillsOne: {
    position: "relative",
    display: "flex",
    flexGrow: 1,
    borderRadius: '6px 0px 0px 6px',  
    backgroundColor: 'rgba(248,65,81,1)',    
    color: 'rgba(255,255,255,0.5)',
    textAlign: "center",
    transition: "all .3s",
    padding: "10px 15px",
    height: "auto",
    opacity: "1",
    width: '20vw',
    minWidth: '200px',
    maxWidth: '450px',
    margin: "0 2px",
    "&:hover": {
      color: "#FFFFFF",
      backgroundColor: 'rgba(248,65,81,1)',
      boxShadow:
        "0 14px 26px -12px rgba(51, 51, 51, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(51, 51, 51, 0.2)"
    },
  },
  pillsTwo: {
    position: "relative",
    display: "flex",
    flexGrow: 1,
    borderRadius: '0px 6px 6px 0px', 
    backgroundColor: 'rgba(248,65,81,1)', 
    color: "rgba(255,255,255,0.5)",
    textAlign: "center",
    transition: "all .3s",
    padding: "10px 15px",
    height: "auto",
    opacity: "1",
    width: '20vw',
    minWidth: '200px',
    maxWidth: '450px',
    margin: "0 0px",
    "&:hover": {
      color: "#FFFFFF",
      backgroundColor: 'rgba(248,65,81,1)',
      boxShadow:
        "0 14px 26px -12px rgba(51, 51, 51, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(51, 51, 51, 0.2)"
    },
  },
  pillsWithIcons: {
    borderRadius: "4px",
    margin: "0px"
  },
  tabIcon: {
    width: "30px",
    height: "30px",
    display: "block",
    margin: "15px 0"
  },
  tabContent: {
    color: 'black',
  },
  horizontalPills: {
    width: "100%",
    float: "none !important",
    "& + button": {
      margin: "10px 0"
    }
  },
  labelContainer: {
    padding: "0!important",
    color: "inherit"
  },
  label: {
    lineHeight: "24px",
    textTransform: "none",
    letterSpacing: 0.24,
    fontSize: 14,
    fontWeight: "400",
    position: "relative",
    display: "block",
    color: "inherit"
  },
  contentWrapper: {
    marginTop: "20px", 
  },
  primary: {
    "&,&:hover": {
      color: "#FFFFFF",
      backgroundColor: primaryColor,
      boxShadow:
        "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(156, 39, 176, 0.4)"
    }
  },
  info: {
    "&,&:hover": {
      color: "#FFFFFF",
      backgroundColor: infoColor,
      boxShadow:
        "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(76, 175, 80, 0.4)"
    }
  },
  success: {
    "&,&:hover": {
      color: "#FFFFFF",
      backgroundColor: successColor,
      boxShadow:
        "0 2px 2px 0 rgba(76, 175, 80, 0.14), 0 3px 1px -2px rgba(76, 175, 80, 0.2), 0 1px 5px 0 rgba(76, 175, 80, 0.12)"
    }
  },
  warning: {
    "&,&:hover": {
      color: "#FFFFFF",
      backgroundColor: warningColor,
      boxShadow:
        "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(255, 152, 0, 0.4)"
    }
  },
  danger: {
    "&,&:hover": {
      color: "#FFFFFF",
      backgroundColor: dangerColor,
      boxShadow:
        "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(255, 152, 0, 0.4)"
    }
  },
  rose: {
    "&,&:hover": {
      color: "#FFFFFF",
      backgroundColor: roseColor,
      boxShadow:
        "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)"
    }
  },
  alignCenter: {
    alignItems: "center",
    justifyContent: "center"
  },
  urban: {
    "&,&:hover": {
      color: "#FFFFFF",
      backgroundColor: 'rgba(248,65,81,1)',
      boxShadow:
        "0 14px 26px -12px rgba(51, 51, 51, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(51, 51, 51, 0.2)"
    }
  }
});

export default navPillsStyle;
