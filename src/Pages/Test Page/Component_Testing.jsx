import React from "react";
import PropTypes from "prop-types";

import DD_Game_Systems from "../../components/Components_Data/Atom_Data/DD_Game_Systems.json";
import Button_btn from "../../components/Atoms/Buttons/Button";


const Add_Gamer_Tag = ({
  GT_Indi,
  selectedSystem,
  GT_Array,
  onGT_IndiChange,
  onSystemChange,
  onAddGT,
  onRemoveGT,
  style = {},
}) => {
  const handleInputChange = (e) => {
    onGT_IndiChange(e.target.value);
  };

  const handleSystemChange = (e) => {
    onSystemChange(e.target.value);
  };

  return (
    <div className="add-gamer-tag-container" style={style}>
      <h3 className="section-header">Add Gamer Tag</h3>

      <input
        type="text"
        placeholder="Enter Gamer Tag"
        value={GT_Indi}
        onChange={handleInputChange}
        className="input"
      />

      <select
        value={selectedSystem}
        onChange={handleSystemChange}
        className="dropdown"
      >
        {DD_Game_Systems.DD_Game_Systems.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <Button_btn onClick={onAddGT}>Add</Button_btn>

      <ul className="tag-list">
        {GT_Array.map((tag, index) => (
          <li key={index} className="tag-item">
            {tag.GT_Indi} — {tag.system}
            <Button_btn onClick={() => onRemoveGT(index)}>✖</Button_btn>
          </li>
        ))}
      </ul>
    </div>
  );
};

Add_Gamer_Tag.propTypes = {
  GT_Indi: PropTypes.string.isRequired,
  selectedSystem: PropTypes.string.isRequired,
  GT_Array: PropTypes.arrayOf(
    PropTypes.shape({
      GT_Indi: PropTypes.string,
      system: PropTypes.string,
    })
  ).isRequired,
  onGT_IndiChange: PropTypes.func.isRequired,
  onSystemChange: PropTypes.func.isRequired,
  onAddGT: PropTypes.func.isRequired,
  onRemoveGT: PropTypes.func.isRequired,
  style: PropTypes.object,
};

export default Add_Gamer_Tag;
