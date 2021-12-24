import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import index from "./pages/index";
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" render={index} />
        <Route path="/" render={(props) => <Routes {...props} />} />
      </Router>
    </div>
  );
}

export default App;
