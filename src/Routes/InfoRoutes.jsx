//Also need to review the whole legal ease stuff BEFORE GOING LIVE
import React from "react";
import { Routes, Route } from "react-router-dom";
import Page_Grid from "../components/Atoms/Page_Grid/Page_Grid";

import Suggestion_Box from "../Pages/Suggestion_Box/Suggestion_Box";
import About from "../Pages/About/About";
import Help from "../Pages/Help/Help";
import Legal from "../Pages/Legal/Legal_Page";
import ReadMe from "../Pages/Help/Readme";
const InfoRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/Suggestion_Box"
          element={
            <Page_Grid>
              <Suggestion_Box />
            </Page_Grid>
          }
        />
        <Route
          path="/About"
          element={
            <Page_Grid>
              <About />
            </Page_Grid>
          }
        />
        <Route
          path="/Help"
          element={
            <Page_Grid>
              <Help />
            </Page_Grid>
          }
        />
        <Route
          path="/Legal"
          element={
            <Page_Grid>
              <Legal />
            </Page_Grid>
          }
        />
        <Route
          path="/ReadMe"
          element={
            <Page_Grid>
              <ReadMe />
            </Page_Grid>
          }
        />
      </Routes>
    </>
  );
};
export default InfoRoutes;
