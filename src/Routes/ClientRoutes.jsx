//Also need to review the whole legal ease stuff BEFORE GOING LIVE
import React from "react";
import { Routes, Route } from "react-router-dom";
import Page_Grid from "../components/Atoms/Page_Grid/Page_Grid";

import Creators_Page from "../Pages/Clients/Profile_Page/Creators_Page";
import Profile_Page from "../Pages/Clients/Profile_Page/Profile_Page";
import Guest_Page from "../Pages/Clients/Guest_Page/Guest_Page";
import User_Page from "../Pages/Clients/User_Page/User_Page";
import Moderator_Page from "../Pages/Clients/Moderator_Page/Moderator_Page";
import Admin_Page from "../Pages/Clients/Admin_Page/Admin_Page";
import Master_Page from "../Pages/Clients/Master_Page/Master_Page";
import Client_Front_Page from "../Pages/Clients/Client_Front_Page";

const ClientRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/Creators_Page"
          element={
            <Page_Grid>
              <Creators_Page />
            </Page_Grid>
          }
        />
        <Route
          path="/Profile_Page"
          element={
            <Page_Grid>
              <Profile_Page />
            </Page_Grid>
          }
        />
        <Route
          path="/Guest_Page"
          element={
            <Page_Grid>
              <Guest_Page />
            </Page_Grid>
          }
        />
        <Route
          path="/User_Page"
          element={
            <Page_Grid>
              <User_Page />
            </Page_Grid>
          }
        />
        <Route
          path="/Moderator_Page"
          element={
            <Page_Grid>
              <Moderator_Page />
            </Page_Grid>
          }
        />
        <Route
          path="/Admin_Page"
          element={
            <Page_Grid>
              <Admin_Page />
            </Page_Grid>
          }
        />
        <Route
          path="/Master_Page"
          element={
            <Page_Grid>
              <Master_Page />
            </Page_Grid>
          }
        />
        <Route
          path="/Client_Front_Page"
          element={
            <Page_Grid>
              <Client_Front_Page />
            </Page_Grid>
          }
        />
      </Routes>
    </>
  );
};
export default ClientRoutes;
