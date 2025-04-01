import React from "react";
import T_Navbar from "../../../components/Atoms/NavBar/T_Navbar";
import B_Navbar from "../../../components/Atoms/NavBar/B_Navbar";
import L_Navbar from "../../../components/Atoms/NavBar/L_Navbar";
import Stats_Container from "../../../components/Atoms/Stats_Content/Stats_Container";
import Main_Content from "../../../components/Atoms/Main_Content/Main_Container";
import Media_Container from "../../../components/Atoms/Media_Content/Media_Container";
import Drop_Down from "../../../components/Atoms/Drop_Down/Drop_Down";

import PGA_DD_Holes from '../../Games/PGA2K/Data/PGA_DD_Holes.json';
import PGA_DD_Planets_Dune from '../../Games/PGA2K/Data/PGA_DD_Planets_Dune.json';
import PGA_DD_Planets_HD10180 from '../../Games/PGA2K/Data/PGA_DD_Planets_HD10180.json';
import PGA_DD_Planets_HR8799 from '../../Games/PGA2K/Data/PGA_DD_Planets_HR8799.json';
import PGA_DD_Planets_Kepler from '../../Games/PGA2K/Data/PGA_DD_Planets_Kepler.json';
import PGA_DD_Planets_Pegasi from '../../Games/PGA2K/Data/PGA_DD_Planets_Pegasi.json';
import PGA_DD_Planets_Startrek from '../../Games/PGA2K/Data/PGA_DD_Planets_Startrek.json';
import PGA_DD_Planets_Starwars from '../../Games/PGA2K/Data/PGA_DD_Planets_Starwars.json';
import PGA_DD_Planets_Trappist from '../../Games/PGA2K/Data/PGA_DD_Planets_Trappist.json';
import PGA_DD_Tees from '../../Games/PGA2K/Data/PGA_DD_Tees.json';
import PGA_DD_difficulty from '../../Games/PGA2K/Data/PGA_DD_difficulty.json';
import PGA_DD_realSolarsystem from '../../Games/PGA2K/Data/PGA_DD_realSolarsystem.json';
import PGA_DD_system_alphaCentauri from '../../Games/PGA2K/Data/PGA_DD_system_alphaCentauri.json';
import PGA_DD_theme from '../../Games/PGA2K/Data/PGA_DD_theme.json';
import PGA_DD_type from '../../Games/PGA2K/Data/PGA_DD_type.json';

const PGA2K = () => {
    const T_Links = [
        { label: "Home", path: "/" },
        { label: "About", path: "/info/About" },
        { label: "Log In", path:"/auth/Login_Page"}
      ];

    const L_Links= [
        { label:"", path:""},
        { label:"", path:""},
        { label: "2K23 Search", path: "/games/Search_Page_PGA2K23"},
        { label: "2K23 Add Course", path: "/games/PGA2K23_C_Long"},
        { label: "2K23 Add Review", path: "/games/PGA2K23_R_Long"},
        
        { label: "2K25 Search", path: "/games/Search_Page_PGA2K25"},
        
    ];
      const B_Links = [
        { path: "/signup/SignUp_Page", label: "Signup" },
        { path: "/info/Contact", label: "Contact Us" },
        { path: "/info/Help", label: "Help" },
        { path: "/info/About", label: "About" },
        { path: "/info/Support", label: "Support" },
        { path: "/info/Legal", label: "Legal" },
        { path: "/info/ReadMe", label: "ReadMe Info"},
      ];


    //   const  navigate = useNavigate();
    //   const Drop_Course = [
    //     {value: "/PGA2K23_C_Long", label:"Course Long Form"},
    //     {value: "/PGA2K23_C_Short", label:"Course Short Form"},
    //     {value: "/PGA2K23_C_Custom", label:"Course Custom Form"},
    //     ];
//-----------------------UNCOMMENT WHEN PAGES ARE DONE-------------------
    //    const Drop_Review = [
    //     {value: "/PGA2K23_R_Long", label:"Review Long Form"},
    //     {value: "/PGA2K23_R_Short", label:"Review Short Form"},
    //     {value: "/PGA2K23_R_Custom", label:"Review Custom Form"},
    //   ];
    //   const handleSelect = (selectedValue) => { navigate(selectedValue)};

    return(
        <>
        <T_Navbar links={T_Links}/>
        <L_Navbar links={L_Links}/>
        <Stats_Container/>
        <Main_Content>
        {/* <Drop_Down
                options={Drop_Course}
                label="Course Forms"
                onChange={handleSelect}        
        > */}   {/*uncomment when content pages are done */}
         {/* <Drop_Down 
                options={Drop_Review} 
                label="Review Forms"
                onChange={handleSelect}/> */}
                
        </Main_Content>
        <Media_Container/>
        <B_Navbar links={B_Links}/>

        
        </>
    )

}
export default PGA2K;