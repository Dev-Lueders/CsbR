import React from 'react';
import { Route } from 'react-router-dom';
import Page_Grid from '../components/Atoms/Page_Grid/Page_Grid';

import Landing_Page from '../Pages/Landing_Page/Landing_Page';
import Help from '../Pages/Help/Help'
import About from '../Pages/About/About';
const MiscRoutes = () => {
    return (
        <>
    <Route path="/" element={<Page_Grid><Landing_Page/></Page_Grid>}/>
  
            
        </>)
}
export default MiscRoutes;