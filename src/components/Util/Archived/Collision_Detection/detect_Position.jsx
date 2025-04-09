const detectCollision = (newPosition, gridPositions = []) => {
    return gridPositions.some((pos) => {
        console.log("CheckingPOS", pos, "against New POS", newPosition);
        return (
            (pos.gridColumn === newPosition.gridColumn &&
                pos.gridRow === newPosition.gridRow) ||
            pos.zIndex === newPosition.zIndex
            );
    });
};
    
            export default detectCollision;
