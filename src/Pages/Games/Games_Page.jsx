import React from "react";
import T_Navbar from "../../components/NavBar/T_Navbar";
import B_Navbar from "../../components/NavBar/B_Navbar";
import L_Navbar from "../../components/NavBar/L_Navbar";
import Drop_Down_Searchable from "../../components/Drop_Down/Drop_Down_Searchable";
import Text_Box from "../../components/Input_Container/Text_Box";

const Games_Page = () => {
    const T_Links = [
        { label: "Home", path: "/" },
        { label: "About", path: "/About" },
        { label: "Log In", path:"/Login_Page"}
    ];
    const L_Links = [
{ label: "Gran Turismo", path:"/GT"},
{ label: "HotWheels", path:"/Hotwheels"},
{ label: "Lego2K Drive", path:"Lego2K_Drive"},
{ label: "Minecraft", path:"Minecraft"},
{ label: "PGA Tour 2K", path:"PGA2K"},
{ label: "Fortnite", path: "Fortnite"},
{ label: "Sims", path:"Sims"},
{ label: "Roblox", path:"Roblox"},
{ label: "Pokemon", path:"Pokemon"},
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
    return(
    <>
    <T_Navbar links = {T_Links}/>
    <L_Navbar links = {L_Links}/>
    <B_Navbar links = {B_Links}/>


    </>
    )
};
export default Games_Page;