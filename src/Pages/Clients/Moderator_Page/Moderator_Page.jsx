//*********************************THIS IS THE MODERATOR PAGE*****************************************/

// The Hiearchy for Clients
//  Guest
//  User
//  Moderator
//  Admin
//  Master
//  (A Member can be a User, Moderator, Admin, Master)


//Permissions
// Review flagged material
// very limited access to customer records... no address, phone number, or email
// access to all content
// ability to review content and be on the council
// same permissions as a creator
// can flag material but cannot review the material they flagged
// 
import React from 'react'
import Page_Frame from '../../../components/Organisim/Page_Frame';

const Moderator_Page = () => {
return (
  <>
    <Page_Frame>
      <h3>This is the Moderators Page</h3>
    </Page_Frame>
  </>
);


}
export default Moderator_Page;
