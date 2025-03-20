import Text_Box from "../../components/Atoms/Input_Container/Text_Box";
import "../../Pages/pages_styles.css"
import React from "react";
import Adding_Form from "../../components/Molecules/Form/Adding_Form";
import Check_Box from "../../components/Atoms/Check_Box/Check_Box";
import Button_btn from "../../components/Atoms/Buttons/Button";



const SignUp_Page = () => {
  
    
return(
<>
<Adding_Form>
  
 
  <Text_Box
    labelText="Username"
    placeholder="Enter Username"
    type="text"
    name="username"
    id="username"
    required/>
  <Text_Box
    labelText="Email"
    placeholder="Enter Email"
    type="email"
    name="email"
    id="email"
    required/>
  <Text_Box
    labelText="Password"
    placeholder="Enter Password"
    type="password"
    name="password"
    id="password"
    required/>
  <Text_Box
    labelText="Confirm Password"
    placeholder="Confirm Password"
    type="password"
    name="confirm_password"
    id="confirm_password"
    required/>
  <Text_Box
    labelText="First Name"
    placeholder="Enter First Name"
    type="text"
    name="first_name"
    id="first_name"
    required/>  
  <Text_Box
    labelText="Last Name"
    placeholder="Enter Last Name"
    type="text"
    name="last_name"
    id="last_name"
    required/>
  <Text_Box
    labelText="Phone Number"
    placeholder="Enter Phone Number"
    type="tel"
    name="phone_number"
    id="phone_number"
    required/>
  
  <Button_btn navigateTo="/Creators_SignUp">
  Creators Profile
  </Button_btn>
  
  <Button_btn navigateTo="/Profile_SignUp">
  Personal Profile
  </Button_btn>

  <Text_Box
    labelText="Address"
    placeholder="Enter Address"
    type="text"
    name="address"
    id="address"
    required/>
  <Text_Box
    labelText="City"
    placeholder="Enter City"
    type="text"
    name="city"
    id="city"
    required/>
  <Text_Box
    labelText="State"
    placeholder="Enter State"
    type="text"
    name="state"
    id="state"
    required/>
  <Text_Box
    labelText="Zip Code"
    placeholder="Enter Zip Code"
    type="text"
    name="zip_code"
    id="zip_code"
    required/>
  <Text_Box
    labelText="Country"
    placeholder="Enter Country"
    type="text"
    name="country"
    id="country"
    required/>
  <Text_Box
    labelText="Profile Picture"
    placeholder="Enter Profile Picture"
    type="file"
    name="profile_picture"
    id="profile_picture"
    required/>
  <Text_Box
    labelText="Bio"
    placeholder="Enter Bio"
    type="text"
    name="bio"
    id="bio"
    required/>
  <Check_Box
    label="I agree to the Terms and Conditions"
    name="terms"
    id="terms"
    required/>
  <Check_Box
    label="Playstation Series"
    name="Game_system"
    id="Playstation"
    required/>
  <Check_Box
    label="Xbox Series"
    name="Game_system"
    id="Xbox"
    required/>
  <Check_Box
    label="PC"
    name="Game_system"
    id="PC"
    required/>
  <Check_Box
    label="Nintendo Systems"
    name="Game_system"
    id="Nintendo"
    required/>
  <Check_Box
    label="Steam"
    name="Game_system"
    id="Steam"
    required/>
</Adding_Form>

</>

)


}

export default SignUp_Page;