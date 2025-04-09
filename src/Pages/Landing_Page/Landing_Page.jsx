//Also need to review the whole legal ease stuff BEFORE GOING LIVE
/*THIS LANDING PAGE IS THE PRIMARY PAGE FOR WHEN YOU ARE DIRECTED TO THE CREATORSANDBOXREVIEW SITE THIS WILL BE THE FIRST THING A GUEST SEES 
ALL COMPONENTS WILL BE BUILT SEPARATELY USE ID TO DIRECTLY STYLE THEM THERE IS A CSS FILE FOR COMPONENTS AND A CSS FILE FOR PAGES AND FOR MORE DIRECT STYLING USE THE INLINE 
*/
import Component_Testing from "../Test Page/Component_Testing.jsx";
import React from "react";
import "../pages_styles.css";
import ReadMe from "../Help/ReadMe.jsx";
import Scroll_Bar from "../../components/Atoms/Scroll_Bar/Scroll_Bar.jsx";
import Main_Content from "../../components/Atoms/Main_Content/Main_Container.jsx";
import T_Navbar from "../../components/Atoms/NavBar/T_Navbar.jsx";
import L_Navbar from "../../components/Atoms/NavBar/L_Navbar.jsx";
import Media_Container from "../../components/Atoms/Media_Content/Media_Container.jsx";
import Stats_Container from "../../components/Atoms/Stats_Content/Stats_Container.jsx";
import B_Navbar from "../../components/Atoms/NavBar/B_Navbar.jsx";

const Landing_Page = () => {
  const T_Links = [
    { label: "Home", path: "/" },
    { label: "About", path: "/info/About" },
    { label: "Log In", path: "/auth/Login_Page" },
    { label: "Testing Components", path: "/testing/Component_Testing" },
  ];

  const L_links = [
    { path: "/signup/Signup_Page", label: "SignUp" },
    { path: "/Games", label: "Games" },
    { path: "/info/coming_soon", label: "New Features" },
    { path: "/info/Suggestion_Box", label: "Suggestion Box" },
    { path: "/client/Client_Front_Page", label: "Client Pages" },
  ];

  const B_Links = [
    { path: "/signup/SignUp_Page", label: "Signup" },
    { path: "/info/Contact", label: "Contact Us" },
    { path: "/info/Help", label: "Help" },
    { path: "/info/About", label: "About" },
    { path: "/info/Support", label: "Support" },
    { path: "/info/Legal", label: "Legal" },
    { path: "/info/ReadMe", label: "ReadMe Info" },
  ];

  return (
    <>
      <T_Navbar links={T_Links} />
      <L_Navbar links={L_links} />
      <Main_Content />
      <Media_Container />
      <Stats_Container />

      <B_Navbar links={B_Links} />
    </>
  );
};
export default Landing_Page;
