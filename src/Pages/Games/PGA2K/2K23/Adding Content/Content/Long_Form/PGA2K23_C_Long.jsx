import React, { useState } from "react";
import Drop_Down from "../../../../../../../components/Drop_Down/Drop_Down";
import T_Navbar from "../../../../../../../components/NavBar/T_Navbar";
import B_Navbar from "../../../../../../../components/NavBar/B_Navbar";
import L_Navbar from "../../../../../../../components/NavBar/L_Navbar";
import Text_Box from "../../../../../../../components/Input_Container/Text_Box";
import Check_Box from "../../../../../../../components/Check_Box/Check_Box";
import React from "react";
import { Form } from "react-router-dom";


const PGA2K23_C_Long = () => {

    const [txtBX_Course_Name, settxtBX_Course_Name] = useState("");
    const [txtBX_Par_Level, settxtBX_Par_Level] = useState("");
    const [txtBX_Course_Distance, settxtBX_Course_Distance] = useState("");
    const [txtBX_, settxtBX_] = useState("");
    const [txtBX_, settxtBX_] = useState("");
    const [txtBX_, settxtBX_] = useState("");
    const [txtBX_, settxtBX_] = useState("");
    const [txtBX_, settxtBX_] = useState("");

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
                <Drop_Down />  {/* How many holes */}
                <Drop_Down /> {/*How Many Tees */}
                <Text_Box 
                    labelText="Tee #1 Distance"
                    value={txtBX_Tee1}
                    onChange={(e)=> settxtBX_Tee1(e.target.value)}
                />  {/*1st Tee Distance */}

                <Text_Box 
                labelText="Tee #2 Distance"
                value={txtBX_Tee2}
                onChange={(e)=> settxtBX_Tee2}
                />  {/*2th Tee Distance */}

                <Text_Box 
                labelText="Tee #3 Distance"
                value={txtBX_Tee3}
                onChange={(e)=> settxtBX_Tee3}
                />   {/*3nd Tee Distance */}

                <Text_Box 
                labelText="Tee #4 Distance"
                value={txtBX_Tee4}
                onChange={(e)=> settxtBX_Tee4}
                />   {/* 4rd Tee Distance */}

                <Text_Box
                labelText="Tee #5 Distance"
                value={txtBX_Tee5}
                onChange={(e)=> settxtBX_Tee5}
                />    {/* 5th Tee Distance */}

                <Check_Box />    {/*HCP Rated */}
                <Check_Box />    {/*TGC Approved */}
                <Check_Box />    {/* Play through on the web */}
                <Text_Box 
                labelText="Course Description"
                value={txtBX_Course_Description}
                onChange={(e)=> settxtBX_Course_Description}
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
                value={txtBX_Course_Country}
                onChange={(e)=> settxtBX_Course_Country}
                />    {/* Country Location */}

                <Text_Box 
                labelText="State/Province"
                value={txtBX_State}
                onChange={(e)=> settxtBX_State}
                />    {/* State/ Province Loctaion */}

                <Text_Box 
                labelText="City"
                value={txtBX_City}
                onChange={(e)=> settxtBX_City}
                />    {/* City Location*/}

                <Text_Box 
                labelText="County"
                value={txtBX_County}
                onChange={(e)=> settxtBX_County}
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