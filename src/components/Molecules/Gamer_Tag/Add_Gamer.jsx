//UPdated ADD_GAMER 2:52pm

import React from "react";
import PropTypes from "prop-types";
import DD_Game_Systems from "../../Components_Data/Atom_Data/DD_Game_Systems.json";
import "../../components_styles.css";

const ADD_Gamer_Tag = ({
  GT_Indi,
  selectedSystem,
  GT_Array,
  onGT_IndiChange,
  onSystemChange,
  onAddGT,
  onRemoveGT,
  style = {}
}) => {
  if (!Array.isArray(GT_Array)) return null;
  return (
    
    <div
      className="gamer-tag-section"
      style={{
        ...style
      }}
    >
    
      <div>
        <label htmlFor="gamerTagInput">Gamer Tag:</label>
        <input
          type="text"
          id="gamerTagInput"
          value={GT_Indi}
          onChange={(e) => onGT_IndiChange(e.target.value)}
          className="text-input"
          aria-label="Gamer Tag Input"
        />
      </div>

      <div>
        <label htmlFor="systemSelect">System:</label>
        <select
          id="systemSelect"
          value={selectedSystem}
          onChange={(e) => onSystemChange(e.target.value)}
          className="select-input"
          aria-label="System Select"
        >
          <option value="">Select System</option>
          {DD_Game_Systems.Drop_Down_Systems.map((system, idx) => (
            <option key={idx} value={system.value}>
              {system.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <button
          type="button"
          onClick={onAddGT}
          className="add-btn"
          style={{ marginTop: "5px" }}
        >
          Add Gamer Tag
        </button>
      </div>

      <div style={{ gridColumn: "10 / span 15", marginTop: "10px" }}>
        <ul className="gamer-tag-list">
          {GT_Array.map((tag, index) => (
            <li key={index}>
              {tag.system}: {tag.GT_Indi}
              <button
                type="button"
                onClick={() => onRemoveGT(index)}
                className="remove-btn"
                aria-label={`Remove ${tag.GT_Indi}`}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

ADD_Gamer_Tag.propTypes = {
  GT_Indi: PropTypes.string.isRequired,
  selectedSystem: PropTypes.string.isRequired,
  GT_Array: PropTypes.arrayOf(
    PropTypes.shape({
      GT_Indi: PropTypes.string,
      system: PropTypes.string
    })
  ).isRequired,
  onGT_IndiChange: PropTypes.func.isRequired,
  onSystemChange: PropTypes.func.isRequired,
  onAddGT: PropTypes.func.isRequired,
  onRemoveGT: PropTypes.func.isRequired,
  style: PropTypes.object
};

export default ADD_Gamer_Tag;