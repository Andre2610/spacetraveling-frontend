import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import MUITheme from 'Theme/MuiTheme';

import Footer from 'Components/Footer/Footer';
import Navbar from 'Components/UI/Navigation/Navbar';
import Loading from 'Components/appState/Loading';
import Message from 'Components/appState/Message';
import Booking from 'Pages/Booking/Booking';
import Homepage from 'Pages/Homepage/Homepage';
import { selectAppLoading } from 'Store/appState/selector';
import { getUserWithStoredToken } from 'Store/user/actions';

import { Container, CssBaseline, Paper } from '@material-ui/core';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);
  const [darkMode, set_darkMode] = useState(false);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch, darkMode]);
  return (
    <MUITheme>
      <Paper>
        <Container disableGutters={true} maxWidth="xxl">
          <CssBaseline />
          <Navbar darkMode={darkMode} set_darkMode={set_darkMode} />
          <Message />
          {isLoading ? <Loading open={isLoading} /> : null}
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/booking" component={Booking} />
          </Switch>
          <Footer />
        </Container>
      </Paper>
    </MUITheme>
  );
}

export default App;
