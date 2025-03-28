// The Hiearchy for Clients
//  Guest
//  User
//  Moderator
//  Admin
//  Master
import L_Navbar from "../../components/Atoms/NavBar/L_Navbar";

const Client_Front_Page = () => {
  const L_Links = [
    { path: "/Guest_Page", label: "Guest Page" },
    { path: "/User_Page", label: "Users Page" },
    { path: "/Moderator_Page", label: "Moderators Page" },
    { path: "/Admin_Page", label: "Admins Page" },
    { path: "/Master_Page", label: "Masters Page" },
    { path: "/Creator_Profile_Page", label: "Creators Page" },
    { path: "/Profile_Page", label: "Profile Page" },
    { path: "/Signup_Page", label: "SignUp Page" },
    { path: "/Member_Page", label: "Members Page" },
    { path: "/Login_Page", label: "Login" },
    { path: "/Component_Testing", label: "Test Page" },
  ];

  return (
    <>
      <L_Navbar links={L_Links} />
    </>
  );
};
export default Client_Front_Page;
