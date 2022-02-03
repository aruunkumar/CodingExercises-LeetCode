/**MEDIUM
 * Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's, and return the matrix.
 * You must do it in place.
 * 
 * 0  1  2  0       0  0  0  0
 * 3  4  5  2   =>  0  4  5  0
 * 1  3  1  5       0  3  1  0
 * 
 * Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
 * Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]] 
 * Approach: If an element is zero then do a scan of complete row and column. Since we need to do in place, we will temporarily mark cells to be made zero as x 
 * in case we have not already visited that cell. When we actually visit
 * the cell we will change it to 0.  
 * 
 */

var setZeroes = function (matrix) {
    const doDFS = (i, j) => {
        for (let k = 0; k < matrix.length; k++) {
            if (k <= i) {
                matrix[k][j] = 0;
            } else if (matrix[k][j] != 0) {
                matrix[k][j] = "x";
            };
        };
        for (let l = 0; l < matrix[i].length; l++) {
            if (l <= j) {
                matrix[i][l] = 0;
            } else if (matrix[i][l] != 0) {
                matrix[i][l] = "x";
            }
        }
    };

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 0) {
                doDFS(i, j);
            } else if (matrix[i][j] == "x") {
                matrix[i][j] = 0;
            }
        }
    }

};
