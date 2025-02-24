

import React, { useState } from "react";
import T_Navbar from "../../components/NavBar/T_Navbar";
import B_Navbar from "../../components/NavBar/B_Navbar";
import Button_Component from "../../components/Buttons/Button";
import Text_Box from "../../components/Input_Container/Text_Box";
import Drop_Down from "../../components/Drop_Down/Drop_Down";
import Check_Box from "../../components/Check_Box/Check_Box";

const Creators_SignUp = () => {

const [GT1, setGT1] = useState("");
const [GT2, setGT2] = useState("");
const [GT3, setGT3] = useState("");
const [GT4, setGT4] = useState("");
const [GT5, setGT5] = useState("");
const [About_You, setAbout_You] = useState("");

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

  const Drop_Down_Options = [
    { label: "Game System", value: "" },
    { label: "PlayStation 3", value: "PS3" },
    { label: "Playstation 4", value: "PS4" },
    { label: "Playstation 5", value: "PS5" },
    { label: "Xbox", value:"Xbox"},
    { label: "Xbox One", value:"Xbox1"},
    {label:"Xbox 360", value:"Xbox360"},
    {label:"Steam", value:"Steam"}
  ];

  const Drop_Down_Games_Options = [
    {label: "PGA Tour 2K19", value:"PGA2K19"},
    {label: "PGA Tour 2K21", value:"PGA2K21"},
    {label: "PGA Tour 2K23", value:"PGA2K23"},
    {label: "PGA Tour 2K25", value:"PGA2K25"},
    {label: "HotWheels", value:"HotWheels"},
    {label: "Lego Drive 2K", value:"LegoDrive2K"},
    {label:"Gran Turismo 7", value:"GT7"}


  ];

  return (
    <>
      <T_Navbar links={T_Links} />
      
      {/* Wrapper for Layout */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", marginTop: "2rem" }}>
        <br/>
        <br/>
      <h2>CREATORS SIGN UP PAGE</h2>

      <form>
      {/* ------------------------------------------------------------- */}
        {/* Text Box */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>        
        <Text_Box
          id="GT1"
          labelText="Gamer Tag #1:"
          placeholderText="Enter Gamer Tag #1"
          value={GT1}
          onChange={(e) => setGT1(e.target.value)}
          maxLength={15}
          containerStyle={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          inputStyle={{ width: "200px", padding: "10px" }}
          labelStyle={{ fontWeight: "bold" }}
        />
         <Check_Box label="Add Another Tag"/>
        </div>
        <Drop_Down
          id="DDGT1"
          label="System for Gamer Tag #1" 
          options={Drop_Down_Options} 
          onChange={(value) => console.log("Selected:", value)} 
          containerStyle={{ display: "flex", flexDirection: "column", alignItems: "center" }}
          selectStyle={{ width: "200px" }}/>

        <Drop_Down
          id="DDGM1"
          label="Game for Gamer Tag #1" 
          options={Drop_Down_Games_Options} 
          onChange={(value) => console.log("Selected:", value)} 
          containerStyle={{ display: "flex", flexDirection: "column", alignItems: "center" }}
          selectStyle={{ width: "200px" }}/>
{/* ------------------------------------------------------------------- */}
<div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
         <Text_Box
          id="GT2"
          labelText="Gamer Tag #2"
          placeholderText="Enter Gamer Tag #2"
          value={GT2}
          onChange={(e) => setGT2(e.target.value)}
          maxLength={15}
          containerStyle={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          inputStyle={{ width: "200px", padding: "10px" }}
          labelStyle={{ fontWeight: "bold" }}
        />
        
        <Check_Box label="Add Another Tag"/>
</div>
        <Drop_Down
          id="DDGT2"
          label="System for Gamer Tag #2" 
          options={Drop_Down_Options} 
          onChange={(value) => console.log("Selected:", value)} 
          containerStyle={{ display: "flex", flexDirection: "column", alignItems: "center" }}
          selectStyle={{ width: "200px" }}/>

        <Drop_Down
          id="DDGM2"
          label="Game for Gamer Tag #2" 
          options={Drop_Down_Games_Options} 
          onChange={(value) => console.log("Selected:", value)} 
          containerStyle={{ display: "flex", flexDirection: "column", alignItems: "center" }}
          selectStyle={{ width: "200px" }}/>
{/* ------------------------------------------------------------------- */}
<div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Text_Box
          id="GT3"
          labelText="Gamer Tag #3"
          placeholderText="Enter Gamer Tag #3"
          value={GT3}
          onChange={(e) => setGT3(e.target.value)}
          maxLength={15}
          containerStyle={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          inputStyle={{ width: "200px", padding: "10px" }}
          labelStyle={{ fontWeight: "bold" }}
        />
        <Check_Box label="Add Another Tag"/>
</div>
        <Drop_Down
          id="DDGT3"
          label="System for Gamer Tag #3" 
          options={Drop_Down_Options} 
          onChange={(value) => console.log("Selected:", value)} 
          containerStyle={{ display: "flex", flexDirection: "column", alignItems: "center" }}
          selectStyle={{ width: "200px" }}/>

        <Drop_Down
          id="DDGM3"
          label="Game for Gamer Tag #3" 
          options={Drop_Down_Games_Options} 
          onChange={(value) => console.log("Selected:", value)} 
          containerStyle={{ display: "flex", flexDirection: "column", alignItems: "center" }}
          selectStyle={{ width: "200px" }}/>
{/* ------------------------------------------------------------------- */}
<div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Text_Box
          id="GT4"
          labelText="Gamer Tag #4"
          placeholderText="Enter Gamer Tag #4"
          value={GT4}
          onChange={(e) => setGT4(e.target.value)}
          maxLength={15}
          containerStyle={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          inputStyle={{ width: "200px", padding: "10px" }}
          labelStyle={{ fontWeight: "bold" }}
        />
        <Check_Box label="Add Another Tag"/>
</div>
        <Drop_Down
          id="DDGT4"
          label="System for Gamer Tag #4" 
          options={Drop_Down_Options} 
          onChange={(value) => console.log("Selected:", value)} 
          containerStyle={{ display: "flex", flexDirection: "column", alignItems: "center" }}
          selectStyle={{ width: "200px" }}/>

        <Drop_Down
          id="DDGM4"
          label="Game for Gamer Tag #4" 
          options={Drop_Down_Games_Options} 
          onChange={(value) => console.log("Selected:", value)} 
          containerStyle={{ display: "flex", flexDirection: "column", alignItems: "center" }}
          selectStyle={{ width: "200px" }}/>
{/* ------------------------------------------------------------------- */}
<div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Text_Box
          id="GT5"
          labelText="Gamer Tag #5"
          placeholderText="Enter Gamer Tag #5"
          value={GT5}
          onChange={(e) => setGT5(e.target.value)}
          maxLength={15}
          containerStyle={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          inputStyle={{ width: "200px", padding: "10px" }}
          labelStyle={{ fontWeight: "bold" }}
        />
</div>
        <Drop_Down
          id="DDGT5"
          label="System for Gamer Tag #5" 
          options={Drop_Down_Options} 
          onChange={(value) => console.log("Selected:", value)} 
          containerStyle={{ display: "flex", flexDirection: "column", alignItems: "center" }}
          selectStyle={{ width: "200px" }}/>

        <Drop_Down
          id="DDGM5"
          label="Game for Gamer Tag #5" 
          options={Drop_Down_Games_Options} 
          onChange={(value) => console.log("Selected:", value)} 
          containerStyle={{ display: "flex", flexDirection: "column", alignItems: "center" }}
          selectStyle={{ width: "200px" }}/>
{/* ------------------------------------------------------------------- */}


        <Text_Box
          id="About_Me"
          labelText="About You"
          placeholderText="About You"
          value={About_You}
          onChange={(e) => setAbout_You(e.target.value)}
          maxLength={400}
          containerStyle={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          inputStyle={{ width: "200px", padding: "10px" }}
          labelStyle={{ fontWeight: "bold" }}
        />
</form>

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

export default Creators_SignUp;