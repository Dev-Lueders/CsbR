import Text_Box from "../../../../../../../components/Input_Container/Text_Box";
import Drop_Down from "../../../../../../../components/Drop_Down/Drop_Down";
import Button_btn from "../../../../../../../components/Buttons/Button";
import T_Navbar from "../../../../../../../components/NavBar/T_Navbar";
import B_Navbar from "../../../../../../../components/NavBar/B_Navbar";
import { Form } from "react-router-dom";

const PGA2K23_R_Long = () => {

    const T_Links =[  
        { label: "Home", path: "/" },
        { label: "About", path: "/About" },
        { label: "Log In", path:"/Login_Page"}

    ];

return(
<>
<T_Navbar links = {T_Links}/>

</>


)


}

export default PGA2K23_R_Long;