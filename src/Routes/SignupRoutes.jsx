//Also need to review the whole legal ease stuff BEFORE GOING LIVE
import React from "react";
import { Routes, Route } from "react-router-dom";
import Page_Grid from "../components/Atoms/Page_Grid/Page_Grid";

import Landing_Page from "../Pages/Landing_Page/Landing_Page";
import SignUp_Page from "../Pages/SignUp_Page/SignUp_Page";
import Creators_SignUp from "../Pages/SignUp_Page/Creators_SignUp";
import Profile_SignUp from "../Pages/SignUp_Page/Profile_SignUp";
const SignUpRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/Creators_SignUp"
          element={
            <Page_Grid>
              <Creators_SignUp />
            </Page_Grid>
          }
        />
        <Route
          path="/SignUp_Page"
          element={
            <Page_Grid>
              <SignUp_Page />
            </Page_Grid>
          }
        />
        <Route
          path="/"
          element={
            <Page_Grid>
              <Landing_Page />
            </Page_Grid>
          }
        />

        <Route
          path="/Profile_SignUp"
          element={
            <Page_Grid>
              <Profile_SignUp />
            </Page_Grid>
          }
        />
      </Routes>
    </>
  );
};
export default SignUpRoutes;
