
import "../../components/components_styles.css"
import React, { useState } from "react";
import T_Navbar from "../../components/Atoms/NavBar/T_Navbar";
import B_Navbar from "../../components/Atoms/NavBar/B_Navbar";
import Button_Component from "../../components/Atoms/Buttons/Button";
import Text_Box from "../../components/Atoms/Input_Container/Text_Box";
import Drop_Down from "../../components/Atoms/Drop_Down/Drop_Down";
import Check_Box from "../../components/Atoms/Check_Box/Check_Box";
import Adding_Form from "../../components/Molecules/Form/Adding_Form"
import Add_Gamer_Tag from "../../components/Molecules/Gamer_Tag/Add_Gamer"

const Creators_SignUp = () => {
  
  const [gamerTags, setGamerTags] = useState([]); // Holds the gamer tags added through Add_Gamer_Tag

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission, for example, save the gamerTags to the server
    console.log('Form Submitted:', gamerTags);
  };

  return (
    <div className="creator-signup-page">
    

      <Adding_Form onSubmit={handleFormSubmit}>
        {/* Passing the Add_Gamer_Tag as a child component */}
        <Add_Gamer_Tag />
      </Adding_Form>
    </div>
  );
};

export default Creators_SignUp;