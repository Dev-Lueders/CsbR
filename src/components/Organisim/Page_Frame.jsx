import React from "react";
import T_Navbar from "../Atoms/NavBar/T_Navbar";
import L_Navbar from "../Atoms/NavBar/L_Navbar";
import B_Navbar from "../Atoms/NavBar/B_Navbar";
import Main_Container from "../Atoms/Main_Content/Main_Container";
import Stats_Container from "../Atoms/Stats_Content/Stats_Container";
import Media_Container from "../Atoms/Media_Content/Media_Container";

const Page_Frame = () =>{

return(
<>

<T_Navbar/>
<L_Navbar/>
<Main_Container/>
<Media_Container/>
<Stats_Container/>

<B_Navbar/>



</>
)
};
export default Page_Frame;