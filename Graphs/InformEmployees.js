/**MEDIUM
 * A company has n employees with a unique ID for each employee from 0 to n - 1. The head of the company is the one with headID. Each employee has one direct 
 * manager given in the manager array where manager[i] is the direct manager of the i-th employee, manager[headID] = -1. Also, it is guaranteed that the 
 * subordination relationships have a tree structure. 
 * The head of the company wants to inform all the company employees of an urgent piece of news. He will inform his direct subordinates, and they will inform their 
 * subordinates, and so on until all employees know about the urgent news. The i-th employee needs informTime[i] minutes to inform all of his direct 
 * subordinates (i.e., After informTime[i] minutes, all his direct subordinates can start spreading the news). 
 * 
 * Return the number of minutes needed to inform all the employees about the urgent news.
 * 
 * Ex: Input: n = 6, headID = 2, manager = [2,2,-1,2,2,2], informTime = [0,0,1,0,0,0]
Output: 1
Explanation: The head of the company with id = 2 is the direct manager of all the employees in the company and needs 1 minute to inform them all.
The tree structure of the employees in the company is shown.
                        2
                    / / | \  \
                   0 1  3  4   5

 * Approach: Create a adjacency list of the graph and then perform BFS. Initial idea was to add max informTime at each level to result, but there is an edge case 
 (shown below) where just using max time at a level wont work. (Here total time is 3+9 and not 3+9+1). So we maintain the total time upto a specific manager in the 
 stack
            9(3)
        /   |   \
    (2) 1   6(9) 8(2)
      /     |      \
     7      2      5(1)
                     \
                     0 

                     
A better approach would be to use DFS which will give us the deepest path and time for each path. We can then get the max time of each path.

 */

var numOfMinutes = function (n, headID, manager, informTime) {
    let hier = new Map();
    let res = 0;
    manager.forEach((e, idx) => {
        if (hier.has(e)) {
            let emp = hier.get(e);
            emp.push(idx);
            hier.set(e, emp);
        } else hier.set(e, [idx]);
    });
    //    console.log(hier);

    const doBFS = (node, startTime) => {
        let stk = [];
        stk.push([node, startTime]);
        while (stk.length > 0) {
            let len = stk.length;
            let maxTime = 0;
            for (let i = 0; i < len; i++) {
                let [emp, time] = stk.shift();
                if (hier.has(emp)) {
                    hier.get(emp).forEach(e => {
                        stk.push([e, time + informTime[e]]);
                    })
                }
                res = Math.max(res, time);
            }


        }
    };

    doBFS(headID, informTime[headID]);
    return res;
};