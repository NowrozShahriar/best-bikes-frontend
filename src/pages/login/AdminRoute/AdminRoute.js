import { LinearProgress } from "@mui/material";
import React from "react";
import { Route, Redirect } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

function AdminRoute({ children, ...rest }) {
    const {user, admin, isLoading} = useAuth();
    if(isLoading) {return <LinearProgress/>}
    return (
        <Route
      {...rest}
      render={({ location }) =>
        user.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/dashboard",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default AdminRoute;