/*THIS LANDING PAGE IS THE PRIMARY PAGE FOR WHEN YOU ARE DIRECTED TO THE CREATORSANDBOXREVIEW SITE THIS WILL BE THE FIRST THING A GUEST SEES 
ALL COMPONENTS WILL BE BUILT SEPARATELY USE ID TO DIRECTLY STYLE THEM THERE IS A CSS FILE FOR COMPONENTS AND A CSS FILE FOR PAGES AND FOR MORE DIRECT STYLING USE THE INLINE 
*/

import React from 'react';
import "../pages_styles.css";
import "../../components/components_styles.css"
import ReadMe from '../Help/ReadMe.jsx'
import Scroll_Bar from '../../components/Scroll_Bar/Scroll_Bar.jsx';
import Main_Content from '../../components/Main_Content/Main_Content.jsx';
import T_Navbar from '../../components/NavBar/T_Navbar.jsx';
import L_Navbar from '../../components/NavBar/L_Navbar.jsx'; 
import Media_Container from '../../components/Media_Content/Media_Container.jsx'; 
import Stats_Container from '../../components/Stats_Content/Stats_Container.jsx';
import B_Navbar from '../../components/NavBar/B_Navbar.jsx';

const Landing_Page = () => {

  const T_Links = [
    { label: "Home", path: "/" },
    { label: "About", path: "/About" },
    { label: "Log In", path:"/Login_Page"}
  ];

  const L_links = [
    { label: "Signup", path: "/SignUp_Page" },
    {label: "Games", path: "/Games"},
    { label: "Search", path: "/Search_Page_PGA2K23" },
    { label: "Add Review", path: "/add_review" },
    { label: "Add Course", path: "/add_course" },
    { label: "New Features", path: "/coming_soon" },
    { label: "Suggestion Box", path: "/add_content" },
  ];

  const B_Links = [
    { path: "/SignUp_Page", label: "Signup" },
    { path: "/Contact", label: "Contact Us" },
    { path: "/Help", label: "Help" },
    { path: "/About", label: "About" },
    { path: "/Support", label: "Support" },
    { path: "/Legal", label: "Legal" },
    { path: "/ReadMe", label: "ReadMe Info"},
  ];

  return (
    <div className="container-fluid">
      <T_Navbar links={T_Links} id="T_Nav" />
      <L_Navbar links={L_links} />

      {/* Row for main and side content */}
      <div className="row" style={{ height: "80vh" }}>
        {/* Main Content Column */}
        <div className="col-md-8" style={{ paddingRight: 0 }}>
          {/* This container holds Main_Content with fixed height */}
          <div style={{ height: "100%", overflow: "hidden" }}>
            <Main_Content>
              <Scroll_Bar height="100%" width="100%">
                <p>
                  {/* Your long content here */}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
                  felis eu erat accumsan egestas... (more content)
                </p>
                {/* More content as needed */}
              </Scroll_Bar>
            </Main_Content>
          </div>
        </div>

        {/* Side Content Column */}
        <div className="col-md-4">
          <Media_Container />
          <Stats_Container />
        </div>
      </div>

      <B_Navbar links={B_Links} />
    </div>
  );
};

      export default Landing_Page;