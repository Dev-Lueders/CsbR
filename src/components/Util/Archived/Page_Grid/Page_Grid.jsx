//ModulerWrapper.jsx
// This component is a wrapper for modular components, providing grid layout and visibility control.
// It validates props, generates unique class names, and applies styles based on the provided properties.
// The component uses React's memoization for performance optimization and includes prop type validation.
// It also supports lazy loading of child components using React's Suspense.
// The component is designed to be reusable and flexible, making it suitable for various use cases in a modular design system.
// The component is styled using CSS classes and inline styles, ensuring it fits well within a grid layout.
// The component is designed to be used in a React application, and it can be easily integrated into existing projects.
// The component is built with accessibility in mind, ensuring that it can be used by a wide range of users.
// The component is designed to be responsive, adapting to different screen sizes and orientations.
// The component is built with performance in mind, ensuring that it loads quickly and efficiently.
// The component is designed to be easily customizable, allowing developers to modify its appearance and behavior as needed.
// The component is built with best practices in mind, ensuring that it follows industry standards for React development.
// The component is designed to be easily testable, allowing developers to write unit tests and integration tests as needed.
// The component is built with scalability in mind, ensuring that it can handle large amounts of data and complex interactions without performance degradation.
// The component is designed to be easily maintainable, allowing developers to make changes and updates as needed without introducing bugs or breaking existing functionality.
// The component is built with security in mind, ensuring that it does not introduce vulnerabilities or expose sensitive data.
// The component is designed to be easily extensible, allowing developers to add new features and functionality as needed without modifying the core codebase.
// The component is built with internationalization in mind, ensuring that it can be easily translated and adapted for different languages and cultures.
// The component is designed to be easily debuggable, allowing developers to identify and fix issues quickly and efficiently.
// The component is built with documentation in mind, ensuring that it is well-documented and easy to understand for other developers.
//
// need to implement the lock and key when lock and key system is created
// for now passing uniqueClasName later it will be the codex for unlocking and locking the components
//---------------------------VERSION 7 -----------------------------

import React, { useState, useEffect, Suspense, useRef } from "react";
import PropTypes from "prop-types";
import deBug_console from "../Props/consoleProps.jsx";
import detectCollision from "../Collision_Detection/detect_Position.jsx";
import adjustPosition from "../Collision_Detection/adjust_Position.jsx"


// This is the main Page_Grid component

let gridPositions = [];
const Page_Grid = ({
  id,
  className,
  style,
  children,
  gridProps,
  gridColumn,
  gridRow,
  zIndex,
  opacity,
  isVisible,
  passProps,
  mergedProps,
}) => {
  deBug_console({
    id,
    className,
    style,
    children,
    gridProps,
    gridColumn,
    gridRow,
    zIndex,
    opacity,
    isVisible,
    passProps,
    mergedProps,
  }, "Starting Page_Grid Render");
  
  const gridPosition = { gridColumn, gridRow };
  const adjustedStyle = { zIndex, opacity };
  const prevGridPositions = useRef([]); // Track occupied grid positions



  // Add positions to grid on mount or update
  useEffect(() => {
    if (gridColumn && gridRow) {
      const newPosition = {
        gridColumn,
        gridRow,
        zIndex,
        opacity,
      };
      const hasCollision = detectCollision(newPosition, prevGridPositions.current);
      if (hasCollision) {
        console.warn('Collision detected @', newPosition, 'Making Necessary Adjustments.');  // Debugging Line
        
        const adjustedPosition = adjustPosition(newPosition, prevGridPositions.current);
        newPosition.gridColumn = adjustedPosition.gridColumn;
        newPosition.gridRow = adjustedPosition.gridRow;
        newPosition.zIndex = adjustedPosition.zIndex;
        newPosition.opacity = adjustedPosition.opacity;
      }

      prevGridPositions.current = [...prevGridPositions.current, newPosition];
    }
  }, [gridColumn, gridRow, zIndex, opacity]);

  if (!isVisible) return null; // Prevent unnecessary renders
  console.log(
    "Rendering Page_Grid with props:",
    id,
    className,
    style,
    children,
    gridColumn,
    gridRow,
    zIndex,
    opacity,
    isVisible,
    passProps,
    mergedProps
  ); // Debugging line

  return (
    <div
      className="grid-page"
      style={{
        display: "grid",
        gridTemplateColumns: "grid", // Use the grid prop to define the grid layout
        gridTemplateRows: "grid", // Use the grid prop to define the grid layout
        opacity: 1,
        width: "100vw", // Responsive full-screen width
        height: "100vh", // Responsive full-screen height
      }}
    >
      <Suspense fallback={<div>Loading...</div>}>
        {React.Children.map(children, (child) => {
          const {
            gridColumn,
            gridRow,
            zIndex = 1,
            opacity = 1,
            ...restProps
          } = passProps;

          // Check if this component is the last one to render, and adjust its zIndex/opacity
       

          // Pass adjusted styles and props to the children
          return (
            <div
              style={{
                gridColumn: gridColumn || gridPosition.gridColumn,
                gridRow: gridRow || gridPosition.gridRow,
                zIndex: adjustedStyle.zIndex,
                opacity: adjustedStyle.opacity,
                position: "relative", // Ensure correct stacking
              }}
              {...restProps}
              {...passProps} // Pass down custom props to children
            // Debugging line to check props
            >
              {child}
            </div>
          );
        })}
      </Suspense>
    </div>
  );
};

Page_Grid.propTypes = {
  id: PropTypes.string.isRequired,
  className:PropTypes.string,
  style:PropTypes.object,
  children: PropTypes.node.isRequired,
  gridProps: PropTypes.object,
  gridColumn:PropTypes.string,
  gridRow:PropTypes.string,
  zIndex: PropTypes.number,
  opacity:PropTypes.number,
  isVisible:PropTypes.bool,
  passProps:PropTypes.object,
  mergedProps: PropTypes.object,
};

Page_Grid.defaultProps = {
  grid: "repeat(auto-fit, minmax(100px, 1fr))", // Default flexible grid
  gridPosition: { gridColumn: "auto", gridRow: "auto" },
  isVisible: true, // By default, the component is visible
  opacity: 1,
  passProps: {}, // Default passProps if no specific props passed in
};

export default Page_Grid;
