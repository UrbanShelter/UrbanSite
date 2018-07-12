import React from "react";
import PropTypes from "prop-types";
import { withStyles , createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import red from '@material-ui/core/colors/red';


const styles = theme => ({

});

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ff787d',
      main: '#f84151',
      dark: '#be0029',
      contrastText: 'white',
    },
  },
});

function CustomTypeForm(props) {
  const {
    classes,
    color,
    round,
    children,
    fullWidth,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    className,
    ...rest
  } = props;
  

  return (
    <div style={{
      borderRadius: "6px 6px 6px 6px",
      boxShadow: "0px 8px 24px 4px rgba(183,183,183,0.1)",
      display: 'flex',
      justifyContent: 'flex-start',
      width: '40vw',
      minWidth: '375px',
      maxWidth: '795px',
      zIndex: "10",
    }}>
      <span style={{width: '100%', height: '100%', display: 'flex', fontSize: 16}}>
        <input placeholder={props.placeholder||"Placeholder"} style={{ flexGrow: 10, borderRadius: "6px 0px 0px 6px", justifyContent: 'flex-start', alignContent: 'center', padding: '18px 36px 18px 36px', border:'0px', fontSize: 16, letterSpacing: 0.24}}/>
        <MuiThemeProvider theme={theme}>
        <Button
          color="primary"
          variant="contained"
          style={{
            flexGrow: 1, 
            borderRadius: "0px 6px 6px 0px", 
            textTransform: 'none',
            letterSpacing: 0.24,
            fontWeight: '400'}}
        >
          {children||"Button"}
        </Button>
        </MuiThemeProvider>
      </span>
    </div>
  );
}

CustomTypeForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomTypeForm);
