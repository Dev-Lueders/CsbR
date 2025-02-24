import T_Navbar from "../../components/NavBar/T_Navbar";
import B_Navbar from "../../components/NavBar/B_Navbar";
import Text_Box from "../../components/Input_Container/Text_Box";

import "../../Pages/pages_styles.css"
import { Form } from "react";
import React from "react";


const SignUp_Page = () => {
    const T_Links = [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        { label: "Contact", path: "/contact" },
      ];
    
      const B_Links = [
        { path: "/contact", label: "Contact Us" },
        { path: "/help", label: "Help" },
        { path: "/about", label: "About" },
        { path: "/support", label: "Support" },
        { path: "/legal", label: "Legal" },
        {path:"/ReadMe", label:"ReadMe Info"},
      ];
    
return(
<>
<T_Navbar links= {T_Links}/>

<B_Navbar links= {B_Links}/>
</>

)


}

export default SignUp_Page;