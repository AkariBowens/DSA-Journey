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

    if(image[sr][sc] == color){
        return image;
    }

    var depthSearch = (row, column) => {
        image[sr][sc] = color;

        while (image[sr][sc] != color){

        }

        // Should I just do this four times?
        // if(image[sr+1][sc] != color){
        //     image[sr+1][sc] = color;
        // } else {
        //     // ??
        //     floodFill(image[sr+ 1][sc]);
        // }
        floodFill(image[row + 1][column]);
        floodFill(image[row - 1][column]);
        floodFill(image[row][column + 1]);
        floodFill(image[row][column - 1]);
    }
    // so it's about adjacency
    // think of it from one point, not the whole grid
    // check it, then flood fill it? no, flood fill it and check it in the first call

    // so first call would be to check if this current is the color needed
    // I would need to save the original color to check against 
    // Then I can do if (color && startingColor)  
    // console.log(image[0][0]);
    // image[0][0] = 2;
    // console.log(image[0][0]);

    // How do I decide if something is adjacent, should I save a pointer to each?
    // sr +1 -1 until empty, sc+1 -1 until empty
    // So +1, then check +1 -1

};
