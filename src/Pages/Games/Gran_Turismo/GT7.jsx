import React from "react";
import T_Navbar from "../../components/NavBar/T_Navbar";
import B_Navbar from "../../components/NavBar/B_Navbar";

const GT7 = () =>{
const T_Links = [
    {label:"Home", path:"/"},
    {label:"Login", path:"Login_Page"},
    
];
const B_Links = [
    { path: "/signup/SignUp_Page", label: "Signup" },
    { path: "/info/Contact", label: "Contact Us" },
    { path: "/info/About", label: "About" },
    { path: "/info/Support", label: "Support" },
    { path: "/info/Legal", label: "Legal" },
    { path: "/info/ReadMe", label: "ReadMe Info"},
];

    return(
        <>
<T_Navbar links={T_Links}/>

<B_Navbar links={B_Links}/>
        </>
    )
};
export default GT7;