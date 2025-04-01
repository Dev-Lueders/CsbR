import React from "react";

import { useState } from "react";
import Text_Box from "../../components/Atoms/Input_Container/Text_Box";
import Button_btn from "../../components/Atoms/Buttons/Button";
import Check_Box from "../../components/Atoms/Check_Box/Check_Box";
import B_Navbar from "../../components/Atoms/NavBar/B_Navbar";

const Login_Page = () => {
const [username, setUsername] = useState("");
const [password,setPassword] = useState("");
const B_Links= [
        {label: "Home", path:"/"},
        {label: "About", path:"/About"},
        {label: "Legal", path:"/Legal_Page"},
        {label: "Contact Us", path: "/Contact"},
        {label: "SignUp", path:"/SignUp_Page"},
        {label: "Support", path:"/Support"}
]
        
return(
<>
<form>
<Text_Box 
id="username"
labelText="User"
placeholder="Enter Username"
type="text"
onChange={(e) => setUsername(e.target.value)}
label = "Username"
containerStyle={{ display: "flex", flexDirection: "column", alignItems: "center" }}
labelStyle={{fontWeight: "bold"}}
/>
<Text_Box
          id="Password_id"
          labelText="Password:"
          placeholderText="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          maxLength={36}
          containerStyle={{ display: "flex", flexDirection: "column", alignItems: "center" }}
         labelStyle={{ fontWeight: "bold" }}
        />

<Check_Box
id="ShowPassword"
label= "Click here to show your password"
/>
<Check_Box
id="Rember_Me"
label="Select here to Remember Me"
/>
     {/* Button */}
     <Button_btn 
          label="Login" 
          variant="success" 
          containerStyle={{ marginTop: "10px" }} 
          style={{ padding: "10px 20px" }} 
        />
</form>
<B_Navbar links = {B_Links}/>
</>
)}
export default Login_Page;