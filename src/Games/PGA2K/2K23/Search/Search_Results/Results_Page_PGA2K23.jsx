import WorldMap from "../../../../../components/World_Map/World_Map.jsx";
import T_Navbar from "../../../../../components/NavBar/T_Navbar.jsx"
import B_Navbar from "../../../../../components/NavBar/B_Navbar.jsx";
import MediaContainer from "../../../../../components/Media_Content/Media_Container.jsx";
import Stats_Container from "../../../../../components/Stats_Content/Stats_Container.jsx";
import Main_Content from "../../../../../components/Main_Content/Main_Content.jsx";

const Results_Page_PGA2K23 = () => {
    const B_NavLink = [
        { path: "/signup", label: "Signup" },
        { path: "/contact", label: "Contact Us" },
        { path: "/help", label: "Help" },
        { path: "/about", label: "About" },
        { path: "/support", label: "Support" },
        { path: "/legal", label: "Legal" }
    ];

    const T_NavLink = [
        {path:"/login", label: "Login"},
        {path:"/profile", label: "Profile"},
        {path:"/review", label: "Add Review"},
        {path:"/course", label: "Add Course"}
    ];

    
        // Define your desired custom styles for this page
        const mc_props = {
          position: 'absolute',
          top: '6.8vh',
          bottom: '7vh',
          right: 'calc(49.75vw - 10vw)',
          width: 'calc(51vw - 10vw)',
          height: '86.2vh',
          border: '2px solid black',
          padding: '1vw',
          boxShadow: '10px 15px 5px rgba(211, 211, 211, 0.6)',
          backgroundColor: '#fff',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center'
        };
      
return(
<>
    <T_Navbar links= {T_NavLink}/>
    <MediaContainer>
        <WorldMap containerId ="Media_map"/>
    </MediaContainer>
    <Main_Content MC_Style = {mc_props}/>
    <Stats_Container/>

    <B_Navbar links={B_NavLink}/>
    </>
)
}
export default Results_Page_PGA2K23;