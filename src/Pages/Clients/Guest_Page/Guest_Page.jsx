//-------------------------THIS IS THE GUEST PAGE-----------------------//
//NOTES SPECIFICALLY FOR GUESTS
// The Hiearchy for Clients
//  Guest
//  User
//  Moderator
//  Admin
//  Master
//  (A Member can be a User, Moderator, Admin, Master)
// 
// 
// PERMISSIONS
// They can search content but only recieve text results don't have the ability to see the map for PGA2K
// Can not flag content to be reviewed
// Can not upload or write reviews
// Very limited funtionality
// Most of the searches have either videos or pictures

import react from "@vitejs/plugin-react-swc";
import T_Navbar from "../../../components/NavBar/T_Navbar";
import L_Navbar from "../../../components/NavBar/L_Navbar";
import B_Navbar from "../../../components/NavBar/B_Navbar";
import Text_Box from "../../../components/Input_Container/Text_Box";
import Drop_Down_Searchable from "../../../components/Drop_Down/Drop_Down_Searchable";
import Button_btn from "../../../components/Buttons/Button";
import Radio_btn from "../../../components/Buttons/Radio";

const Guest_Page = () => {
return(
<>
<h3>This is the Guest Page</h3>


</>

)


}
export default Guest_Page;
