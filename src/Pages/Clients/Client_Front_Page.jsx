// The Hiearchy for Clients
//  Guest
//  User
//  Moderator
//  Admin
//  Master
import L_Navbar from "../../components/Atoms/NavBar/L_Navbar";

const Client_Front_Page = () => {
  const L_Links = [
    { path: "/client/Guest_Page", label: "Guest Page" },
    { path: "/client/User_Page", label: "Users Page" },
    { path: "/client/Moderator_Page", label: "Moderators Page" },
    { path: "/client/Admin_Page", label: "Admins Page" },
    { path: "/client/Master_Page", label: "Masters Page" },
    { path: "/client/Creator_Profile_Page", label: "Creators Page" },
    { path: "/client/Profile_Page", label: "Profile Page" },
    { path: "/signup/Signup_Page", label: "SignUp Page" },
    { path: "/client/Member_Page", label: "Members Page" },
    { path: "/auth/Login_Page", label: "Login" },
    { path: "/Component_Testing", label: "Test Page" },
  ];

  return (
    <>
      <L_Navbar links={L_Links} />
    </>
  );
};
export default Client_Front_Page;
