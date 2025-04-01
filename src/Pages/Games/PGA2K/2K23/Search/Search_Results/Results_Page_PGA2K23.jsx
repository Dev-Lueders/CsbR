import "../../../../../../components/components_styles.css";
import WorldMap from "../../../../../../components/Organisim/World_Map/World_Map.jsx";
import T_Navbar from "../../../../../../components/Atoms/NavBar/T_Navbar.jsx";
import B_Navbar from "../../../../../../components/Atoms/NavBar/B_Navbar.jsx";
import MediaContainer from "../../../../../../components/Atoms/Media_Content/Media_Container.jsx";
import Stats_Container from "../../../../../../components/Atoms/Stats_Content/Stats_Container.jsx";
import Main_Content from "../../../../../../components/Atoms/Main_Content/Main_Container.jsx";

const Results_Page_PGA2K23 = () => {
  const B_NavLink = [
    { path: "/SignUp_Page", label: "Signup" },
    { path: "/contact", label: "Contact Us" },
    { path: "/help", label: "Help" },
    { path: "/about", label: "About" },
    { path: "/support", label: "Support" },
    { path: "/legal", label: "Legal" },
  ];

  const T_NavLink = [
    { path: "/login", label: "Login" },
    { path: "/profile", label: "Profile" },
    { path: "/review", label: "Add Review" },
    { path: "/course", label: "Add Course" },
    { label: "Home", path: "/" },
  ];

  // Define your desired custom styles for this page

  return (
    <>
      <T_Navbar links={T_NavLink} />
      <Main_Content />
      <MediaContainer>
        <WorldMap />
      </MediaContainer>

      <Stats_Container />

      <B_Navbar links={B_NavLink} />
    </>
  );
};
export default Results_Page_PGA2K23;
