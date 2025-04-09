//Also need to review the whole legal ease stuff BEFORE GOING LIVE
import React from "react";
import { Routes, Route } from "react-router-dom";
import Page_Grid from "../components/Util/Page_Grid/Page_Grid";

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
            
              <Suggestion_Box />
            
          }
        />
        <Route
          path="/About"
          element={
            
              <About />
            
          }
        />
        <Route
          path="/Help"
          element={
            
              <Help />
            
          }
        />
        <Route
          path="/Legal"
          element={
            
              <Legal />
            
          }
        />
        <Route
          path="/ReadMe"
          element={
            
              <ReadMe />
            
          }
        />
      </Routes>
    </>
  );
};
export default InfoRoutes;
