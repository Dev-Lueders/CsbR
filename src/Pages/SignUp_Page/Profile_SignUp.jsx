import React, { useState } from "react";
import Text_Box from "../../components/Atoms/Input_Container/Text_Box";
import Check_Box from "../../components/Atoms/Check_Box/Check_Box";
import Generic_Form from "../../components/Molecules/Form/Generic_Form";
const Profile_SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    userName: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { password, confirmPassword, userName } = formData;

    if (!userName || !password || password !== confirmPassword) {
      alert("Passwords don't match or username is empty.");
      return;
    }

    localStorage.setItem(`user_${userName}`, JSON.stringify(formData));
    alert("SignUp successful! You can now log in");
  };

  return (
    <>
      <Generic_Form onSubmit={handleSubmit} isVisible={true}>
        /
        {/* 
        <Text_Box
          id="userName"
          label="userName"
          placeholder="What do you want to be known as on CSBR (site name)"
          value={formData.userName}
          onChange={handleChange}
        />

        <Text_Box
          id="password"
          label="password"
          placeholder="password"
          value={formData.password}
          type={"password"}
          onChange={handleChange}
        /> */}
        {/* <Text_Box
          id="confirmPassword"
          label="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          type={"password"}
          onChange={handleChange}
        />

        <Check_Box
          id="showPassword"
          label=" Click here to show your password"
        /> */}
      </Generic_Form>
    </>
  );
};

export default Profile_SignUp;
