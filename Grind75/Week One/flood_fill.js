/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {

    // Change sr,sc color = color
    // if (left, right, up, down) && color == color
    // the number is the color

    // How do I decide what is adjacent / same color?
    // I must need a way to keep track of seen cells
    // If starting is the correct color, no change is made

    const startingColor = image[sr][sc];
    const gridRows = image.length;
    const gridCols = image[0].length;

    // Returns image when the starting cell is already the new color
    if(startingColor === color){
        return image;
    }

    const depthSearch = (row, column) => {
        
        // Checks for range
        if(row < 0 || row >= gridRows || column < 0 || column >= gridCols) return;

        // Checks if the cell's color is the same as the starting cell's color
        if (image[row][column] !== startingColor) return;
        
        // Fills cell with color        
        image[row][column] = color;

        // Checks all adjacent cells from current cell
        depthSearch(row + 1, column);
        depthSearch(row - 1, column);
        depthSearch(row, column + 1);
        depthSearch(row, column - 1);
    }
    
    depthSearch(sr, sc);
    return image;
}
    // so it's about adjacency
    // think of it from one point, not the whole grid
    // check it, then flood fill it? no, flood fill it and check it in the first call

    // so first call would be to check if this current cell is the new color 
    // I would need to save the original color to check against 
    // Then I can do if (color && startingColor)  
    // console.log(image[0][0]);
    // image[0][0] = 2;
    // console.log(image[0][0]);

    // How do I decide if something is adjacent, should I save a pointer to each?
    // sr +1 -1 until empty, sc+1 -1 until empty
    // So +1, then check +1 -1


