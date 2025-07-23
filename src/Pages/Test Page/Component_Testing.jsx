

import Adding_Form from '../../components/Molecules/Form/Adding_Form';

import "../../components/components_styles.css"
import T_Navbar from '../../components/Atoms/NavBar/T_Navbar';
import L_Navbar from '../../components/Atoms/NavBar/L_Navbar';
import B_Navbar from '../../components/Atoms/NavBar/B_Navbar';
import Main_Container from '../../components/Atoms/Main_Content/Main_Container';
import Stats_Container from '../../components/Atoms/Stats_Content/Stats_Container';
import Media_Container from '../../components/Atoms/Media_Content/Media_Container';
import UGC_Card from '../../components/Atoms/UGC_Cards/UGC_Cards';
const Component_Testing = () => {
    const T_Links = [
        { label: "Home", path: "/" },
        { label: "Review",path:"/Course_Review"}
    ]
  
  const L_Links = [
    { label: "Admin", path: "/Admin_Page" },
    { label: "Creator", path: "/Creator_Page" },
    { label: "Member", path: "/Member_Page" },
    { label: "Moderator", path: "/Moderator_Page" },
    { label: "Guest", path: "/Guest_Page" },
    { label: "Master", path: "/Master_Page" }
    ]
    return (
      <>
        <T_Navbar links={T_Links} />
        <L_Navbar links={L_Links} />
        <Main_Container
          style={{ gridColumn: "1 / 38", gridRow: "1/38" }}
        ></Main_Container>
        
      </>
    );
}
    export default Component_Testing;