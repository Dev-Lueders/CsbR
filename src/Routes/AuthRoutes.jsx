//Also need to review the whole legal ease stuff BEFORE GOING LIVE

import React from "react";
import { Routes, Route } from "react-router-dom";
import Page_Grid from "../components/Atoms/Page_Grid/Page_Grid";

import Login_Page from "../Pages/Login_Page/Login_Page";
import Admin_Page from "../Pages/Clients/Admin_Page/Admin_Page";

import Client_Page from "../Pages/Clients/Guest_Page/Client_Page";
import Moderator_Page from "../Pages/Clients/Moderator_Page/Moderator_Page";
import Member_Page from "../Pages/Clients/Member_Page/Member_Page";
import Master_Page from "../Pages/Clients/Master_Page/Master_Page";
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
      <Route 
        path="/Admin_Page"
        element={
          <Page_Grid>
            <Admin_Page/>
        </Page_Grid>
      }
      />
      <Route path="/Moderator_Page"
        element={
          <Page_Grid>
            <Moderator_Page/>
        </Page_Grid>
      }
      />
      <Route path="/Member_Page"
        element={
          <Page_Grid>
            <Member_Page/>
        </Page_Grid>
      }
      />
      <Route path="/Client_Page"
        element={
          <Page_Grid>
            <Client_Page/>
        </Page_Grid>
      }
      />
      <Route path="/Master_Page"
        element={
          <Page_Grid>
            <Master_Page/>
        </Page_Grid>
      }
      />
      </Routes>
  );
};
export default AuthRoutes;
