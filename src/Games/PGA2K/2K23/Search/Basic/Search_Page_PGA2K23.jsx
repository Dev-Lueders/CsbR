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
  

import WorldMap from "../../../../../components/World_Map/World_Map.jsx"
import T_Navbar from "../../../../../components/NavBar/T_Navbar.jsx"
import B_Navbar from "../../../../../components/NavBar/B_Navbar.jsx";
import MediaContainer from "../../../../../components/Media_Content/Media_Container.jsx";
import Stats_Container from "../../../../../components/Stats_Content/Stats_Container.jsx"
import Main_Content from "../../../../../components/Main_Content/Main_Content.jsx";
import L_Navbar from "../../../../../components/NavBar/L_Navbar.jsx";
import Drop_Down from "../../../../../components/Drop_Down/Drop_Down.jsx";
import Drop_Down_Searchable from "../../../../../components/Drop_Down/Drop_Down_Searchable.jsx";
import Scroll_Bar from "../../../../../components/Scroll_Bar/Scroll_Bar.jsx";
import Check_Box from "../../../../../components/Check_Box/Check_Box.jsx";
import Button_btn from "../../../../../components/Buttons/Button.jsx";




const Search_Page_PGA2K23 = () =>{
    
  const T_Links = [
    { label: "Signout", path: "/signout" },
    { label: "Personal Profile", path: "/Profile_Page" },
    { label: "Home Page", path: "/" },
  ];

  const L_Links = [


  ];
  const B_Links = [
    { path: "/SignUp_Page", label: "Signup" },
    { path: "/contact", label: "Contact Us" },
    { path: "/help", label: "Help" },
    { path: "/about", label: "About" },
    { path: "/support", label: "Support" },
    { path: "/legal", label: "Legal" },
  ];

  const Drop_Down_Searchable_Type = [
    { label: "Realistic", value: "Realistic" },
    { label: "Fantasy", value: "Fantasy" },
    { label: "Futuristic", value: "Futuristic" },
    { label: "Modern", value: "Modern" },
    { label: "Putt Putt", value:"Putt_Putt"},
    { label: "Holiday", value:"Holiday"},
    { label:"Scary Holiday", value:"Scary_Holiday"},
    { label:"Old World", value:"Old_World"},
    { label:"Post Apocoliptic", value:"Post_Apocoliptic"},
    { label:"Movie Themed", value:"Movie"},
    { label:"Silly", value:"Silly"},
    { label:"Story", value:"Story"}
  ];

  const Drop_Down_Searchable_Difficulty = [
    { label: "Easiest", value:"dif_Easiest"},
    { label: "Easy", value:"dif_Easy"},
    { label: "Medium", value:"dif_Medium"},
    { label: "Hard", value:"dif_Hard"},
    { label: "Hardest", value:"dif_Hardest"},
    
  ];

  const Drop_Down_Searchable_Theme = [
{ label:"Country", value:"theme_Country"},
{ label:"Rustic", value:"theme_Rustic"},
{ label:"Highland", value:"theme_Highland"},
{ label:"Tropical", value:"theme_Tropical"},
{ label:"Delta", value:"theme_Delta"},
{ label:"Autum", value:"theme_Autum"},
{ label:"Boreal", value:"theme_Boreal"},
{ label:"Winter", value:"theme_Winter"},
{ label:"Steppe", value:"theme_Steppe"},
{ label:"Desert", value:"theme_Desert"},
{ label:"Harvest", value:"theme_Harvest"},
{ label:"Swiss", value:"theme_Swiss"},
{ label:"Other", value:"theme_Other"},
{ label:"Default", value:"theme_Default"},
  ];

  const Drop_Down_Searchable_RealSolarSystem = [
    { label: "Sol System", value: "sys_Sol" },
    { label: "Alpha Centauri System", value: "sys_Alpha_Centauri" },
    { label: "TRAPPIST-1 System", value: "sys_TRAPPIST-1" },
    { label: "Kepler-90 System", value: "sys_Kepler-90" },
    { label: "51 Pegasi System", value: "sys_51_Pegasi" },
    { label: "Tau Ceti System", value: "sys_Tau_Ceti" },
    { label: "HD 10180 System", value: "sys_HD_10180" },
    { label: "HR 8799 System", value: "sys_HR_8799" }
  ];

 const Drop_Down_Searchable_PlanetsofAlphaCentauri = [
    { label: "Proxima Centauri b", value: "planet_Proxima_Centauri_b" },
    { label: "Proxima Centauri c", value: "planet_Proxima_Centauri_c" },
    { label: "Proxima Centauri d", value: "planet_Proxima_Centauri_d" }
 ];

 const Drop_Down_Searchable_PlanetsofTrppist_1 =[
    { label: "TRAPPIST-1b", value: "planet_TRAPPIST-1b" },
    { label: "TRAPPIST-1c", value: "planet_TRAPPIST-1c" },
    { label: "TRAPPIST-1d", value: "planet_TRAPPIST-1d" },
    { label: "TRAPPIST-1e", value: "planet_TRAPPIST-1e" },
    { label: "TRAPPIST-1f", value: "planet_TRAPPIST-1f" },
    { label: "TRAPPIST-1g", value: "planet_TRAPPIST-1g" },
    { label: "TRAPPIST-1h", value: "planet_TRAPPIST-1h" }
 ];

 const Drop_Down_Searchable_PlanetsofKepler_90 = [
    { label: "Kepler-90b", value: "planet_Kepler-90b" },
    { label: "Kepler-90c", value: "planet_Kepler-90c" },
    { label: "Kepler-90d", value: "planet_Kepler-90d" },
    { label: "Kepler-90e", value: "planet_Kepler-90e" },
    { label: "Kepler-90f", value: "planet_Kepler-90f" },
    { label: "Kepler-90g", value: "planet_Kepler-90g" },
    { label: "Kepler-90h", value: "planet_Kepler-90h" },
    { label: "Kepler-90i", value: "planet_Kepler-90i" }
 ];

 const Drop_Down_Searchable_Planetsof51Pegasi = [
    { label: "51 Pegasi b", value: "planet_51_Pegasi_b" }
 ];

 const Drop_Down_Searchable_PlanetsofHD10180 = [

    { label: "HD 10180 b", value: "planet_HD_10180_b" },
    { label: "HD 10180 c", value: "planet_HD_10180_c" },
    { label: "HD 10180 d", value: "planet_HD_10180_d" },
    { label: "HD 10180 e", value: "planet_HD_10180_e" },
    { label: "HD 10180 f", value: "planet_HD_10180_f" },
    { label: "HD 10180 g", value: "planet_HD_10180_g" },
    { label: "HD 10180 h", value: "planet_HD_10180_h" }
 ];

const Drop_Down_Searchable_PlanetsofHR8799 = [
    { label: "HR 8799 b", value: "planet_HR_8799_b" },
    { label: "HR 8799 c", value: "planet_HR_8799_c" },
    { label: "HR 8799 d", value: "planet_HR_8799_d" },
    { label: "HR 8799 e", value: "planet_HR_8799_e" }
];

  const Drop_Down_Searchable_PlanetsofStarWars =[
    { label: "Coruscant", value: "planet_Coruscant" },
    { label: "Alderaan", value: "planet_Alderaan" },
    { label: "Chandrila", value: "planet_Chandrila" },
    { label: "Kuat", value: "planet_Kuat" },
    { label: "Bothawui", value: "planet_Bothawui" },
    { label: "Dathomir", value: "planet_Dathomir" },
    { label: "Mandalore", value: "planet_Mandalore" },
    { label: "Tatooine", value: "planet_Tatooine" },
    { label: "Hoth", value: "planet_Hoth" },
    { label: "Endor", value: "planet_Endor" },
    { label: "Yavin 4", value: "planet_Yavin_4" },
    { label: "Dagobah", value: "planet_Dagobah" },
    { label: "Kessel", value: "planet_Kessel" },
    { label: "Ilum", value: "planet_Ilum" },
    { label: "Exegol", value: "planet_Exegol" },
    { label: "Csilla", value: "planet_Csilla" }
  ];

  const Drop_Down_Searchable_PlanetsofDune = [
    { label: "Arrakis", value: "planet_Arrakis" },
    { label: "Caladan", value: "planet_Caladan" },
    { label: "Giedi Prime", value: "planet_Giedi_Prime" },
    { label: "Salusa Secundus", value: "planet_Salusa_Secundus" },
    { label: "Kaitain", value: "planet_Kaitain" },
    { label: "Ix", value: "planet_Ix" },
    { label: "Richese", value: "planet_Richese" },
    { label: "Wallach IX", value: "planet_Wallach_9" }
  ];

  const Drop_Down_Searchable_PlanetsofStarTrek=[
    { label: "Vulcan", value: "planet_Vulcan" },
    { label: "Romulus", value: "planet_Romulus" },
    { label: "Andoria", value: "planet_Andoria" },
    { label: "Betazed", value: "planet_Betazed" },
    { label: "Cardassia", value: "planet_Cardassia" },
    { label: "Ferenginar", value: "planet_Ferenginar" },
    { label: "Bajor", value: "planet_Bajor" },
    { label: "Wolf 359", value: "planet_Wolf_359" },
    { label: "Risa", value: "planet_Risa" }
  ];

  const Drop_Down_Searchable_PlanetsofSol = [
    { label: "Mercury", value: "planet_Mercury" },
    { label: "Venus", value: "planet_Venus" },
    { label: "Earth", value: "planet_Earth" },
    { label: "Mars", value: "planet_Mars" },
    { label: "Jupiter", value: "planet_Jupiter" },
    { label: "Saturn", value: "planet_Saturn" },
    { label: "Uranus", value: "planet_Uranus" },
    { label: "Neptune", value: "planet_Neptune" },
  ];

  const Drop_Down_Searchable_SystemChoice = [
    { label:"Real",value:"real"},
    { label: "Star Wars", value: "star_wars" },
    { label: "Dune", value: "dune" },
    { label: "Star Trek", value: "star_trek" },
    { label: "Mass Effect", value: "mass_effect" },
    { label: "The Expanse", value: "the_expanse" },
    { label: "Halo", value: "halo" },
    { label: "StarCraft", value: "starcraft" },
    { label: "Warhammer 40K", value: "warhammer_40k" },
    { label: "Elite Dangerous", value: "elite_dangerous" },
    { label: "Destiny", value: "destiny" }
  ];

  const Drop_Down_Searchable_Continent= [
    { label:"Asia", value:"Asia"},
    { label:"Africa", value:"Africa"},
    { label:"North America", value:"N_America"},
    { label:"South America", value:"S_America"},
    { label:"Europe", value:"Europe"},
    { label:"Australia", value:"Australia"},
    { label:"Antartica", value:"Antartica"}
  ];

  
return(
<>
<Scroll_Bar>
<T_Navbar links = {T_Links}/>
{/* <L_Navbar links = {L_Links}/> */}
<div/>
<br></br><div/>
<br></br><div/>
<br></br><div/>
<br></br><div/>
<br></br>
<Drop_Down_Searchable
id="srch_Difficulty"
label="Difficulty" 
options={Drop_Down_Searchable_Difficulty} 
onChange={(value) => console.log("Selected:", value)} 
containerStyle={{ display: "flex", flexDirection: "column", alignItems: "center" }}
selectStyle={{ width: "200px" }}
/>

<Drop_Down_Searchable
id="srch_Type"
label="Type" 
options={Drop_Down_Searchable_Type} 
onChange={(value) => console.log("Selected:", value)} 
containerStyle={{ display: "flex", flexDirection: "column", alignItems: "center" }}
selectStyle={{ width: "200px" }}
/>
<Drop_Down_Searchable
id="srch_Theme"
label="Theme" 
options={Drop_Down_Searchable_Theme} 
onChange={(value) => console.log("Selected:", value)} 
containerStyle={{ display: "flex", flexDirection: "column", alignItems: "center" }}
selectStyle={{ width: "200px" }}
/>

{/* <L_Navbar/> */}
<MediaContainer/>
  <WorldMap/>
 
<Stats_Container/>
<Main_Content/>
</Scroll_Bar>
<B_Navbar links = {B_Links}/>
</>

)

};

export default Search_Page_PGA2K23;