//REFACTOR so that the text fields are built out using an array  then filter in the fields

// import React, { useState } from "react";
// import Adding_Form from "../../components/Molecules/Form/Adding_Form";
// import Add_Gamer_Tag from "../../components/Molecules/Gamer_Tag/Add_Gamer";
// import Text_Box from "../../components/Atoms/Input_Container/Text_Box";
// import Check_Box from "../../components/Atoms/Check_Box/Check_Box";

// const Creators_SignUp = () => {
//   const [creatorData, SetCreatorData] = useState({
//     creatorBio: "",
//     favoriteGames: "",
//     platform: "",
//     PreferedUGC: "",
//     ChannelURL: "",
//     ChannelName:"",
//     gamerTags: [],
//   });
// };

// export default Creators_SignUp;
import Text_Box from "../../components/Atoms/Input_Container/Text_Box";
import "../../Pages/pages_styles.css"
import React from "react";
import Adding_Form from "../../components/Molecules/Form/Adding_Form";
import Check_Box from "../../components/Atoms/Check_Box/Check_Box";
import Button_btn from "../../components/Atoms/Buttons/Button";

const SignUp_Page = () => {

return (
  <>
    <Adding_Form>
      <Text_Box
        labelText="Username"
        placeholder="Enter Username"
        type="text"
        name="username"
        id="username"
        required
      />
      <Text_Box
        labelText="Email"
        placeholder="Enter Email"
        type="email"
        name="email"
        id="email"
        required
      />
      <Text_Box
        labelText="Password"
        placeholder="Enter Password"
        type="password"
        name="password"
        id="password"
        required
      />
      <Text_Box
        labelText="Confirm Password"
        placeholder="Confirm Password"
        type="password"
        name="confirm_password"
        id="confirm_password"
        required
      />
      <Text_Box
        labelText="First Name"
        placeholder="Enter First Name"
        type="text"
        name="first_name"
        id="first_name"
        required
      />
      <Text_Box
        labelText="Last Name"
        placeholder="Enter Last Name"
        type="text"
        name="last_name"
        id="last_name"
        required
      />
      <Text_Box
        labelText="Phone Number"
        placeholder="Enter Phone Number"
        type="tel"
        name="phone_number"
        id="phone_number"
        required
      />

      <Text_Box
        labelText="Address"
        placeholder="Enter Address"
        type="text"
        name="address"
        id="address"
        required
      />
      <Text_Box
        labelText="City"
        placeholder="Enter City"
        type="text"
        name="city"
        id="city"
        required
      />
      <Text_Box
        labelText="State"
        placeholder="Enter State"
        type="text"
        name="state"
        id="state"
        required
      />
      <Text_Box
        labelText="Zip Code"
        placeholder="Enter Zip Code"
        type="text"
        name="zip_code"
        id="zip_code"
        required
      />
      <Text_Box
        labelText="Country"
        placeholder="Enter Country"
        type="text"
        name="country"
        id="country"
        required
      />
      <Text_Box
        labelText="Profile Picture"
        placeholder="Enter Profile Picture"
        type="file"
        name="profile_picture"
        id="profile_picture"
        required
      />

      <Button_btn label="Creator Profile" navigateTo="/Creators_SignUp">
        Creators Profile
      </Button_btn>

      <Button_btn label="Profile SignUp" navigateTo="/Profile_SignUp">
        Personal Profile
      </Button_btn>
      <Check_Box
        label="I agree to the Terms and Conditions"
        name="terms"
        id="terms"
        required
      />

    </Adding_Form>
  </>
);

}

export default SignUp_Page;
