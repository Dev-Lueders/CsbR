import React from "react";
import PropTypes from "prop-types"
import T_Navbar from "../Atoms/NavBar/T_Navbar";
import L_Navbar from "../Atoms/NavBar/L_Navbar";
import B_Navbar from "../Atoms/NavBar/B_Navbar";
import Main_Container from "../Atoms/Main_Content/Main_Container";
import Stats_Container from "../Atoms/Stats_Content/Stats_Container";
import Media_Container from "../Atoms/Media_Content/Media_Container";

const Page_Frame = ({ topNavbar, leftNavbar,bottomNavbar,mainContent,mediaContent,statsContent }) =>{

return(
<>

        <T_Navbar>{topNavbar}</T_Navbar>
        <L_Navbar>{leftNavbar}</L_Navbar>
        <Main_Container>{mainContent}</Main_Container>
        <Media_Container>{mediaContent}</Media_Container>
        <Stats_Container>{statsContent}</Stats_Container>
        <B_Navbar>{bottomNavbar}</B_Navbar>
</>
)
};

Page_Frame.propTypes = {
    topNavbar: PropTypes.node,
    leftNavbar:PropTypes.node,
    bottomNavbar:PropTypes.node,
    mainContent:PropTypes.node,
    statsContent:PropTypes.node,
    mediaContent:PropTypes.node
}

Page_Frame.defaultProps = {
    topNavbar: null,
    leftNavbar: null,
    mainContent: null,
    mediaContent: null,
    statsContent: null,
    bottomNavbar: null,
};

export default Page_Frame;