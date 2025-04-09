//Also need to review the whole legal ease stuff BEFORE GOING LIVE
import React from "react";
import { Routes, Route } from "react-router-dom";
import Page_Grid from "../components/Atoms/Page_Grid/Page_Grid";

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
        <Route path="" element={<Page_Grid><Games_Page /></Page_Grid>}/>
        <Route path="/PGA2K" element={<Page_Grid><PGA2K /></Page_Grid>}/>
        <Route path="/Search_Page_PGA2K23" element={<Page_Grid><Search_Page_PGA2K23 /></Page_Grid>}/>
        <Route path="/Results_Page_PGA2K23" element={<Page_Grid><Results_Page_PGA2K23 /></Page_Grid>}/>
        <Route path="/PGA2K23_C_Long" element={<Page_Grid><PGA2K23_C_Long /></Page_Grid>}/>
        <Route path="/PGA2K23_R_Long" element={<Page_Grid><PGA2K23_R_Long /></Page_Grid>}/>
        <Route path="/Search_Page_PGA2K25" element={<Page_Grid><Search_Page_PGA2K25 /></Page_Grid>}/>
        <Route path="/Results_Page_PGA2K25" element={<Page_Grid><Results_Page_PGA2K25 /></Page_Grid>}/>
        <Route path="/Course_Review" element={<Page_Grid><Course_Review /></Page_Grid>} />
      </Routes>
    </>
  );
};
export default GameRoutes;
