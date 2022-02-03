/**MEDIUM
 * There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where 
 * prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai. For example, the pair [0, 1], indicates that to 
 * take course 0 you have to first take course 1. 
 * Return true if you can finish all courses. Otherwise, return false.

 EX1: Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.
Example 2:

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.

Approach: Represent the courses list as a directed graph. Device a method to check for cycles in the graph. If there are cycles then return false else true.
 * 
 */

//In this solution, used a map to store the course prerequsites. Then iterated thru prereq array and perform DFS. A better solution can be found below.
var canFinish = function (numCourses, prerequisites) {
    if (prerequisites.length == 0) return true;
    let preReq = new Map();
    prerequisites.map(ele => {
        if (preReq.has(ele[0])) {
            let arr = preReq.get(ele[0]);
            arr.push(ele[1]);
        } else preReq.set(ele[0], [ele[1]]);
    });
    //    console.log(preReq);
    const doDFS = (num, crs, visited, stk) => {
        //       console.log('Start of DFS. Num:', num, ' Course:', crs, ' Visited:', visited);
        if (stk.has(crs)) return -1;
        if (visited.has(crs)) return num + 1;
        if (preReq.has(crs)) {
            let arr = preReq.get(crs);
            stk.add(crs);
            visited.add(crs);
            for (let j = 0; j < arr.length; j++) {
                num = doDFS(num, arr[j], visited, stk);
                if (num >= numCourses || num == -1) break;
            }
            stk.delete(crs);
            return (num == -1 ? -1 : num + 1);
        } else return num + 1;
    }
    let num = 0;
    let visited = new Set();
    let stk = new Set();
    for (let i = 0; i < prerequisites.length; i++) {
        if (!visited.has(prerequisites[i][0])) {
            num = doDFS(num, prerequisites[i][0], visited, stk);
            if (num == -1) return false;
            if (num >= numCourses) break;
        }
    }
    return true;

};


//Solution to find cycles in a directed graph. Use 2 data structures - Visited & Recursion stack. As we do DFS, if a vertex was visited then we dont have to visit
//again. We also store the vertex in both visited and the rec stack and at the end of the DFS iteration for a specific vertex(i.e. reached end of chain), we 
//remove the vertex from stack. If a vertex is found in rec stack then it means we encountered again in the same chain and its a cycle.  

function canFinish(numCourses, prerequisites) {
    const seen = new Set();
    const seeing = new Set();
    const adj = [...Array(numCourses)].map(r => []);

    for (let [u, v] of prerequisites) {
        adj[v].push(u);
    }

    for (let c = 0; c < numCourses; c++) {
        if (!dfs(c)) {
            return false;
        }
    }
    return true;

    function dfs(v) {
        if (seen.has(v)) return true;
        if (seeing.has(v)) return false;

        seeing.add(v);
        for (let nv of adj[v]) {
            if (!dfs(nv)) {
                return false;
            }
        }
        seeing.delete(v);
        seen.add(v);
        return true;
    }
}