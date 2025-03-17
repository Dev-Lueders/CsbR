import React from "react";
import PropTypes from "prop-types";
import { defaultOptions } from "../../defaultProps"; // Adjust path as needed

const Drop_Down = ({ options = defaultOptions, searchQuery = "" }) => {
  const filteredOptions = options.filter((option) =>
    option.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {filteredOptions.length > 0 ? (
        filteredOptions.map((option) => <p key={option.id}>{option.name}</p>)
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

Drop_Down.propTypes = {
  options: PropTypes.array,
  searchQuery: PropTypes.string,
};

export default Drop_Down;
