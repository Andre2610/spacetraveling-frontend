import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import AuthModal from 'Components/Auth/AuthModal';
import Logout from 'Components/Auth/Logout';
import { ReactComponent as LogoIcon } from 'Images/logoicon.svg';
import { toggleDarkMode } from 'Store/appState/actions';
import { selectIsDarkModeOn } from 'Store/appState/selector';
import { selectUser } from 'Store/user/selectors';

import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import SvgIcon from '@material-ui/core/SvgIcon';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Brightness2 from '@material-ui/icons/Brightness2';
import Brightness7 from '@material-ui/icons/Brightness7';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: theme.spacing(3),
  },
  title: {
    flexGrow: 1,
  },
  darkButton: {
    marginLeft: '2vw',
  },
}));

export default function ButtonAppBar(props) {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const darkMode = useSelector(selectIsDarkModeOn);
  const classes = useStyles();

  return (
    <Paper variant="elevation" color="primary">
      <AppBar position="static">
        <Toolbar>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
            minHeight={65}
            marginX={4}
          >
            <Box>
              <IconButton
                component={Link}
                to="/"
                className={classes.menuButton}
                edge="start"
                color="inherit"
                aria-label="menu"
              >
                <SvgIcon component={LogoIcon} viewBox="0 0 96 96" />
              </IconButton>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="flex-end">
              {user.token ? <Logout user={user} /> : <AuthModal />}
              <IconButton
                onClick={(e) => dispatch(toggleDarkMode())}
                className={classes.menuButton}
                edge="start"
                color="inherit"
                aria-label="menu"
              >
                {darkMode ? <Brightness7 fontSize="large" /> : <Brightness2 fontSize="large" />}
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Paper>
  );
}
