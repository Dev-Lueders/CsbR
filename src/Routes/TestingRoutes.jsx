//Also need to review the whole legal ease stuff BEFORE GOING LIVE

import React from "react";
import { Routes, Route } from "react-router-dom";
import Page_Grid from "../components/Util/Page_Grid/Page_Grid";

import Component_Testing from "../Pages/Test Page/Component_Testing"
import Show_offpage from "../Pages/Test Page/Show_offpage";

const TestingRoutes = () => {
    return (
      <>
        <Routes>
          <Route
            path="/Component_Testing"
            element={
              
                <Component_Testing />
              
            }
          />
        </Routes>
      </>
    );
};
export default TestingRoutes;