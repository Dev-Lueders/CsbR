//Also need to review the whole legal ease stuff BEFORE GOING LIVE
//Remove Testing before going live

import React from "react";
import { BrowserRouter as  Router, Route, Routes } from "react-router-dom";
import Page_Grid from "./components/Atoms/Page_Grid/Page_Grid.jsx";
import "./components/components_styles.css";
import "./App.css";
import Landing_Page from "./Pages/Landing_Page/Landing_Page.jsx";


import TestingRoutes from "./Routes/TestingRoutes.jsx"

import AuthRoutes from "./Routes/AuthRoutes.jsx";
import ClientRoutes from "./Routes/ClientRoutes.jsx";
import GameRoutes from "./Routes/GameRoutes.jsx";
import InfoRoutes from "./Routes/InfoRoutes.jsx";
import SignupRoutes from "./Routes/SignupRoutes.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Page_Grid><Landing_Page /></Page_Grid>}/>
        <Route path="/auth/*" element={<AuthRoutes />} />
        <Route path="/client/*" element={<ClientRoutes />} />
        <Route path="/games/*" element={<GameRoutes />} />
        <Route path="/info/*" element={<InfoRoutes />} />
        <Route path="/signup/*" element={<SignupRoutes />} />
        <Route path="/testing/*" element={<TestingRoutes/>}/>
        

      </Routes>
    </>
  );
};

export default App;
