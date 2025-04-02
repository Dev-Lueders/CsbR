// move the world map to the top right
// Add functionality to search features,
//When selecting a real course it will switch the location for the solar system to the Sol system, and make the planet Earth
//When Selection a fictitious course set up, a drop down for theme types should be available, being able to search by movie, tv show, video game shuld happen
// you should be able to search by  any feature alone or all together, mix and match possibilities
// Enviroments should be search able to
// Being able to search reviews by words or thumbs up quantity
// L_Navbar should have basic search filters available and when things like selecting real  courses or not the other options should be available in the Main Content area.
// Basic search should consist of tee qty, pin qty, designer name, Search through the reviews the best review or worst,
// and Course Name

import "../../../../../../components/components_styles.css";
import WorldMap from "../../../../../../components/Organisim/World_Map/World_Map.jsx";
import T_Navbar from "../../../../../../components/Atoms/NavBar/T_Navbar.jsx";
import B_Navbar from "../../../../../../components/Atoms/NavBar/B_Navbar.jsx";
import MediaContainer from "../../../../../../components/Atoms/Media_Content/Media_Container.jsx";
import Stats_Container from "../../../../../../components/Atoms/Stats_Content/Stats_Container.jsx";
import Main_Content from "../../../../../../components/Atoms/Main_Content/Main_Container.jsx";
import L_Navbar from "../../../../../../components/Atoms/NavBar/L_Navbar.jsx";
import Drop_Down from "../../../../../../components/Atoms/Drop_Down/Drop_Down.jsx";
import Scroll_Bar from "../../../../../../components/Atoms/Scroll_Bar/Scroll_Bar.jsx";
import Check_Box from "../../../../../../components/Atoms/Check_Box/Check_Box.jsx";
import Button_btn from "../../../../../../components/Atoms/Buttons/Button.jsx";

import PGA_DD_Holes from "../../../../../Games/PGA2K/Data/PGA_DD_Holes.json";
import PGA_DD_Planets_Dune from "../../../../../Games/PGA2K/Data/PGA_DD_Planets_Dune.json";
import PGA_DD_Planets_HD10180 from "../../../../../Games/PGA2K/Data/PGA_DD_Planets_HD10180.json";
import PGA_DD_Planets_HR8799 from "../../../../../Games/PGA2K/Data/PGA_DD_Planets_HR8799.json";
import PGA_DD_Planets_Kepler from "../../../../../Games/PGA2K/Data/PGA_DD_Planets_Kepler.json";
import PGA_DD_Planets_Pegasi from "../../../../../Games/PGA2K/Data/PGA_DD_Planets_Pegasi.json";
import PGA_DD_Planets_Startrek from "../../../../../Games/PGA2K/Data/PGA_DD_Planets_Startrek.json";
import PGA_DD_Planets_Starwars from "../../../../../Games/PGA2K/Data/PGA_DD_Planets_Starwars.json";
import PGA_DD_Planets_Trappist from "../../../../../Games/PGA2K/Data/PGA_DD_Planets_Trappist.json";
import PGA_DD_Tees from "../../../../../Games/PGA2K/Data/PGA_DD_Tees.json";
import PGA_DD_difficulty from "../../../../../Games/PGA2K/Data/PGA_DD_difficulty.json";
import PGA_DD_realSolarsystem from "../../../../../Games/PGA2K/Data/PGA_DD_realSolarsystem.json";
import PGA_DD_system_alphaCentauri from "../../../../../Games/PGA2K/Data/PGA_DD_system_alphaCentauri.json";
import PGA_DD_theme from "../../../../../Games/PGA2K/Data/PGA_DD_theme.json";
import PGA_DD_type from "../../../../../Games/PGA2K/Data/PGA_DD_type.json";

const Search_Page_PGA2K23 = () => {
  const T_Links = [
    { label: "Signout", path: "/signout" },
    { label: "Personal Profile", path: "/client/Profile_Page" },
    { label: "Home", path: "/" },
    { label: "PGA2K23 Results Page", path: "/games/Results_Page_PGA2K23" },
  ];

  const L_Links = [];
  const B_Links = [
    { path: "/signup/SignUp_Page", label: "Signup" },
    { path: "/info/contact", label: "Contact Us" },
    { path: "/info/help", label: "Help" },
    { path: "/info/about", label: "About" },
    { path: "/info/support", label: "Support" },
    { path: "/info/legal", label: "Legal" },
  ];

  return (
    <>
      <T_Navbar links={T_Links} />

      <L_Navbar>
        <Drop_Down
          id="srch_Difficulty"
          label="Difficulty"
          options={Drop_Down}
          onChange={(value) => console.log("Selected:", value)}
          containerStyle={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          selectStyle={{ width: "200px" }}
        />

        <Drop_Down
          id="srch_Type"
          label="Type"
          options={Drop_Down}
          onChange={(value) => console.log("Selected:", value)}
          containerStyle={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          selectStyle={{ width: "200px" }}
        />
        <Drop_Down
          id="srch_Theme"
          label="Theme"
          options={Drop_Down}
          onChange={(value) => console.log("Selected:", value)}
          containerStyle={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          selectStyle={{ width: "200px" }}
        />
      </L_Navbar>

      <MediaContainer>
        <WorldMap />
      </MediaContainer>

      <Stats_Container />
      <Main_Content />

      <B_Navbar links={B_Links} />
    </>
  );
};

export default Search_Page_PGA2K23;
