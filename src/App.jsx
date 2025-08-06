import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Page_Grid from "./components/Atoms/Page_Grid/Page_Grid.jsx";

import "./components/components_styles.css";
import "./App.css";

import AuthRoutes from "./Routes/AuthRoutes.jsx";
import ClientRoutes from "./Routes/ClientRoutes.jsx";
import GameRoutes from "./Routes/GameRoutes.jsx";
import InfoRoutes from "./Routes/InfoRoutes.jsx";
import SignUpRoutes from "./Routes/SignUpRoutes";
import TestingRoutes from "./Routes/TestingRoutes";

import ReadMe from "./Pages/Help/ReadMe.jsx";
import Games from "./Pages/Games/Games_Page.jsx";
import Help from "./Pages/Help/Help.jsx";
import About from "./Pages/About/About.jsx";
import Legal from "./Pages/Legal/Legal_Page.jsx";

import Landing_Page from "./Pages/Landing_Page/Landing_Page.jsx";
import Login_Page from "./Pages/Login_Page/Login_Page.jsx";

import Creators_SignUp from "./Pages/SignUp_Page/Creators_SignUp.jsx";
import SignUp_Page from "./Pages/SignUp_Page/SignUp_Page.jsx";
import Profile_Page from "./Pages/Clients/Profile_Page/Profile_Page.jsx";
import Creators_Page from "./Pages/Clients/Profile_Page/Creators_Page.jsx";
import Profile_SignUp from "./Pages/SignUp_Page/Profile_SignUp.jsx";

import Suggestion_Box from "./Pages/Suggestion_Box/Suggestion_Box.jsx";

import Guest_Page from "./Pages/Clients/Guest_Page/Guest_Page.jsx";
import Client_Page from "./Pages/Clients/Client_Page/Client_Page.jsx"
import Moderator_Page from "./Pages/Clients/Moderator_Page/Moderator_Page.jsx";
import Admin_Page from "./Pages/Clients/Admin_Page/Admin_Page.jsx";
import Master_Page from "./Pages/Clients/Master_Page/Master_Page.jsx";

import PGA2K from "./Pages/Games/PGA2K/PGA2K.jsx";
import Search_Page_PGA2K23 from "./Pages/Games/PGA2K/2K23/Search/Basic/Search_Page_PGA2K23.jsx";
import Results_Page_PGA2K23 from "./Pages/Games/PGA2K/2K23/Search/Search_Results/Results_Page_PGA2K23.jsx";
import PGA2K23_C_Long from "./Pages/Games/PGA2K/2K23/Adding Content/Content/Long_Form/PGA2K23_C_Long.jsx";
import PGA2K23_R_Long from "./Pages/Games/PGA2K/2K23/Adding Content/Reviews/Long_Form/PGA2K23_R_Long.jsx";
import Search_Page_PGA2K25 from "./Pages/Games/PGA2K/2K25/Search/Basic/Search_Page_2K25.jsx";
import Results_Page_PGA2K25 from "./Pages/Games/PGA2K/2K25/Search/Search_Results/Results_Page_2K25.jsx";
import Course_Review from "./Pages/Games/PGA2K/Content/Course_Review.jsx";

import Client_Front_Page from "./Pages/Clients/Client_Page/Client_Front_Page.jsx"

