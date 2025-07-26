//Also need to review the whole legal ease stuff BEFORE GOING LIVE

import React from "react";
import { Routes, Route } from "react-router-dom";
import Page_Grid from "../components/Atoms/Page_Grid/Page_Grid";

import Component_Testing from "../Pages/Test Page/Component_Testing"
import Course_Review from "../Pages/Games/PGA2K/Content/Course_Review";
const TestingRoutes = () => {
    return (
      <>
        <Routes>
          <Route
            path="/Component_Testing"
            element={
              <Page_Grid>
                <Component_Testing />
              </Page_Grid>
            }
          />
        </Routes>

        <Routes>
          <Route
            path="Course_Review"
            element={
              <Page_Grid>
                <Course_Review />
              </Page_Grid>
            } />
          
        </Routes>
      </>
    );
};
export default TestingRoutes;