import React from "react";
import T_Navbar from "../../../components/NavBar/T_Navbar";
import B_Navbar from "../../../components/NavBar/B_Navbar";

const PGA2K = () => {
    const T_Links = [
        { label: "Home", path: "/" },
        { label: "About", path: "/About" },
        { label: "Log In", path:"/Login_Page"}
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
        <T_Navbar links={T_Links}/>
        
        <B_Navbar links={B_Links}/>

        
        </>
    )

}
export default PGA2K;