import Component_Testing from "./Pages/Test Page/Component_Testing.jsx";
import "./components/components_styles.css";
import { useSelector, useDispatch } from "react-redux";
const App = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.settings?.theme);
  const client = useSelector((state) => state.client?.client);
  const isLocked = useSelector((state) => state.lock?.isLocked);

  console.log("Theme:", theme);
  console.log("Client:", client);
  console.log("isLocked:", isLocked);

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
        />{" "}
        {/*components.css applied */}
        <Route
          path="/"
          element={
            <Page_Grid>
              {" "}
              <Landing_Page />{" "}
            </Page_Grid>
          }
        />{" "}
        {/*components.css  applied */}
        <Route
          path="/Login_Page"
          element={<Page_Grid><Login_Page /></Page_Grid>}
        />
        {" "}
        {/*components.css applied */}
        <Route
          path="/Games"
          element={
            <Page_Grid>
              {" "}
              <Games />{" "}
            </Page_Grid>
          }
        />{" "}
        {/*components.css  applied */}
        <Route
          path="/About"
          element={
            <Page_Grid>
              {" "}
              <About />{" "}
            </Page_Grid>
          }
        />{" "}
        {/*components.css not applied */}
        <Route>
          <Route
            path="/Profile_SignUp"
            element={
              <Page_Grid>
                <Profile_SignUp />
              </Page_Grid>
            }
          />
        </Route>
        <Route
          path="/Creators_Page"
          element={
            <Page_Grid>
              {" "}
              <Creators_Page />{" "}
            </Page_Grid>
          }
        />
        {/*components.css not fully applied looks like the form is part of the issue*/}
        <Route
          path="/Creators_SignUp"
          element={
            <Page_Grid>
              {" "}
              <Creators_SignUp />{" "}
            </Page_Grid>
          }
        />
        {/*components.css not fully applied looks like the form is part of the issue*/}
        <Route
          path="/Profile_Page"
          element={
            <Page_Grid>
              {" "}
              <Profile_Page />{" "}
            </Page_Grid>
          }
        />{" "}
        {/*components.css not fully applied looks like the form is part of the issue*/}
        <Route
          path="/SignUp_Page"
          element={
            <Page_Grid>
              {" "}
              <SignUp_Page />{" "}
            </Page_Grid>
          }
        />{" "}
        {/*components.css not applied */}
        <Route
          path="/Guest_Page"
          element={
            <Page_Grid>
              {" "}
              <Guest_Page />{" "}
            </Page_Grid>
          }
        />
        <Route
          path="/Client_Page"
          element={
            <Page_Grid>
              {" "}
              <Client_Page />{" "}
            </Page_Grid>
          }
        />
        <Route
          path="/Moderator_Page"
          element={
            <Page_Grid>
              {" "}
              <Moderator_Page />{" "}
            </Page_Grid>
          }
        />
        <Route
          path="/Admin_Page"
          element={
            <Page_Grid>
              {" "}
              <Admin_Page />{" "}
            </Page_Grid>
          }
        />
        <Route
          path="/Master_Page"
          element={
            <Page_Grid>
              {" "}
              <Master_Page />{" "}
            </Page_Grid>
          }
        />
        <Route
          path="/PGA2K"
          element={
            <Page_Grid>
              {" "}
              <PGA2K />{" "}
            </Page_Grid>
          }
        />{" "}
        {/*components.css works beautifully */}
        <Route
          path="/Search_Page_PGA2K23"
          element={
            <Page_Grid>
              {" "}
              <Search_Page_PGA2K23 />{" "}
            </Page_Grid>
          }
        />
        <Route
          path="/Results_Page_PGA2K23"
          element={
            <Page_Grid>
              {" "}
              <Results_Page_PGA2K23 />{" "}
            </Page_Grid>
          }
        />
        <Route
          path="/PGA2K23_C_Long"
          element={
            <Page_Grid>
              {" "}
              <PGA2K23_C_Long />{" "}
            </Page_Grid>
          }
        />
        <Route
          path="/PGA2K23_R_Long"
          element={
            <Page_Grid>
              {" "}
              <PGA2K23_R_Long />{" "}
            </Page_Grid>
          }
        />
        <Route
          path="/Search_Page_PGA2K25"
          element={
            <Page_Grid>
              {" "}
              <Search_Page_PGA2K25 />{" "}
            </Page_Grid>
          }
        />
        <Route
          path="/Results_Page_PGA2K25"
          element={
            <Page_Grid>
              {" "}
              <Results_Page_PGA2K25 />{" "}
            </Page_Grid>
          }
        />
        <Route
          path="/Course_Review"
          element={
            <Page_Grid>
              {" "}
              <Course_Review />{" "}
            </Page_Grid>
          }
        />
        <Route
          path="/Suggestion_Box"
          element={
            <Page_Grid>
              {" "}
              <Suggestion_Box />{" "}
            </Page_Grid>
          }
        />
        <Route
          path="/Help"
          element={
            <Page_Grid>
              {" "}
              <Help />{" "}
            </Page_Grid>
          }
        />
        <Route
          path="/Legal"
          element={
            <Page_Grid>
              {" "}
              <Legal />{" "}
            </Page_Grid>
          }
        />
        <Route
          path="/ReadMe"
          element={
            <Page_Grid>
              {" "}
              <ReadMe />{" "}
            </Page_Grid>
          }
        />
        <Route
          path="/Client_Front_Page"
          element={
            <Page_Grid>
              {" "}
              <Client_Front_Page />{" "}
            </Page_Grid>
          }
        />
      </Routes>
    </>
  );
};

export default App;
