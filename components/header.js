import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import IconButton from '@material-ui/core/IconButton';
import AppBar from './AppBar';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../styles/theme';

const useStyles = makeStyles(() => ({
  homeButton: {
    marginLeft: theme.spacing(3),
    marginLeft: '30px',
  },
  toolbar: {
    flexGrow: 2,
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(5),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <AppBar position='fixed'>
        <Toolbar>
          <Link
            variant='h6'
            underline='none'
            color='inherit'
            href='/'
            className={classes.toolbar}
          >
            <IconButton
              edge='start'
              className={classes.homeButton}
              color='secondary'
            >
              <HomeWorkIcon />
            </IconButton>
          </Link>
          <Link
            color='inherit'
            variant='h6'
            underline='hover'
            className={classes.rightLink}
            href='/login'
          >
            ログイン
          </Link>
          <Link
            variant='h6'
            underline='hover'
            className={clsx(classes.rightLink, classes.linkSecondary)}
            href='/signup'
          >
            登録
          </Link>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

Header.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object.isRequired,
};

export default Header;
