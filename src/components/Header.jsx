import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  grow: {
    flexGrow: 1,
  },
  inline: {
    display: 'inline',
  },
  noTextTransform: {
    textTransform: 'none',
  },
};

const Header = props => {
  const { classes } = props;
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" color="secondary" className={classes.grow}>
          Labtechs TV
        </Typography>
        <Button
          size="large"
          color="secondary"
          className={classes.noTextTransform}
          onClick={() => window.open('https://caycehouse.com')}
          to="https://caycehouse.com"
        >
          <Typography variant="h6" color="default" className={classes.inline}>
            Crafted by
          </Typography>
          <Typography variant="h6" color="secondary" className={classes.inline}>
            &nbsp;Cayce House
          </Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  classes: PropTypes.shape({
    grow: PropTypes.string.isRequired,
    inline: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(Header);
