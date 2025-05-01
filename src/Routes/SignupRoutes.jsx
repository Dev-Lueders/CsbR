//Also need to review the whole legal ease stuff BEFORE GOING LIVE
import React from "react";
import { Routes, Route } from "react-router-dom";
import Page_Grid from "../components/Util/Page_Grid/Page_Grid";

import Landing_Page from "../Pages/Landing_Page/Landing_Page";
import SignUp_Page from "../Pages/SignUp_Page/SignUp_Page";
import Creators_SignUp from "../Pages/SignUp_Page/Creators_SignUp";

const SignupRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/Creators_SignUp"
          element={
            
              <Creators_SignUp />
            
          }
        />
        <Route
          path="/SignUp_Page"
          element={
            
              <SignUp_Page />
            
          }
        />
        <Route path="/" element={Page_Grid > <Landing_Page />} />
      </Routes>
    </>
  );
};
export default SignupRoutes;
