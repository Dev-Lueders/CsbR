const mergeProps = (defProps, props) => {
    return {
        ...defProps,
        ...props,
        style: {
            ...defProps.style,
            ...props.style,
        },
        grisPosition: {
            ...defProps.gridPosition,
            ...props.gridPosition
        }
    };
};
export default mergeProps;