import React from "react";
import PropTypes from "prop-types";

const Calendar = ({
    labelText = "Select Date",
    id = "Calendar_date",
    name = "calendar_date",
    value,
    onChange,
    required = false,
    className = "",
    isVisible = true,
    ...props
}) => {
    if (!isVisible) return null;

    return (
        <div className={`calendar-container ${className}`}>
            {labelText && <label htmlFor={id}>{labelText}</label>}
            <input
                type="date"
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                {...props}
            />
        </div>
    );
};

Calendar.propTypes = {
    labelText: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool,
    className: PropTypes.string,
    isVisible: PropTypes.bool,
};

export default Calendar;