import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import PhotoContainer from './components/PhotoContainer';
import PhotoDisplay from './components/PhotoDisplay';
import MainPage from './components/MainPage'

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);
  const user = useSelector(state=>Object.values(state.session))
  console.log(user)
  return (
    <>
      <Navigation isLoaded={isLoaded} />

      {isLoaded && (
        <Switch>
          <Route exact path="/">
            {user[0] && <PhotoContainer />}
            {!user[0] && <MainPage />}
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/photo/:id">
            <PhotoDisplay />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
