import React from 'react';
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
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const L_links = [
    { label: "Signup", path: "/signup" },
    { label: "Search", path: "/search" },
    { label: "Add Review", path: "/add_review" },
    { label: "Add Course", path: "/add_course" },
    { label: "New Features", path: "/coming_soon" },
    { label: "Suggestion Box", path: "/add_content" },
  ];

  const B_Links = [
    { path: "/signup", label: "Signup" },
    { path: "/contact", label: "Contact Us" },
    { path: "/help", label: "Help" },
    { path: "/about", label: "About" },
    { path: "/support", label: "Support" },
    { path: "/legal", label: "Legal" },
  ];

  return (
    <div className="container-fluid">
      <T_Navbar links={T_Links} />
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