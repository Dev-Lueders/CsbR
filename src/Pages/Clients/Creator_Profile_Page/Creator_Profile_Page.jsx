//*********************************THIS IS THE CREATOR PROFILE PAGE*****************************************/
//
//The  Hiearchy for Clients
//Guest
//Creator
//Moderator
//Admin
//Master

// Persmissions
// Upload content
// edit own content
// delete own content
// view metrics of ones content
// view and edit own profile
// Message other creators and members but the other member has to agree to recieving messages
// view other creators and member profiles by searching by the username or gamer tag names or by games they play  but not their real name
// view content uploaded by other creators and  members
// Make reviews of content uploaded by other creators and members
// engage and interact with others via chat board, comments, and other possible forums
// Earn Money from uploaded content after so many likes , views, or other metrics
// Earn Money from tips from other creators and members
// Earn badges/patches for your beach blanket
// Flag content for review
// Reporting for bad behavior


import Page_Frame from "../../../components/Organism/Page_Frame";

import Check_Box from "../../../components/Atoms/Check_Box/Check_Box";
import Text_Box from "../../../components/Atoms/Input_Container/Text_Box";
import Add_social_Tag from "../../../components/Molecules/Social_Channels/Add_Social";
const Creator_Profile_Page = () => {
return (
  <>
    <Page_Frame>
      
      
      <Check_Box label="Mobile" name="Mobile" id="mobile" />
      <Check_Box
        label="Playstation Series"
        name="Game_system"
        id="Playstation"
      />
      <Check_Box label="Xbox Series" name="Game_system" id="Xbox" />
      <Check_Box label="PC" name="Game_system" id="PC" />
      <Check_Box label="Nintendo Systems" name="Game_system" id="Nintendo" />
      <Check_Box label="Steam" name="Game_system" id="Steam" />
      <Text_Box
        labelText="Bio"
        placeholder="Enter Bio"
        type="text"
        name="bio"
        id="bio"
      />
    </Page_Frame>
  </>
);


}
export default Creator_Profile_Page;
