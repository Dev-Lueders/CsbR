import {useState} from "react";
import Drop_Down from "../../Atoms/Drop_Down/Drop_Down";
import Text_Box from "../../Atoms/Input_Container/Text_Box";
import Check_Box from "../../Atoms/Check_Box/Check_Box";


const Add_Gamer = ({gameSystems, games})=>{

    const [gamerTag, setGamerTag] = useState('');
    const [selectedSystem, setSelectedSystem] = useState('');
    const [selectedGame, setSelectedGame]=useState('');
    const [addAnother, setAddAnother]=useState(false);

    return(
    
    <div className="add-gamer-tag">
    <Text_Box
    value={gamerTag}
    onChange={(e) => setGamerTag(e.target.value)}
    placeholder="Eneter Gamer Tag"
    ariaLabel="gamer Tag input"
    name="gamerTag"/>
<Drop_Down
options={gameSystems}
onChange={(e) => setSelectedSystem(e.target.value)}
/>

<Drop_Down
options={games}
onChange={(e) => setSelectedGame(e.target.value)}
/>

<Check_Box
checked={addAnother}
onChange={()=> setAddAnother(!addAnother)}
label="Have another Gamer Tag check this Box"
/>

</div>
    );
    };

    AddGamerTag.propTypes = {
    gameSystems: PropTypes.array.isRequired,
    games: PropTypes.array.isRequired,
};


    
AddGamerTag.defaultProps = {
    gameSystems: ['Playsation','Switch','Xbox'],
    games: ['GT7','PGA2K']
};


 export default Add_Gamer;