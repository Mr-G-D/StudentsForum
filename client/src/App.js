import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AuthRoutes from "./Routes/AuthRoutes";
import AdminRoutes from "./Routes/AdminRoutes";
import SignIn from "./pages/auth/SignIn";
import jwt from "jsonwebtoken";
import { useHistory } from "react-router-dom";

function App() {
  const history = useHistory();
  console.log("h");

  const [Authenticated, setAuthenticated] = useState(false);

  // const token = localStorage.getItem("token");
  // if (token) {
  //   const user = jwt.decode(token);
  //   if (!user) {
  //     localStorage.removeItem("token");
  //     history.goBack("/");
  //   } else {
  //     setAuthenticated(true);
  //   }
  // } else {
  //   history.push("/");
  // }

  return (
    <div className="App">
      <Router>
        <Route path="/auth" render={(props) => <AuthRoutes {...props} />} />

        {<Route path="/" render={(props) => <AdminRoutes {...props} />} />}
        <Route exact path="/" component={SignIn} />
      </Router>
    </div>
  );
}

export default App;
