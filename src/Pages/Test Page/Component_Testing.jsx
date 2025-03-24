import React from 'react';
import "../pages_styles.css";   
import "../../components/components_styles.css"
import T_Navbar from '../../components/Atoms/NavBar/T_Navbar';
import L_Navbar from '../../components/Atoms/NavBar/L_Navbar';
import B_Navbar from '../../components/Atoms/NavBar/B_Navbar';
import Main_Container from '../../components/Atoms/Main_Content/Main_Container';
import Stats_Container from '../../components/Atoms/Stats_Content/Stats_Container';
import Media_Container from '../../components/Atoms/Media_Content/Media_Container';
import UGC_Card from '../../components/Atoms/UGC_Cards/UGC_Cards';
const Component_Testing = () => {
    const T_Links = [
     { label: "Home", path: "/" },
    ]
    const L_Links = [
           { path: "/Signup_Page", label: "SignUp" },
    { path: "/Games", label: "Games"},
    { path: "/coming_soon", label: "New Features" },
    { path: "/Suggestion_Box", label: "Suggestion Box" },
    ]
    const B_Links = [
    { path: "/SignUp_Page", label: "Signup" },
    { path: "/Contact", label: "Contact Us" },
    { path: "/Help", label: "Help" },
    { path: "/About", label: "About" },
    { path: "/Support", label: "Support" },
    { path: "/Legal", label: "Legal" },
    { path: "/ReadMe", label: "ReadMe Info"},]
    return (

        <>
            <T_Navbar links={T_Links} />
            <L_Navbar links={L_Links} />
            <B_Navbar links={B_Links}/>
  <Main_Container/>
  <Stats_Container/>
  <Media_Container/>
        <UGC_Card/>
        </>
    );
    }

    export default Component_Testing;