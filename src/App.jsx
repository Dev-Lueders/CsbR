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
import Search_Page_PGA2K23 from './Games/PGA2K/2K23/Search/Basic/Search_Page_PGA2K23.jsx';
import Creators_SignUp from './Pages/SignUp_Page/Creators_SignUp.jsx'
import Landing_Page from './Pages/Landing_Page/Landing_Page.jsx';
import Profile_Page from './Pages/Clients/Profile_Page/Profile_Page.jsx';
import Results_Page_PGA2K23 from './Games/PGA2K/2K23/Search/Search_Results/Results_Page_PGA2K23.jsx'
import Creators_Page from './Pages/Clients/Profile_Page/Creators_Page.jsx';
import Profile_SignUp from './Pages/SignUp_Page/Profile_SignUp.jsx';
import PGA2K23_C_Long from './Games/PGA2K/2K23/Adding Content/Content/Long_Form/PGA2K23_C_Long.jsx';


const App = () => {

  return (
    <>
      <Routes>
             {/* <Login_Page/> */}
        <Route path="/" element={<Landing_Page />} />
        <Route path="/About" element={<About/>}/>
              {/* <Profile_SignUp/> */}
        <Route path="/Profile_Page" element={<Profile_Page />} />
        <Route path="/SignUp_Page" element={<SignUp_Page />} />
              {/* <Creators_SignUp/> */}
              {/* <Creators_Page/> */}

        <Route path="/Search_Page_PGA2K23" element={<Search_Page_PGA2K23 />} />
              {/* <Results_Page_PGA2K23/> */}
        <Route path="Help" element={<Help/>}/>
        <Route path="/Legal" element = {<Legal/>}/>
        <Route path="/ReadMe" element = {<ReadMe/>}/>
      </Routes>

    </>
  )
};

export default App;

