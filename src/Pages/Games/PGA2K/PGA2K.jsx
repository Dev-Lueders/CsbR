import React from "react";
import T_Navbar from "../../../components/NavBar/T_Navbar";
import B_Navbar from "../../../components/NavBar/B_Navbar";
import L_Navbar from "../../../components/NavBar/L_Navbar";
import Stats_Container from "../../../components/Stats_Content/Stats_Container";
import Main_Content from "../../../components/Main_Content/Main_Container";
import Media_Container from "../../../components/Media_Content/Media_Container";
import Drop_Down from "../../../components/Drop_Down/Drop_Down";

const PGA2K = () => {
    const T_Links = [
        { label: "Home", path: "/" },
        { label: "About", path: "/About" },
        { label: "Log In", path:"/Login_Page"}
      ];

    const L_Links= [
        { label:"", path:""},
        { label:"", path:""},
        { label: "2K23 Search", path: "/Search_Page_PGA2K23"},
        { label: "2K23 Add Course", path: "/PGA2K23_C_Long"},
        { label: "2K23 Add Review", path: "/PGA2K23_R_Long"},
        
        { label: "2K25 Search", path: "/Search_Page_PGA2K25"},
        
    ];
      const B_Links = [
        { path: "/SignUp_Page", label: "Signup" },
        { path: "/Contact", label: "Contact Us" },
        { path: "/Help", label: "Help" },
        { path: "/About", label: "About" },
        { path: "/Support", label: "Support" },
        { path: "/Legal", label: "Legal" },
        { path: "/ReadMe", label: "ReadMe Info"},
      ];


    //   const  navigate = useNavigate();
    //   const Drop_Course = [
    //     {value: "/PGA2K23_C_Long", label:"Course Long Form"},
    //     {value: "/PGA2K23_C_Short", label:"Course Short Form"},
    //     {value: "/PGA2K23_C_Custom", label:"Course Custom Form"},
    //     ];
//-----------------------UNCOMMENT WHEN PAGES ARE DONE-------------------
    //    const Drop_Review = [
    //     {value: "/PGA2K23_R_Long", label:"Review Long Form"},
    //     {value: "/PGA2K23_R_Short", label:"Review Short Form"},
    //     {value: "/PGA2K23_R_Custom", label:"Review Custom Form"},
    //   ];
    //   const handleSelect = (selectedValue) => { navigate(selectedValue)};

    return(
        <>
        <T_Navbar links={T_Links}/>
        <L_Navbar links={L_Links}/>
        <Stats_Container/>
        <Main_Content>
        {/* <Drop_Down
                options={Drop_Course}
                label="Course Forms"
                onSelect={handleSelect}        
        > */}   {/*uncomment when content pages are done */}
         {/* <Drop_Down 
                options={Drop_Review} 
                label="Review Forms"
                onSelect={handleSelect}/> */}
                
        </Main_Content>
        <Media_Container/>
        <B_Navbar links={B_Links}/>

        
        </>
    )

}
export default PGA2K;