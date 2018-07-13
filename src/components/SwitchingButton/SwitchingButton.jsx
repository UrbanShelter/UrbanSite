import React from "react";
import PropTypes from "prop-types";
import { withStyles , createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import Button from 'components/CustomButtons/Button.jsx';


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

function SwitchingButton(props) {
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
    focusAction,
    ...rest
  } = props;


  return (
    <div style={{
      borderRadius: "6px 6px 6px 6px",
      boxShadow: "0px 8px 24px 4px rgba(183,183,183,0.2)",
      display: 'flex',
      justifyContent: 'flex-start',
      width: '40vw',
      minWidth: '375px',
      maxWidth: '795px',
      zIndex: "10",
    }}>
      <span style={{width: '100%', height: '100%', display: 'flex', fontSize: 16}}>
        <Button
            color="urbanshelter"
            style={{
            flexGrow: 1, 
            borderRadius: "6px 0px 0px 6px", 
            padding: '16px 0px 16px 0px',
            width: '50%',
            textTransform: 'none',
            letterSpacing: 0.24,
            fontWeight: '400'
          }}
            onClick={() => console.log('Hey')}
            onBlur={() => console.log('Dont leave me!')}
        >
            {props.first||"Button"}
        </Button>
        <Button
          color="urbanshelter"
          style={{
            flexGrow: 1, 
            borderRadius: "0px 6px 6px 0px", 
            padding: '16px 0px 16px 0px',
            width: '50%',
            textTransform: 'none',
            letterSpacing: 0.24,
            fontWeight: '400',
          }}
        >
          {props.second||"Button"}
        </Button>
      </span>
    </div>
  );
}

SwitchingButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SwitchingButton);
