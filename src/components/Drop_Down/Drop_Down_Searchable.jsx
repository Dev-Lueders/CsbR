import React, { useState } from 'react';
import { FormControl, Dropdown } from 'react-bootstrap';

const Drop_Down_Searchable = ({ options, label, children }) => {
    const [inputValue, setInputValue] = useState("");
    const [filteredOptions, setFilteredOptions] = useState(options);
    
    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        
        if (value) {
            // Filter options based on user input
            const filtered = options.filter(option =>
                option.label.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredOptions(filtered);
        } else {
            // If input is empty, show all options
            setFilteredOptions(options);
        }
    };

    const handleSelect = (option) => {
        setInputValue(option.label);  // Set the input value to the selected option
    };

    return (
        <div className="dropdown-container">
            {/* If a label is passed, show it */}
            {label && <label>{label}</label>}

            {/* Main dropdown input field */}
            <FormControl
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Type to search..."
            />

            {/* Dropdown list of options */}
            <Dropdown.Menu>
                {filteredOptions.map((option, index) => (
                    <Dropdown.Item 
                        key={index}
                        onClick={() => handleSelect(option)}
                    >
                        {option.label}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>

            {/* Render children passed from the parent component */}
            {children}
        </div>
    );
};

export default Drop_Down_Searchable;