import Text_Box from "../../../../../../../components/Atoms/Input_Container/Text_Box";
import Drop_Down from "../../../../../../../components/Atoms/Drop_Down/Drop_Down";
import Button_btn from "../../../../../../../components/Atoms/Buttons/Button";
import T_Navbar from "../../../../../../../components/Atoms/NavBar/T_Navbar";
import B_Navbar from "../../../../../../../components/Atoms/NavBar/B_Navbar";
import { Form } from "react-router-dom";

import PGA_DD_Game_Version from '../../../../Data/PGA_DD_Game_Version.json';
import PGA_DD_Holes from '../../../../Data/PGA_DD_Holes.json';
import PGA_DD_Tees from '../../../../Data/PGA_DD_Tees.json';
import PGA_DD_difficulty from '../../../../Data/PGA_DD_difficulty.json';
import PGA_DD_theme from '../../../../Data/PGA_DD_theme.json';
import PGA_DD_type from '../../../../Data/PGA_DD_type.json';
import PGA_DD_SolSys_List from '../../../../Data/PGA_DD_SolSys_List.json';



const PGA2K23_R_Long = () => {
return (
  <>
    <h1>Long Review Form for a PGA 2K23 Course</h1>
        <form>
            <Text_Box/>
        
        
    </form>
  </>
);


}

export default PGA2K23_R_Long;