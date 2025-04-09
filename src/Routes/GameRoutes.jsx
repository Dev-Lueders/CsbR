//Also need to review the whole legal ease stuff BEFORE GOING LIVE
import React from "react";
import { Routes, Route } from "react-router-dom";
import Page_Grid from "../components/Util/Page_Grid/Page_Grid"

import Games_Page from "../Pages/Games/Games_Page";
import PGA2K from "../Pages/Games/PGA2K/PGA2K";
import Search_Page_PGA2K23 from "../Pages/Games/PGA2K/2K23/Search/Basic/Search_Page_PGA2K23";
import Results_Page_PGA2K23 from "../Pages/Games/PGA2K/2K23/Search/Search_Results/Results_Page_PGA2K23";
import PGA2K23_C_Long from "../Pages/Games/PGA2K/2K23/Adding Content/Content/Long_Form/PGA2K23_C_Long";
import PGA2K23_R_Long from "../Pages/Games/PGA2K/2K23/Adding Content/Reviews/Long_Form/PGA2K23_R_Long";
import Search_Page_PGA2K25 from "../Pages/Games/PGA2K/2K25/Search/Basic/Search_Page_2K25";
import Results_Page_PGA2K25 from "../Pages/Games/PGA2K/2K25/Search/Search_Results/Results_Page_2K25";
import Course_Review from "../Pages/Games/PGA2K/Content/Course_Review";

const GameRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<Games_Page />}/>
        <Route path="/PGA2K" element={<PGA2K />}/>
        <Route path="/Search_Page_PGA2K23" element={<Search_Page_PGA2K23 />}/>
        <Route path="/Results_Page_PGA2K23" element={<Results_Page_PGA2K23 />}/>
        <Route path="/PGA2K23_C_Long" element={<PGA2K23_C_Long />}/>
        <Route path="/PGA2K23_R_Long" element={<PGA2K23_R_Long />}/>
        <Route path="/Search_Page_PGA2K25" element={<Search_Page_PGA2K25 />}/>
        <Route path="/Results_Page_PGA2K25" element={<Results_Page_PGA2K25 />}/>
        <Route path="/Course_Review" element={<Course_Review />} />
      </Routes>
    </>
  );
};
export default GameRoutes;
