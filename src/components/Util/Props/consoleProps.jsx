const deBug_console = (propsAndVariables, label = "Component Rendered") => {
  // Destructure the propsAndVariables object to access passProps and Children if available
  const {
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
  } = propsAndVariables;

  // Log the information to the console
  console.log("Debugger Ran");
  console.log(`${label}:`, propsAndVariables);
    console.log(id, "Id");
    console.log(className, "Class Name");
    console.log(style, "style");
    console.log(children, "Children");
    console.log(gridProps, "Grid Props");
    console.log(gridColumn, "Grid Column");
    console.log(gridRow, "Grid Row");
    console.log(zIndex, "zIndex");
    console.log(opacity, "opacity");
    console.log(isVisible, "isVisible");
    console.log(passProps, "passProps");
    console.log(mergedProps,"mergedProps" )
  
};

deBug_console.displayName = "deBug_Console";
export default deBug_console;
