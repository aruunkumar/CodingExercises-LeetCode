/**MEDIUM
 * 
 * INput: [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]
 * Output: [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]
 *  
 * 
 4,4; 5,0; 5,2; 6,1; 7,0; 7,1

 5,0; 7,0; 5,2; 6,1; 4,4; 7,1 

  5,0;   ; 5,2; 6,1; 4,4;  

 i=3
 j=0
 ele[1]=1
 */

var reconstructQueue = function (people) {
    let res = Array(people.length);
    res.fill([]);
    people.sort((a, b) => a[0] - b[0]);
    people.map(ele => {
        let placed = false;
        let i = 0;
        let j = ele[1];
        while (!placed) {
            if (i >= ele[1] && res[i] == "" && j <= 0) {
                res[i] = ele;
                placed = true;
            } else if (res[i] == "" || res[i][0] >= ele[0]) {
                j--;
                i++;
            } else i++;
        }
    });
    return res;

};

console.log(reconstructQueue([[6, 0], [5, 0], [4, 0], [3, 2], [2, 2], [1, 4]]));