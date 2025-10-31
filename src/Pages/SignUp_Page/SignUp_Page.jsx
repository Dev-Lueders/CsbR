//  BEFORE GOING LIVE REMOVE THE ROLE ASSIGN

import React from "react";
import "../../Pages/pages_styles.css";
import { useSelector, useDispatch } from "react-redux";
import {
  updateField,
  resetForm,
} from "../../redux/features/signup/signupSlice";
import axios from "axios";

import Text_Box from "../../components/Atoms/Input_Container/Text_Box";
import Generic_Form from "../../components/Molecules/Form/Generic_Form";
import Check_Box from "../../components/Atoms/Check_Box/Check_Box";
import Button_btn from "../../components/Atoms/Buttons/Button";
import Calendar from "../../components/Atoms/Input_Container/Calendar";

const masterCsbR_Client_Tag = "MasterMiyoto";

const SignUp_Page = () => {
  const formData = useSelector((state) => state.signup || {});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { id, value, type, checked, files } = e.target;
    const addressFields = [
      "street",
      "apartNo",
      "city",
      "state",
      "zip_code",
      "country",
    ];

    if (type === "checkbox") {
      dispatch(updateField({ key: id, value: checked }));
    } else if (type === "file") {
      dispatch(updateField({ key: id, value: files[0] }));
    } else if (addressFields.includes(id)) {
      dispatch(updateField({ key: `address.${id}`, value }));
    } else if (id === "CsbR_Client_Tag") {
      const assignRole = value === masterCsbR_Client_Tag ? "master" : "creator";
      dispatch(updateField({ key: "CsbR_Client_Tag", value }));
      dispatch(updateField({ key: "role", value: assignRole }));
    } else {
      dispatch(updateField({ key: id, value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = [
      "CsbR_Client_Tag",
      "email",
      "password",
      "confirm_password",
    ];
    for (let field of requiredFields) {
      if (!formData[field]) {
        alert(`missing required field: ${field}`);
        return;
      }
    }
    if (!formData.terms) {
      alert(
        "Read, Accept, and understand Terms & Conditions, you shall. For selecting Not to accept, is the journey to the Dark Side. "
      );
      return;
    }
    localStorage.setItem("signupFormData", JSON.stringify(formData));

    try {
      const response = await axios.post(
        "http://localhost:5000/api/signup",
        formData
      );
      if (response.data.success) {
        alert("Signup successful");
        dispatch(resetForm());
      } else {
        alert("Signup failed" + (response.data.message || "Unknown error"));
      }
    } catch (err) {
      console.error("Frontend Error:", err.response?.data || err.message);
      alert(
        "Something went wrong" + (err.response?.data?.error || err.message)
      );
    }
  };
  return (
    <>
      <Generic_Form onSubmit={handleSubmit}>
        <Text_Box
          placeholderText="Enter a Unique Id"
          id="CsbR_Client_Tag"
          labelText="CsbR_Client_Tag"
          value={formData.CsbR_Client_Tag || ""}
          onChange={handleChange}
        />
        <Text_Box
          placeholderText="Email"
          id="email"
          labelText="email"
          value={formData.email || ""}
          onChange={handleChange}
        />
        <Text_Box
          placeholderText="Password"
          id="password"
          labelText="Password"
          value={formData.password || ""}
          onChange={handleChange}
        />
        <Text_Box
          placeholderText="Confirm Password"
          id="confirm_password"
          labelText="Confirm Password"
          value={formData.confirm_password || ""}
          onChange={handleChange}
        />
        <Text_Box
          placeholderText="First Name"
          id="first_name"
          labelText="First Name"
          value={formData.first_name || ""}
          onChange={handleChange}
        />
        <Text_Box
          placeholderText="Last Name"
          id="last_name"
          labelText="Last Name"
          value={formData.last_name || ""}
          onChange={handleChange}
        />
        <Text_Box
          placeholderText="Phone Number"
          id="phone_number"
          labelText="Phone Number"
          value={formData.phone_number || ""}
          onChange={handleChange}
        />
        <Text_Box
          placeholderText="Street Number"
          id="street"
          labelText="street"
          value={formData.address.street || ""}
          onChange={handleChange}
        />
        <Text_Box
          placeholderText="Apartment/Unit number"
          id="apartNo"
          labelText="apartNo"
          value={formData.address.apartNo || ""}
          onChange={handleChange}
        />
        <Text_Box
          placeholderText="City"
          id="city"
          labelText="city"
          value={formData.address.city || ""}
          onChange={handleChange}
        />
        <Text_Box
          placeholderText="State"
          id="state"
          labelText="state"
          value={formData.address.state || ""}
          onChange={handleChange}
        />
        <Text_Box
          placeholderText="Zip Code"
          id="zip_code"
          labelText="Zip Code"
          value={formData.address.zip_code || ""}
          onChange={handleChange}
        />
        <Text_Box
          placeholderText="Country"
          id="country"
          labelText="Country"
          value={formData.address.country || ""}
          onChange={handleChange}
        />

        <Calendar id="dob" value={formData.dob || ""} onChange={handleChange} />

        <label htmlFor="profile_picture"> Upload Profile Picture: </label>
        <input
          type="file"
          id="profile_picture"
          accept="image/*"
          onChange={handleChange}
        />

        <label htmlFor="role">Assign Role</label>
        <select id="role" value={formData.role} onChange={handleChange}>
          <option value="guest">Guest</option>
          <option value="creator">Creator</option>
          <option value="member">Member</option>
          <option value="moderator">Moderator</option>
          <option value="admin">Admin</option>
          <option value="master">Master</option>
        </select>

        <Check_Box
          label="I agree to the Terms and Conditions"
          id="terms"
          onChange={handleChange}
          checked={formData.terms}
        ></Check_Box>
      </Generic_Form>
    </>
  );
};

export default SignUp_Page;
