//*********************************THIS IS THE ADMIN PAGE*****************************************/
//
// The Hiearchy for Clients
//  Guest
//  Creator
//  Moderator
//  Admin
//  Master
//  (A Member can be a User, Moderator, Admin, Master)
// Permissions
// Review flagged material
// access to customer records
// access to all content
// ability to archive/(delete) content,
// ability to suspend or ban a creator or member providing the coucil agrees
// ability to search personal records by personal data
// ability to send mass messages to memebers and creators
//  
import React from "react";
import Page_Frame from "../../../components/Organisim/Page_Frame"
// import T_Navbar from "../../../components/Atoms/NavBar/T_Navbar";
// import L_Navbar from "../../../components/Atoms/NavBar/L_Navbar";
// import B_Navbar from "../../../components/Atoms/NavBar/B_Navbar";
// import Text_Box from "../../../components/Atoms/Input_Container/Text_Box";
// import Drop_Down from "../../../components/Atoms/Drop_Down/Drop_Down";
// import Button_btn from "../../../components/Atoms/Buttons/Button";
// import Radio_btn from "../../../components/Atoms/Buttons/Radio";

const Admin_Page = () => {
return (
  <>
    <Page_Frame>
      <h3>This is the Admin Page</h3>
    </Page_Frame>
  </>
);


}
export default Admin_Page;
