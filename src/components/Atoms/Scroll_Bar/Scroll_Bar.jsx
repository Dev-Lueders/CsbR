import React from "react";


const Scroll_Bar = ({ height, width, children }) => {
  return (
    <div className="custom-scrollbar" style={{ height, width }}>
      {children}
    </div>
  );
};

export default Scroll_Bar;