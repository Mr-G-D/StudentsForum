import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AuthRoutes from "./Routes/AuthRoutes";
import AdminRoutes from "./Routes/AdminRoutes";
import SignIn from "./pages/auth/SignIn";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/auth" render={(props) => <AuthRoutes {...props} />} />
        <Route path="/" render={(props) => <AdminRoutes {...props} />} />
        <Route exact path="/" component={SignIn} />
      </Router>
    </div>
  );
}

export default App;
