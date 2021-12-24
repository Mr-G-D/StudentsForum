import "./App.css";
import React from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <Router>
        <Redirect exact path="/" to="/auth/signin" />
        <Route path="/" render={(props) => <Routes {...props} />} />
      </Router>
    </div>
  );
}

export default App;
