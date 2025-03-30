import React, { useState, useRef, useMemo, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
// import DD_Default_Props from '../../Components_Data/Def_Atom/DD_Default_Props';


const Drop_Down = React.memo(({ options, label, onChange, containerStyle, dropdownStyle, optionStyle, maxOptionsVisible,isVisible}) => {
 

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [highlightedIndex, setHighlightedIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const inputRef = useRef(null);
  const liveRegionRef = useRef(null);


  const filteredOptions = useMemo(
    () => (Array.isArray(options) ? options.filter(option => option.label.toLowerCase().includes(searchTerm.toLowerCase())) : []),
    [options, searchTerm]
    
  );
  
  const toggleDropdown = useCallback(() => {
    setIsOpen((prev) => !prev);
    if (!isOpen) {
      // When dropdown opens, focus on the search field
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const handleSelect = useCallback((option) => {
    setSelectedOption(option);
    onChange(option.value);
    setIsOpen(false);
    setHighlightedIndex(null);
    setSearchTerm("");

    if (liveRegionRef.current) {
      liveRegionRef.current.textContent = `Selected: ${option.label}`;
    }
  }, [onChange]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === "ArrowDown") {
      setHighlightedIndex((prevIndex) =>
        prevIndex === null ? 0 : Math.min(filteredOptions.length - 1, prevIndex + 1)
      );
    } else if (e.key === "ArrowUp") {
      setHighlightedIndex((prevIndex) =>
        prevIndex === null ? 0 : Math.max(0, prevIndex - 1)
      );
    } else if (e.key === "Enter" && highlightedIndex !== null) {
      handleSelect(filteredOptions[highlightedIndex]);
    } else if (e.key === "Escape") {
      setIsOpen(false);
    } else if (e.key === "Tab" && highlightedIndex !== null) {
      // Handle tab key when dropdown is open to select an option
      handleSelect(filteredOptions[highlightedIndex]);
    }
  }, [highlightedIndex, filteredOptions, handleSelect]);

  const handleClickOutside = useCallback((e) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target) &&
      !buttonRef.current.contains(e.target)
    ) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  Drop_Down.displayName = "Drop_Down";
  
  const maxHeight = filteredOptions.length > maxOptionsVisible ? "180px" : "none";

  return isVisible ? (
    <div
      style={{ position: "relative", display: "inline-block", ...containerStyle }}
      onKeyDown={handleKeyDown}
      aria-labelledby="dropdown-button"
    >
      {/* Dropdown button */}
      <button
        id="dropdown-button"
        onClick={toggleDropdown}
        ref={buttonRef}
        style={{
          backgroundColor: "#007bff",
          color: "#fff",
          padding: "10px 15px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          display: "grid",
          alignItems: "center",
          justifyContent: "space-between",
          width: "200px",
          ...dropdownStyle,
        }}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls="dropdown-menu"
      >
        {selectedOption ? selectedOption.label : label}
        <span style={{ display:"grid"}}>▼</span>
      </button>

      {/* Live region for ARIA announcements */}
      <div ref={liveRegionRef} aria-live="assertive" role="status" style={{ position: "absolute", top: "-9999px" }}></div>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          id="dropdown-menu"
          ref={dropdownRef}
          style={{
            
            top: "100%",
            left: "0",
            width: "100%",
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            borderRadius: "5px",
            boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
            zIndex: "1000",
            maxHeight: maxHeight,
            overflowY: filteredOptions.length > maxOptionsVisible ? "auto" : "visible",
            ...dropdownStyle,
          }}
          role="listbox"
          aria-labelledby="dropdown-button"
        >
          {/* Search input */}
          <input
            ref={inputRef}
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              border: "none",
              borderBottom: "1px solid #ccc",
              outline: "none",
            }}
            aria-label="Search options"
          />

          {/* Option rendering */}
          {filteredOptions.length === 0 && (
            <div style={{}}>No options found</div>
          )}

          {filteredOptions.map((option, index) => (
            <div
              key={index}
              onClick={() => handleSelect(option)}
              style={{
                padding: "10px",
                cursor: "pointer",
                borderBottom: index !== filteredOptions.length - 1 ? "1px solid #ddd" : "none",
                backgroundColor: highlightedIndex === index ? "#f1f1f1" : "#fff",
                transition: "background 0.2s",
                ...optionStyle,
              }}
              onMouseEnter={() => setHighlightedIndex(index)}
              onMouseLeave={() => setHighlightedIndex(null)}
              role="option"
              aria-selected={selectedOption?.value === option.value}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  ): null;
});

Drop_Down.propTypes = {
  options: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  containerStyle: PropTypes.object,
  dropdownStyle: PropTypes.object,
  optionStyle: PropTypes.object,
  maxOptionsVisible: PropTypes.number,
  isVisible:PropTypes.bool
};



export default Drop_Down;