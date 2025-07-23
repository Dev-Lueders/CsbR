//Also need to review the whole legal ease stuff BEFORE GOING LIVE

import React from "react";
import { Routes, Route } from "react-router-dom";
import Page_Grid from "../components/Util/Page_Grid/Page_Grid";

import Login_Page from "../Pages/Login_Page/Login_Page";
import Admin_Page from "../Pages/Clients/Admin_Page/Admin_Page";
import Creator_Profile_Page from "../Pages/Clients/Creator_Profile_Page/Creator_Profile_Page";
import Guest_Page from "../Pages/Clients/Guest_Page/Guest_Page";
import Moderator_Page from "../Pages/Clients/Moderator_Page/Moderator_Page";
import Member_Page from "../Pages/Clients/Member_Page/Member_Page";
const AuthRoutes = () => {
  return (
    <Routes>
      <Route
        path="/Login_Page"
        element={
          <Page_Grid>
            <Login_Page />
            <Admin_Page />
            <Creator_Profile_Page />
            <Guest_Page />
            <Moderator_Page />
            <Member_Page />
          </Page_Grid>
        }
      />
    </Routes>
  );
};
export default AuthRoutes;
