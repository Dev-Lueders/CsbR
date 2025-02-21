// The Hiearchy for Clients
//  Guest
//  User
//  Moderator
//  Admin
//  Master
//  (A Member can be a User, Moderator, Admin, Master)

import T_Navbar from "../../../components/NavBar/T_Navbar";
import L_Navbar from "../../../components/NavBar/L_Navbar";
import B_Navbar from "../../../components/NavBar/B_Navbar";
import MediaContainer from "../../../components/Media_Content/Media_Container";
import Stats_Container from "../../../components/Stats_Content/Stats_Container";
import Main_Content from "../../../components/Main_Content/Main_Content";


const User_Page = () =>{
    const T_Links = [
        { label: "Signout", path: "/signout" },
         ];

      const L_Links = [
        { label: "Profile", path: "/Profile_Page" },
        { label: "Search", path: "/Search_Page" },
        { label: "Review", path: "/Review_Page" },
      ];

      const B_Links = [
        { path: "/contact", label: "Contact Us" },
        { path: "/help", label: "Help" },
        { path: "/about", label: "About" },
        { path: "/support", label: "Support" },
        { path: "/legal", label: "Legal" },
      ];
   
      return(

<>
<T_Navbar links={T_Links}/>
<L_Navbar links={L_Links}/>
<B_Navbar links={B_Links}/>
<Main_Content/>
<MediaContainer/>
<Stats_Container/>
</>
    )
};

export default User_Page;