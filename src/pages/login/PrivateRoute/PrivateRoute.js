import { LinearProgress } from "@mui/material";
import React from "react";
import { Route, Redirect } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

function PrivateRoute({ children, ...rest }) {
    const {user, isLoading} = useAuth();
    if(isLoading) {return <LinearProgress/>}
    return (
        <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;