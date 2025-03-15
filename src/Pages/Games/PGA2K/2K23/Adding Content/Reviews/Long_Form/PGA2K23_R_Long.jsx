import Text_Box from "../../../../../../../components/Input_Container/Text_Box";
import Drop_Down from "../../../../../../../components/Drop_Down/Drop_Down";
import Button_btn from "../../../../../../../components/Buttons/Button";
import T_Navbar from "../../../../../../../components/NavBar/T_Navbar";
import B_Navbar from "../../../../../../../components/NavBar/B_Navbar";
import { Form } from "react-router-dom";

import PGA_DD_Game_Version from '../../../../Data/PGA_DD_Game_Version.json';
import PGA_DD_Holes from '../../../../Data/PGA_DD_Holes.json';
import PGA_DD_Planets_Dune from '../../../../Data/PGA_DD_Planets_Dune.json';
import PGA_DD_Planets_HD10180 from '../../../../Data/PGA_DD_Planets_HD10180.json';
import PGA_DD_Planets_HR8799 from '../../../../Data/PGA_DD_Planets_HR8799.json';
import PGA_DD_Planets_Kepler from '../../../../Data/PGA_DD_Planets_Kepler.json';
import PGA_DD_Planets_Pegasi from '../../../../Data/PGA_DD_Planets_Pegasi.json';
import PGA_DD_Planets_Startrek from '../../../../Data/PGA_DD_Planets_Startrek.json';
import PGA_DD_Planets_Starwars from '../../../../Data/PGA_DD_Planets_Starwars.json';
import PGA_DD_Planets_Trappist from '../../../../Data/PGA_DD_Planets_Trappist.json';
import PGA_DD_Tees from '../../../../Data/PGA_DD_Tees.json';
import PGA_DD_difficulty from '../../../../Data/PGA_DD_difficulty.json';
import PGA_DD_realSolarsystem from '../../../../Data/PGA_DD_realSolarsystem.json';
import PGA_DD_system_alphaCentauri from '../../../../Data/PGA_DD_system_alphaCentauri.json';
import PGA_DD_theme from '../../../../Data/PGA_DD_theme.json';
import PGA_DD_type from '../../../../Data/PGA_DD_type.json';




const PGA2K23_R_Long = () => {

    const T_Links =[  
        { label: "Home", path: "/" },
        { label: "About", path: "/About" },
        { label: "Log In", path:"/Login_Page"}

    ];

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedPlanet, setSelectedPlanet] = useState(null);
    const [ planetOptions, setPlanetOptions] = useState([]);

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
       
        }
    }
return(
<>
<T_Navbar links = {T_Links}/>
<Form>
    <Text_Box label="Course Review" placeholder="Course Review"/>
    <Drop_Down label="Game Version" options={PGA_DD_Game_Version}/>
    <Drop_Down label="How Many Holes" options={PGA_DD_Holes}/>
    <Drop_Down label="Select Solar System" options={categories.map(category =>({
        label:category.label,
        value: category
            }))}
            onSelect={handleCategorySelect}
            />
    

</Form>

</>
)


}

export default PGA2K23_R_Long;