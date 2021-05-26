import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import PhotoContainer from './components/PhotoContainer';
import PhotoDisplay from './components/PhotoDisplay';
import MainPage from './components/MainPage';
import Comments from './components/Comments';
import AddPhoto from './components/AddPhoto';
import SearchResult from './components/SearchResult';
import CreateAlbum from './components/CreateAlbum';
import ViewAlbums from './components/ViewAlbums';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);
  const user = useSelector(state=>Object.values(state.session))
  
  return (
    <>
      <Navigation isLoaded={isLoaded} />

      {isLoaded && (
        <Switch>
          <Route exact path="/">
            {user[0] && <PhotoContainer />}
            {!user[0] && <MainPage />}
          </Route>
          <Route  path="/searchResult">
            <SearchResult />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/photo/:id">
            <PhotoDisplay />
            <Comments />
          </Route>
          <Route  path="/add">
            <AddPhoto />
          </Route>
          <Route path='/createAlbum'>
            <CreateAlbum/>
          </Route>
          <Route path='/viewAlbums'>
            <ViewAlbums />
          </Route>
          <Route>
            <h1>404 huh?!</h1>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
