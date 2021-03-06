import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Brightness2 from "@material-ui/icons/Brightness2";
import Brightness7 from "@material-ui/icons/Brightness7";
import AuthModal from "../../Auth/AuthModal";
import Logout from "../../Auth/Logout";
import { selectUser } from "../../../Store/user/selectors";
import { ReactComponent as LogoIcon } from "../../../Images/logoicon.svg";
import SvgIcon from "@material-ui/core/SvgIcon";

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
    marginLeft: "2vw",
  },
}));

export default function ButtonAppBar(props) {
  const user = useSelector(selectUser);
  const classes = useStyles();

  function darkModeButton() {
    if (props.darkMode) {
      return (
        <IconButton
          onClick={(e) => props.set_darkMode(false)}
          className={classes.menuButton}
          edge="start"
          color="inherit"
          aria-label="menu"
        >
          <Brightness7 fontSize="large" />
        </IconButton>
      );
    } else {
      return (
        <IconButton
          onClick={(e) => props.set_darkMode(true)}
          className={classes.menuButton}
          edge="start"
          color="inherit"
          aria-label="menu"
        >
          <Brightness2 fontSize="large" />
        </IconButton>
      );
    }
  }

  return (
    <Paper variant="elevation" color="primary">
      <AppBar position="static">
        <Toolbar>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
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
              {darkModeButton()}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Paper>
  );
}
