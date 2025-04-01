import React from "react";
import T_Navbar from "../../components/Atoms/NavBar/T_Navbar";
import B_Navbar from "../../components/Atoms/NavBar/B_Navbar";
import L_Navbar from "../../components/Atoms/NavBar/L_Navbar";
import Drop_Down from "../../components/Atoms/Drop_Down/Drop_Down";
import Text_Box from "../../components/Atoms/Input_Container/Text_Box";

const Games_Page = () => {
    const T_Links = [
        { label: "Home", path: "/" },
        { label: "About", path: "/info/About" },
        { label: "Log In", path:"/auth/Login_Page"}
    ];
    const L_Links = [
        {label:"",path:""},
        {label:"",path:""},
{ label: "Gran Turismo", path:"/games/GT"},
// { label: "HotWheels", path:"/Hotwheels"},
// { label: "Lego2K Drive", path:"Lego2K_Drive"},
// { label: "Minecraft", path:"Minecraft"},
{ label: "PGA Tour 2K", path:"/games/PGA2K"},
// { label: "Fortnite", path: "Fortnite"},
// { label: "Sims", path:"Sims"},
// { label: "Roblox", path:"Roblox"},
// { label: "Pokemon", path:"Pokemon"},
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
    return(
    <>
    <T_Navbar links = {T_Links}/>
    <L_Navbar links = {L_Links}/>
    <B_Navbar links = {B_Links}/>


    </>
    )
};
export default Games_Page;