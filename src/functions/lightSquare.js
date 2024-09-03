 
export default function isLightSquare(position, index) {
    const row = position[1];
    
    const isEven = (x) => !(x % 2);
    
    //conditions for white squares
    if(isEven(row) && !isEven(index + 1)) {
        return true;
    }
    if(isEven(index + 1) && !isEven(row)) {
        return true;
    }
    return false; //condition for dark
}