const detectCollision = (newPosition, gridPositions = []) => {
    return gridPositions.some(
        (pos) =>
            (pos.gridColumn === newPosition.gridColumn &&
                pos.gridRow === newPosition.gridRow) ||
            pos.zIndex === newPosition.zIndex
    );
};
export default detectCollision;

// export const adjustPosition = (
//   newPosition,
//   gridPositions,
//   setGridPositions
// ) => {
//   if (detectCollision(newPosition, gridPositions)) {
//     newPosition.zIndex = (newPosition.zIndex || 1) - 0.0025;
//     newPosition.opacity = (newPosition.opacity || 1) - 0.0001;
//   }
//   setGridPositions((prev) => [...prev, newPosition]);
// };