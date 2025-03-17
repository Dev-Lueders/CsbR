import Text_Box from "../../../../../../../components/atoms/Input_Container/Text_Box";
import Drop_Down from "../../../../../../../components/atoms/Drop_Down/Drop_Down";
import Button_btn from "../../../../../../../components/atoms/Buttons/Button";
import T_Navbar from "../../../../../../../components/atoms/NavBar/T_Navbar";
import B_Navbar from "../../../../../../../components/atoms/NavBar/B_Navbar";
// import { form } from "react-router-dom";
import {useState} from 'react';

import PGA_DD_Game_Version from '../../../../Data/PGA_DD_Game_Version.json';
import PGA_DD_Holes from '../../../../Data/PGA_DD_Holes.json';
import PGA_DD_SolSys_List from '../../../../Data/PGA_DD_SolSys_List.json';
import PGA_DD_Tees from '../../../../Data/PGA_DD_Tees.json';
import PGA_DD_difficulty from '../../../../Data/PGA_DD_difficulty.json';
import PGA_DD_theme from '../../../../Data/PGA_DD_theme.json';
import PGA_DD_type from '../../../../Data/PGA_DD_type.json';




const PGA2K23_R_Long = () => {

    const T_Links =[  
        { label: "Home", path: "/" },
        { label: "About", path: "/About" },
        { label: "Log In", path:"/Login_Page"}

    ];

    const [selectedSystem, setSelectedSystem ] = useState('null');
    const [planetOptions, setplanetOptions] = useState([]);

    const handleSystemSelect = async (selectedValue) => {
        setSelectedSystem(selectedValue);
     const systemFile = selectedValue.data;
        try {
        const response = await fetch (`/Data/${systemFile}`);
        const planets = await response.json();
        setplanetOptions(planets);
    } catch (error) {
        console.error("Error Loading Planet Data", error);
        setplanetOptions([]);
    }
};
return (
    <>
    <T_Navbar links ={T_Links}/>
    
    <form>

    <Text_Box label="Review Course" placeholder="Course review" />
    <Drop_Down label="Game Version" options={PGA_DD_Game_Version} />
    <Drop_Down label="Holes" options={PGA_DD_Holes} />
    <Drop_Down label="Tees" options={PGA_DD_Tees} />
    <Drop_Down label="Difficulty" options={PGA_DD_difficulty} />        
    <Drop_Down label="Theme" options={PGA_DD_theme} />
    <Drop_Down label="Type" options={PGA_DD_type} />
    <Drop_Down
    label="Select Solar System"
    options={PGA_DD_SolSys_List}
    onSelect={handleSystemSelect}
    />
    <Drop_Down
    label="Select Planet"
    options={planetOptions} 
    onSelect={(selectedPlanet) => console.log(selectedPlanet)}
    />


    </form>  
    
    </>
);

}
export default PGA2K23_R_Long;