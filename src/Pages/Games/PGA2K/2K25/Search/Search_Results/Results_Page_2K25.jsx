import WorldMap from "../../../../../../components/Organisim/World_Map/World_Map.jsx";
import T_Navbar from "../../../../../../components/Atoms/NavBar/T_Navbar.jsx";
import B_Navbar from "../../../../../../components/Atoms/NavBar/B_Navbar.jsx";
import MediaContainer from "../../../../../../components/Atoms/Media_Content/Media_Container.jsx";
import Stats_Container from "../../../../../../components/Atoms/Stats_Content/Stats_Container.jsx";
import Main_Content from "../../../../../../components/Atoms/Main_Content/Main_Container.jsx";

const Results_Page_PGA2K25 = () => {
  const B_NavLink = [
    { path: "/signup/SignUp_Page", label: "Signup" },
    { path: "/info/contact", label: "Contact Us" },
    { path: "/info/help", label: "Help" },
    { path: "/info/about", label: "About" },
    { path: "/info/support", label: "Support" },
    { path: "/info/legal", label: "Legal" },
  ];

  const T_NavLink = [
    { path: "/auth/login", label: "Login" },
    { path: "/client/profile", label: "Profile" },
    { path: "/games/review", label: "Add Review" },
    { path: "/games/course", label: "Add Course" },
    { label: "Home", path: "/" },
  ];

  // Define your desired custom styles for this page
  const mc_props = {
    position: "absolute",
    top: "6.8vh",
    bottom: "7vh",
    right: "calc(49.75vw - 10vw)",
    width: "calc(51vw - 10vw)",
    height: "86.2vh",
    border: "2px solid black",
    padding: "1vw",
    boxShadow: "10px 15px 5px rgba(211, 211, 211, 0.6)",
    backgroundColor: "#fff",
    zIndex: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  };

  return (
    <>
      <T_Navbar links={T_NavLink} />
      <MediaContainer>
        <WorldMap containerId="Media_map" />
      </MediaContainer>
      <Main_Content MC_Style={mc_props} />
      <Stats_Container />

      <B_Navbar links={B_NavLink} />
    </>
  );
};
export default Results_Page_PGA2K25;
