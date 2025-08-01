import "../../components/components_styles.css";
import React, { useState } from "react";
import T_Navbar from "../../components/Atoms/NavBar/T_Navbar";
import B_Navbar from "../../components/Atoms/NavBar/B_Navbar";
import Button_Component from "../../components/Atoms/Buttons/Button";
import Text_Box from "../../components/Atoms/Input_Container/Text_Box";
import Drop_Down from "../../components/Atoms/Drop_Down/Drop_Down";
import Check_Box from "../../components/Atoms/Check_Box/Check_Box";
import Adding_Form from "../../components/Molecules/Form/Adding_Form";
import Add_Gamer_Tag from "../../components/Molecules/Gamer_Tag/Add_Gamer";
import Add_Social_Tag from "../../components/Molecules/Social_Channels/Add_Social";

const Creators_SignUp = () => {
  const [gamerTags, setGamerTags] = useState([]); // Holds the gamer tags added through Add_Gamer_Tag
  const [formData, setFormData] = useState({
    creatorName: "",
    bio: "",
    favoriteGame: "",
  });
  const [GT_Indi, setGT_Indi] = useState("");
  const [selectedSystem, setSelectedSystem] = useState("");
  const [GT_Array, setGT_Array] = useState([]);
  const [socialLinks, setSocialLinks] = useState([]);

  const handleGT_IndiChange = (val) => setGT_Indi(val);
  const handleSystemChange = (val) => setSelectedSystem(val);

  const handleAddGT = () => {
    if (!GT_Indi || !selectedSystem) return;
    const newGT = {
      GT_Indi, 
      system: selectedSystem,
    }
  }


  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const creatorPayload = {
      ...formData,
      gamerTags,
      socialLinks,
    };
    // Handle the form submission, for example, save the gamerTags to the server
    console.log("Form Submitted:", creatorPayload);
  };

  return (
    <div className="creator-SignUp-page">
      <Adding_Form onSubmit={handleFormSubmit}>
        {/* Passing the Add_Gamer_Tag as a child component */}
        <Add_Gamer_Tag
          gamerTags={gamerTags}
          setGamerTags={setGamerTags}
          GT_Indi={GT_Indi}
          selectedSystem={selectedSystem}
          GT_Array={GT_Array}
          onGT_IndiChange={handleGT_IndiChange}
          onSystemChange={handleSystemChange}
          onAddGT={handleAddGT}
          onRemoveGT={handleRemoveGT}
          style={{
            gridColumn: "10/20",
            gridRow: "10/25",
            zIndex:10,
          }}
        />
        {/* <Add_Social_Tag socialLinks={socialLinks} setSocialLinks={setSocialLinks} /> */}
      </Adding_Form>
    </div>
  );
};

export default Creators_SignUp;
