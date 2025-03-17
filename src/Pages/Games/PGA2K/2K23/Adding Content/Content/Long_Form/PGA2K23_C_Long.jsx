import React, { useState } from "react";
import Drop_Down from "../../../../../../../components/Atoms/Drop_Down/Drop_Down";
import T_Navbar from "../../../../../../../components/Atoms/NavBar/T_Navbar";
import B_Navbar from "../../../../../../../components/Atoms/NavBar/B_Navbar";
import L_Navbar from "../../../../../../../components/Atoms/NavBar/L_Navbar";
import Text_Box from "../../../../../../../components/Atoms/Input_Container/Text_Box";
import Check_Box from "../../../../../../../components/Atoms/Check_Box/Check_Box";
import { Form } from "react-router-dom";



import PGA_DD_Holes from '../../../../Data/PGA_DD_Holes.json';
import PGA_DD_Planets_Dune from '../../../../Data/PGA_DD_Planets_Dune.json';
import PGA_DD_Planets_HD10180 from '../../../../Data/PGA_DD_Planets_HD10180.json';
import PGA_DD_Planets_HR8799 from '../../../../Data/PGA_DD_Planets_HR8799.json';
import PGA_DD_Planets_Kepler from '../../../../Data/PGA_DD_Planets_Kepler.json';
import PGA_DD_Planets_Pegasi from '../../../../Data/PGA_DD_Planets_Pegasi.json';
import PGA_DD_Planets_Startrek from '../../../../Data/PGA_DD_Planets_Startrek.json';
import PGA_DD_Planets_Starwars from '../../../../Data/PGA_DD_Planets_Starwars.json';
import PGA_DD_Planets_Trappist from '../../../../Data/PGA_DD_Planets_Trappist.json';
import PGA_DD_Tees from '../../../../Data/PGA_DD_Tees.json';
import PGA_DD_difficulty from '../../../../Data/PGA_DD_difficulty.json';
import PGA_DD_realSolarsystem from '../../../../Data/PGA_DD_realSolarsystem.json';
import PGA_DD_system_alphaCentauri from '../../../../Data/PGA_DD_system_alphaCentauri.json';
import PGA_DD_theme from '../../../../Data/PGA_DD_theme.json';
import PGA_DD_type from '../../../../Data/PGA_DD_type.json';

