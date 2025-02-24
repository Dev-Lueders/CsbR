import React, { useState } from "react";
import T_Navbar from "../../../components/NavBar/T_Navbar";
import B_Navbar from "../../../components/NavBar/B_Navbar";
import Button_Component from "../../../components/Buttons/Button";
import Text_Box from "../../../components/Input_Container/Text_Box";

const Creators_Page = () => {
  const T_Links = [
    { label: "Signout", path: "/signout" },
    { label: "Personal Profile", path: "/Profile_Page" },
    { label: "Home Page", path: "/Landing_Page" },
  ];

  const B_Links = [
    { path: "/signup", label: "Signup" },
    { path: "/contact", label: "Contact Us" },
    { path: "/help", label: "Help" },
    { path: "/about", label: "About" },
    { path: "/support", label: "Support" },
    { path: "/legal", label: "Legal" },
  ];

  const [username, setUsername] = useState("");

  return (
    <>
      <T_Navbar links={T_Links} />
      
      {/* Wrapper for Layout */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", marginTop: "2rem" }}>
        
        {/* Text Box */}
        <Text_Box
          id="username"
          labelText="Username:"
          placeholderText="Enter username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          maxLength={15}
          containerStyle={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          inputStyle={{ width: "200px", padding: "10px" }}
          labelStyle={{ fontWeight: "bold" }}
        />
         <Text_Box
          id="username"
          labelText="Username:"
          placeholderText="Enter username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          maxLength={15}
          containerStyle={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          inputStyle={{ width: "200px", padding: "10px" }}
          labelStyle={{ fontWeight: "bold" }}
        />
         <Text_Box
          id="username"
          labelText="Username:"
          placeholderText="Enter username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          maxLength={15}
          containerStyle={{ display: "flex", flexDirection: "column", alignItems: "center" }}
          inputStyle={{ width: "200px", padding: "10px" }}
          labelStyle={{ fontWeight: "bold" }}
        />
         <Text_Box
          id="username"
          labelText="Username:"
          placeholderText="Enter username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          maxLength={15}
          containerStyle={{ display: "flex", flexDirection: "column", alignItems: "center" }}
          inputStyle={{ width: "200px", padding: "10px" }}
          labelStyle={{ fontWeight: "bold" }}
        />
         <Text_Box
          id="username"
          labelText="Username:"
          placeholderText="Enter username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          maxLength={15}
          containerStyle={{ display: "flex", flexDirection: "column", alignItems: "center" }}
          inputStyle={{ width: "200px", padding: "10px" }}
          labelStyle={{ fontWeight: "bold" }}
        />
         <Text_Box
          id="username"
          labelText="Username:"
          placeholderText="Enter username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          maxLength={15}
          containerStyle={{ display: "flex", flexDirection: "column", alignItems: "center" }}
          inputStyle={{ width: "200px", padding: "10px" }}
          labelStyle={{ fontWeight: "bold" }}
        />

        {/* Button */}
        <Button_Component 
          label="Submit" 
          variant="success" 
          containerStyle={{ marginTop: "10px" }} 
          style={{ padding: "10px 20px" }} 
        />
      </div>

      <B_Navbar links={B_Links} />
    </>
  );
};

export default Creators_Page;