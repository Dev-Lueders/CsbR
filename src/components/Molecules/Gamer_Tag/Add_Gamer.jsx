import { useState } from "react";
import Drop_Down from "../../Atoms/Drop_Down/Drop_Down";
import Text_Box from "../../Atoms/Input_Container/Text_Box";
import Check_Box from "../../Atoms/Check_Box/Check_Box";
import "../../../components/components_styles.css"
import PropTypes from 'prop-types';

import DD_Game_Options from "../../Components_Data/Atom_Data/DD_Game_Options.json";
import DD_Game_Systems from "../../Components_Data/Atom_Data/DD_Game_Systems.json";

const Add_Gamer_Tag = () => {
  const [gamerTag, setGamerTag] = useState('');
  const [selectedSystem, setSelectedSystem] = useState('');
  const [selectedGame, setSelectedGame] = useState('');
  const [addAnother, setAddAnother] = useState(false);
  const [GTindex, setGTindex] = useState([{ gamerTag: "", selectedSystem: "", selectedGame: "" }]);
  const [removeGT, setRemoveGT] = useState([false]); // Initialize with one false for the first GT

  const handleAddGamerTag = () => {
    if (GTindex.length < 10) {
      setGTindex((prevTags) => [
        ...prevTags,
        { gamerTag, selectedSystem, selectedGame }
      ]);
      setRemoveGT((prevRemoveGT) => [...prevRemoveGT, false]);
      setGamerTag('');
      setSelectedSystem('');
      setSelectedGame('');
    }
  };

  const handleRemoveGamerTag = (index) => {
    setGTindex((prevTags) => prevTags.filter((_, i) => i !== index));
    setRemoveGT((prevRemoveGT) => prevRemoveGT.filter((_, i) => i !== index));
  };

  const handleCheckboxChange = (index) => {
    const updatedRemoveTags = [...removeGT];
    updatedRemoveTags[index] = !updatedRemoveTags[index];
    setRemoveGT(updatedRemoveTags);

    if (updatedRemoveTags[index]) {
      handleRemoveGamerTag(index);
    }
  };

  return (
    <div className="add-gamer-tag">
      {GTindex.map((gt, index) => (
        <div key={index}>
          <Text_Box
            value={gt.gamerTag || ""}
            onChange={(value) => {
              const updatedTags = [...GTindex];
              updatedTags[index].gamerTag = value;
              setGTindex(updatedTags);
            }}
          />

          <Drop_Down
            options={DD_Game_Systems.DD_Game_Systems}
            onChange={(value) => {
              const updatedTags = [...GTindex];
              updatedTags[index].selectedSystem = value;
              setGTindex(updatedTags);
            }}
            maxOptionsVisible={4}
          />

          <Drop_Down
            options={DD_Game_Options.DD_Game_Options}
            onChange={(value) => {
              const updatedTags = [...GTindex];
              updatedTags[index].selectedGame = value;
              setGTindex(updatedTags);
            }}
            maxOptionsVisible={4}
          />

          <Check_Box
            checked={removeGT[index]}
            onChange={() => handleCheckboxChange(index)}
            label={`Remove ${gt.gamerTag || 'this gamer tag'}`}
          />
        </div>
      ))}
      <Check_Box
        checked={addAnother}
        onChange={handleAddGamerTag}
        label="Have another Gamer Tag? Check this Box"
      />
    </div>
  );
};

Text_Box.PropTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  arialabel: PropTypes.string,
  name: PropTypes.string,
};

export default Add_Gamer_Tag;