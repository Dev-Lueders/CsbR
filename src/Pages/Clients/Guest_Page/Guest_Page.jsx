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


import Page_Frame from "../../../components/Organisim/Page_Frame";
const Guest_Page = () => {
return (
  <>
    <Page_Frame>
      <h3>This is the Guest Page</h3>
    </Page_Frame>
  </>
);


}
export default Guest_Page;
