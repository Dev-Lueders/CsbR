import React from 'react';
import { Route } from 'react-router-dom';
import Page_Grid from '../components/Atoms/Page_Grid/Page_Grid';

import Login_Page from '../Pages/Login_Page/Login_Page';

const AuthRoutes = () => {
    return (<>
    <Route path="/Login_Page" element={<Page_Grid><Login_Page/></Page_Grid>}/>
    <Route path="/" element={<Page_Grid></></Page_Grid>}/>
    </>)
}
export default AuthRoutes;