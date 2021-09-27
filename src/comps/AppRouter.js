import React from "react";
import { BrowserRouter as Router, Switch, Route, Link,Redirect } from "react-router-dom";
import { Navbar } from ".";
import { useAuth } from "../context/AuthContext";
import Login from "./Login/Login";

function AppRouter() {
  const {currentUser} = useAuth();
  return (
    <Router>
      <Switch>
        {currentUser? <Navbar />: <Login/>}
        {/* <Route path="/" exact>
          <Login />
        </Route>
        <ProtectedRoute path="/home">
          <Navbar />
        </ProtectedRoute> */}
      </Switch>
    </Router>
  );
}
/* function ProtectedRoute(props){
    const {currentUser} = useAuth();
    
    return currentUser ? (
        <Route {...props} />
      ) : (
        <Redirect
          to={"/"}
        />
      )

    
    
} */

export default AppRouter;