const PGA2K23_C_Long = () => {

    const [txtBX_Course_Name, settxtBX_Course_Name] = useState("");
    const [txtBX_Par_Level, settxtBX_Par_Level] = useState("");
    const [txtBX_Course_Distance, settxtBX_Course_Distance] = useState("");
    const [txtBX_Tee1, settxtBX_Tee1] = useState("");
    const [txtBX_Tee2, settxtBX_Tee2] = useState("");
    const [txtBX_Tee3, settxtBX_Tee3] = useState("");
    const [txtBX_Tee4, settxtBX_Tee4] = useState("");
    const [txtBX_Tee5, settxtBX_Tee5] = useState("");
    const [txtBX_Country, settxtBX_Country] = useState("");
    const [txtBX_Province,settxtBX_Province]= useState("");
    const [txtBX_City,settxtBX_City]= useState("");
    const [txtBX_Course_Description,settxtBX_Course_Description]= useState("");
    const [txtBX_County,settxtBX_County]= useState("");

    const [DD_Holes,setDD_Holes]= useState(null);
    const [DD_Difficulty,setDD_Difficulty]= useState(null);
    const [DD_Planets_Dune,setDD_Planets_Dune]= useState(null);
    const [DD_Planets_HD10180,setDD_Planets_HD10180]= useState(null);
    const [DD_Planets_HR8799,setDD_Planets_HR8799]= useState(null);
    const [DD_Planets_Kepler,setDD_Planets_Kepler]= useState(null);
    const [DD_Planets_Pegasi,setDD_Planets_Pegasi]= useState(null);
    const [DD_Planets_Startrek,setDD_Planets_Startrek]= useState(null);
    const [DD_Planets_Starwars,setDD_Planets_Starwars]= useState(null);
    const [DD_Planets_Trappist,setDD_Planets_Trappist]= useState(null);
    const [DD_realSolarSystem,setDD_realSolarSystem]= useState(null);
    const [DD_System_AlphaCentauri,setDD_System_AlphaCentauri]= useState(null);
    const [DD_Tees,setDD_Tees]= useState(null);
    const [DD_Theme,setDD_Theme]= useState(null);
    const [DD_Type,setDD_Type]= useState(null);
    
    const T_Links = [
        { label: "Home", path: "/" },
        { label: "About", path: "/About" },
        { label: "Log In", path: "/Login_Page" }
    ];

    return (
        <>

            <h3>Long Form for Content</h3>
            <T_Navbar links={T_Links} />

            <Form>
                <Text_Box
                    labelText="Course Name"
                    value={txtBX_Course_Name}
                    onChange={(e) => settxtBX_Course_Name(e.target.value)}
                />  {/* Course Name */}

                <Drop_Down /> {/* Designer Name */}

                <Text_Box
                    labelText="Par Level"
                    value={txtBX_Par_Level}
                    onChange={(e) => settxtBX_Par_Level(e.target.value)}
                />  {/* What is the Par level*/}


                <Text_Box 
                    labelText="Course Distance"
                    value={txtBX_Course_Distance}
                    onChange={(e)=> settxtBX_Course_Distance(e.target.value)}
                /> {/*What is the distance of the course */}
                <Drop_Down
                lable = "Hole Quantity"
                options={PGA_DD_Holes}
                onSelect={setSelectedHoles} />  {/* How many holes */}
                <Drop_Down /> {/*How Many Tees */}
                <Text_Box 
                    labelText="Tee #1 Distance"
                    value={txtBX_Tee1}
                    onChange={(e)=> settxtBX_Tee1(e.target.value)}
                />  {/*1st Tee Distance */}

                <Text_Box 
                labelText="Tee #2 Distance"
                value={txtBX_Tee2}
                onChange={(e)=> settxtBX_Tee2(e.target.value)}
                />  {/*2th Tee Distance */}

                <Text_Box 
                labelText="Tee #3 Distance"
                value={txtBX_Tee3}
                onChange={(e)=> settxtBX_Tee3(e.target.value)}
                />   {/*3nd Tee Distance */}

                <Text_Box 
                labelText="Tee #4 Distance"
                value={txtBX_Tee4}
                onChange={(e)=> settxtBX_Tee4(e.target.value)}
                />   {/* 4rd Tee Distance */}

                <Text_Box
                labelText="Tee #5 Distance"
                value={txtBX_Tee5}
                onChange={(e)=> settxtBX_Tee5(e.target.value)}
                />    {/* 5th Tee Distance */}

                <Check_Box />    {/*HCP Rated */}
                <Check_Box />    {/*TGC Approved */}
                <Check_Box />    {/* Play through on the web */}
                <Text_Box 
                labelText="Course Description"
                value={txtBX_Course_Description}
                onChange={(e)=> settxtBX_Course_Description(e.target.value)}
                />    {/* Course Description */}
                
                <Drop_Down />    {/* Course Theme */}
                <Drop_Down />    {/* How Many Pins */}
                <Drop_Down />    {/* Difficulty Level */}
                <Drop_Down />    {/* Course Type */}
                <Drop_Down />    {/* Designed by what?  LiDAR, GIS, or from the mind */}
                <Drop_Down />    {/* Solar System Location*/}
                <Drop_Down />    {/* Planet Location */}

                <Text_Box 
                labelText="Country"
                value={txtBX_Country}
                onChange={(e)=> settxtBX_Country(e.target.value)}
                />    {/* Country Location */}

                <Text_Box 
                labelText="State/Province"
                value={txtBX_Province}
                onChange={(e)=> settxtBX_Province(e.target.value)}
                />    {/* State/ Province Loctaion */}

                <Text_Box 
                labelText="City"
                value={txtBX_City}
                onChange={(e)=> settxtBX_City(e.target.value)}
                />    {/* City Location*/}

                <Text_Box 
                labelText="County"
                value={txtBX_County}
                onChange={(e)=> settxtBX_County(e.target.value)}
                />    {/* County Location*/}

                <Check_Box />    {/*Is it a real Course or based off a real course*/}
            </Form>
            <L_Navbar>
            </L_Navbar>

            <B_Navbar />
        </>

    )

}

export default PGA2K23_C_Long;