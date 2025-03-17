import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";


import './components/components_styles.css';
import './App.css';
import Radio_btn from './components/Buttons/Radio.jsx'
import Button_btn from './components/Buttons/Button.jsx';
import Text_Box from './components/Input_Container/Text_Box.jsx';
import Scroll_Bar from './components/Scroll_Bar/Scroll_Bar.jsx';
import Check_Box from './components/Check_Box/Check_Box.jsx';
import WorldMap from './components/World_Map/World_Map.jsx';
import Drop_Down from './components/Drop_Down/Drop_Down.jsx';
// import Up_Loading from './components/Up_Load/Up_Loading.jsx';


import ReadMe from './Pages/Help/Readme.jsx'
import Games from './Pages/Games/Games_Page';
import Help from './Pages/Help/Help.jsx';
import About from './Pages/About/About.jsx';
import Legal from './Pages/Legal/Legal_Page.jsx'
import SignUp_Page from './Pages/SignUp_Page/SignUp_Page.jsx';
import Login_Page from './Pages/Login_Page/Login_Page.jsx';
import Creators_SignUp from './Pages/SignUp_Page/Creators_SignUp.jsx'
import Landing_Page from './Pages/Landing_Page/Landing_Page.jsx';
import Profile_Page from './Pages/Clients/Profile_Page/Profile_Page.jsx';
import Creators_Page from './Pages/Clients/Profile_Page/Creators_Page.jsx';
import Profile_SignUp from './Pages/SignUp_Page/Profile_SignUp.jsx';
import Suggestion_Box from './Pages/Suggestion_Box/Suggestion_Box.jsx';

import PGA2K from './Pages/Games/PGA2K/PGA2K.jsx';
import Search_Page_PGA2K23 from './Pages/Games/PGA2K/2K23/Search/Basic/Search_Page_PGA2K23.jsx';
import Results_Page_PGA2K23 from './Pages/Games/PGA2K/2K23/Search/Search_Results/Results_Page_PGA2K23.jsx'
import PGA2K23_C_Long from './Pages/Games/PGA2K/2K23/Adding Content/Content/Long_Form/PGA2K23_C_Long.jsx';
import PGA2K23_R_Long from './Pages/Games/PGA2K/2K23/Adding Content/Reviews/Long_Form/PGA2K23_R_Long.jsx';

import Search_Page_PGA2K25 from './Pages/Games/PGA2K/2K25/Search/Basic/Search_Page_2K25.jsx';
import Results_Page_PGA2K25 from './Pages/Games/PGA2K/2K25/Search/Search_Results/Results_Page_2K25.jsx';


const App = () => {
 return (
    <>
      <Routes>
        
        <Route path="/Games" element={<Games/>}/>
        <Route path="/Login" element={<Login_Page/>}/>
        <Route path="/" element={<Landing_Page />} />
        <Route path="/About" element={<About/>}/>
              {/* <Profile_SignUp/> */}
        
        <Route path="/Profile_Page" element={<Profile_Page />} />
                <Route path="/SignUp_Page" element={<SignUp_Page />} />
              {/* <Creators_SignUp/> */}
              {/* <Creators_Page/> */}

        <Route path="/PGA2K" element={<PGA2K/>}/>
        <Route path="/Search_Page_PGA2K23" element={<Search_Page_PGA2K23 />} />
        <Route path="/Results_Page_PGA2K23" element={<Results_Page_PGA2K23/>}/> 

        <Route path="/PGA2K23_C_Long" element={<PGA2K23_C_Long/>}/>
        <Route path="/PGA2K23_R_Long" element={<PGA2K23_R_Long/>}/>
        
        <Route path="/Search_Page_PGA2K25" element={<Search_Page_PGA2K25 />} />
        <Route path="/Results_Page_PGA2K25" element={<Results_Page_PGA2K25/>}/> 

        <Route path="/Suggestion_Box" element={<Suggestion_Box/>}/>
        <Route path="Help" element={<Help/>}/>
        <Route path="/Legal" element = {<Legal/>}/>
        <Route path="/ReadMe" element = {<ReadMe/>}/>
      </Routes>

    </>
  )
};

export default App;

