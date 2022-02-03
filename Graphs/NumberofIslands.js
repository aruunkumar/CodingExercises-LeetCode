/** MEDIUM
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

Approach: Do a complete scan of the matrix and as we visit each element check if its land. If its land increment island count, change value to '0' and do a DFS of all adjoining cells.
* 
 */

var numIslands = function (grid) {
    let res = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == "1") {
                res++;
                doDFS(grid, i, j);
            }
        }
    }
    return res;
};

const doDFS = (grid, i, j) => {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length || grid[i][j] == "0") {
        return
    }
    grid[i][j] = "0"; //If this is not done then we will end up visiting the same elements in an infinite loop. This is another way of marking it as visited.
    doDFS(grid, i + 1, j);
    doDFS(grid, i - 1, j);
    doDFS(grid, i, j + 1);
    doDFS(grid, i, j - 1);
};