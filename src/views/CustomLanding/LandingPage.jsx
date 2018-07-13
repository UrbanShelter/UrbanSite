import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import Header from "components/CustomHeader/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/CustomHeader/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Primary from "components/Typography/Primary.jsx";
import Muted from "components/Typography/Muted.jsx";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Paper from '@material-ui/core/Paper';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";
import typographyStyle from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.jsx";
import CustomTypeForm from "components/CustomTypeForm/CustomTypeForm.jsx";
import SwitchingButton from "components/SwitchingButton/SwitchingButton.jsx";

// Sections for this page
import ProductSection from "./Sections/ProductSection.jsx";
import TeamSection from "./Sections/TeamSection.jsx";
import WorkSection from "./Sections/WorkSection.jsx";
import { Toolbar } from "@material-ui/core";


const dashboardRoutes = [];

class CustomLandingPage extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: 0,
    }
  }

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div className={classes.mainContainer}>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="UrbanShelter"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: "125",
            color: "white"
          }}
          {...rest}
        />        

        <div style={{height: "5vh"}}>
        </div>
        <Parallax filter={false} image={require("assets/img/urban-landing.png")}>
          <div className={classes.container}>
          <h2 className={classes.title}>Rental. Experience. Simplified.</h2>
            <Muted>
              The digital brokerage that is bringing the traditional 
              rental experience to the new age!
            </Muted>
            <br />
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '2vh'}}>
            <CustomTypeForm placeholder={"Email Address"}>Get Early Access</CustomTypeForm>
            </div>
            <div style={{color:'black', margin: '16px 0px 0px 0px', fontSize: 16}}> 
              <b style={{display: 'inline'}}>First 250 Tenants get an extra </b>
              <b style={{display: 'inline', color: 'rgba(248,65,81,1)'}}>$50 Off</b>
              <b style={{display: 'inline'}}> on their Rental!</b>
            </div>
          </div>
        </Parallax>
        <div 
        style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '36vw',
        minWidth: '360px',
        maxWidth: '795px',
        height: '4vh',
        minHeight: '56px',
        padding: '12px',
        margin: "-2.5vh auto",
        zIndex: '5'
      }}>
        <SwitchingButton first={'For Tenants'} second={'For Landlords'}/>
        </div>
        <div className={classNames(classes.main, classes.mainRaised)} style={{marginTop: '-2.5vh'}}>
          <div className={classes.container}>
            <ProductSection />
            <TeamSection />
            <WorkSection />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(CustomLandingPage);
