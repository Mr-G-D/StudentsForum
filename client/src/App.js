import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AuthLayouts from "./layouts/AuthLayouts";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/auth" render={(props) => <AuthLayouts {...props} />} />
      </Router>
    </div>
  );
}

export default App;
