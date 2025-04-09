const cols = 36;
const rows = 36;
const fr = 1;

const grid_Props = {
  
        display: "grid",
        gridTemplateColumns:  `repeat(${cols},${fr}fr)`,
        gridTemplateRows:`repeat(${rows},${fr}fr)`,
    }

export default grid_Props;
