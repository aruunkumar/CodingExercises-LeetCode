// In a given grid, each cell can have one of three values:
// the value 0 representing an empty cell;
// the value 1 representing a fresh orange;
// the value 2 representing a rotten orange.
// Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.
// Return the minimum number of minutes that must elapse until no cell has a fresh orange.  If this is impossible, return -1 instead.

var orangesRotting = function(grid) {
    let fresh = 0;
    let cnt = 0;
    let queue = [];
    for (let i = 0; i< grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == 2) queue.push([i,j]);
            if (grid[i][j] == 1) fresh++;
        }
    }
    if (fresh == 0) return 0;
    let min = 0;
    let cnt1 = queue.length;
    let dir = [[-1,0],[1,0],[0,-1],[0,1]]; 
    while (queue.length>0) {
        
        let rotten = queue.shift();
        cnt1--;
        for (let i = 0; i < dir.length; i++) {
            let x = rotten[0] + dir[i][0];
            let y = rotten[1] + dir[i][1];
      //      console.log('inside for', rotten, x, y);
            if (x < 0 || y < 0 || y >= grid[0].length || x >= grid.length 
                || grid[x][y] == 0 || grid[x][y] == 2) continue
            else { grid[x][y] = 2;
                    queue.push([x,y]);
                    fresh--;
                    cnt++;
            }
     //       console.log('inside while', queue, fresh, cnt);
        }
        if (cnt1 == 0) {
            min++;
            cnt1 = cnt;
            cnt = 0;
        }
    }
    return fresh == 0 ? min-1 : -1;
};

console.log(orangesRotting([[2,1,1],[1,1,0],[0,1,1]]));