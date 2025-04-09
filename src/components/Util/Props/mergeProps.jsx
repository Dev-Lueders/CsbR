const mergeProps = (defProps = {}, passProps = {}) => {
    const mergedProps = { ...defProps };

    Object.keys(passProps).forEach((key) => {
        if (key in defProps) {
            if (
                typeof defProps[key] === "object" &&
                defProps[key] !== null &&
                typeof passProps[key] === "object"
            ) {
                mergedProps[key] = {
                    ...defProps[key],
                    ...passProps[key],
                };
            } else {
                mergedProps[key] = passProps[key];
            }
        } else {
            mergedProps[key] = passProps[key];
        }
    });
    return mergedProps;
};
export default mergeProps;