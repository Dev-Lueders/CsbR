//Also need to review the whole legal ease stuff BEFORE GOING LIVE

import React from "react";
import { Routes, Route } from "react-router-dom";
import Page_Grid from "../components/Atoms/Page_Grid/Page_Grid";

import Login_Page from "../Pages/Login_Page/Login_Page";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route
        path="/Login_Page"
        element={
          <Page_Grid>
            <Login_Page />
          </Page_Grid>
        }
      />
    </Routes>
  );
};
export default AuthRoutes;
