import React from "react";
import T_Navbar from "../../components/Atoms/NavBar/T_Navbar";
import B_Navbar from "../../components/Atoms/NavBar/B_Navbar";

const GT7_Add_Content = () =>{
const T_Links = [
    {label:"Home", path:"/"},
    {label:"Login", path:"Login_Page"},
    
];
const B_Links = [
    { path: "/SignUp_Page", label: "Signup" },
    { path: "/Contact", label: "Contact Us" },
    { path: "/About", label: "About" },
    { path: "/Support", label: "Support" },
    { path: "/Legal", label: "Legal" },
    { path: "/ReadMe", label: "ReadMe Info"},
];

    return(
        <>
<T_Navbar links={T_Links}/>

<B_Navbar links={B_Links}/>
        </>
    )
};
export default GT7_Add_Content;