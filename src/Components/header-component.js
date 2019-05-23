import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const styles = {
  root: {
    flexGrow: 1
  }
};

class HeaderComponent extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Weather App
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

HeaderComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HeaderComponent);
