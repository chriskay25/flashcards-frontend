import React, { useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Deck from "./components/Deck";
import Decks from "./components/Decks";
import LandingPage from "./components/LandingPage";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import Modal from "./components/Modal";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentUser } from "./actions/userActions";

const App = () => {
  const currentUser = useSelector((state) => state.userReducer.currentUser);
  const hintModal = useSelector((state) => state.quizReducer.showHintModal);
  const hintContent = useSelector((state) => state.quizReducer.hintContent);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <div className="App">
      <React.StrictMode>
        {hintModal && <Modal content={hintContent} />}
        <NavBar />
        <Switch location={location} key={location.pathname}>
          <Route exact path="/decks/:id">
            {currentUser ? <Deck /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/decks">
            {currentUser ? <Decks /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/login">
            {currentUser ? <Redirect to="/decks" /> : <LoginForm />}
          </Route>
          <Route exact path="/signup">
            {currentUser ? <Redirect to="/decks" /> : <SignupForm />}
          </Route>
          <Route exact path="/">
            {currentUser ? <Redirect to="/decks" /> : <LandingPage />}
          </Route>
        </Switch>
      </React.StrictMode>
    </div>
  );
};

export default App;
