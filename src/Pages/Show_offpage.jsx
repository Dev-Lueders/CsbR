import Adding_Form from "../components/Molecules/Form/Adding_Form";
import World_Map from "../components/Atoms/World_Map/World_Map";
import Page_Frame from "../components/Organisim/Page_Frame";
import T_Navbar from "../components/Atoms/NavBar/T_Navbar";

const Show_offpage = () => { 
    const t_links = [
    label:"review", path:"/Course_review"
    ]
    return (<>
        <T_Navbar links={t_links} />
    </>)
}
export default Show_offpage;